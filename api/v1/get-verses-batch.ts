import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCorsHeaders } from '../lib/cors';
import { optimizedPrisma, QueryPerformanceMonitor, ApiCache, BatchQueryOptimizer } from '../lib/optimized-prisma';

interface BatchVerseResponse {
  id: number;
  surahId: number;
  numberInSurah: number;
  text: string;
  translation?: string;
  transliteration?: {
    raw?: string;
    clean?: string;
    formatted?: string;
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(req, res);

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { surah, start, end, include, translator = 'en.yusufali' } = req.query;
  
  const surahNumber = parseInt(surah as string);
  const startVerse = parseInt(start as string) || 1;
  const endVerse = parseInt(end as string) || startVerse + 19; // Default chunk size of 20
  const includeOptions = (include as string)?.split(',') || [];
  
  // Validation
  if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
    return res.status(400).json({ error: 'Invalid surah number' });
  }
  
  if (startVerse < 1 || endVerse < startVerse) {
    return res.status(400).json({ error: 'Invalid verse range' });
  }

  // Limit batch size to prevent abuse
  if (endVerse - startVerse > 50) {
    return res.status(400).json({ error: 'Batch size too large. Maximum 50 verses per request.' });
  }

  // Check cache first
  const cacheKey = `verses-batch-${surahNumber}-${startVerse}-${endVerse}-${includeOptions.join(',')}`;
  const cachedResult = ApiCache.get<any>(cacheKey);
  if (cachedResult) {
    return res.status(200).json(cachedResult);
  }

  const timer = QueryPerformanceMonitor.startTimer(`batch-${surahNumber}-${startVerse}-${endVerse}`);

  try {
    // Optimized batch query strategy - fetch all data in parallel
    const queries: Promise<any>[] = [];
    
    // Query 1: Get Arabic verses
    const arabicVersesQuery = optimizedPrisma.quranText.findMany({
      where: {
        sura: surahNumber,
        aya: {
          gte: startVerse,
          lte: endVerse
        }
      },
      orderBy: { aya: 'asc' },
      select: {
        id: true,
        sura: true,
        aya: true,
        text: true
      }
    });
    queries.push(arabicVersesQuery);

    // Query 2: Get translations if requested (batch query)
    let translationsQuery: Promise<any> | null = null;
    if (includeOptions.includes('translation')) {
      translationsQuery = optimizedPrisma.enYusufali.findMany({
        where: {
          sura: surahNumber,
          aya: {
            gte: startVerse,
            lte: endVerse
          }
        },
        orderBy: { aya: 'asc' },
        select: {
          aya: true,
          text: true
        }
      });
      queries.push(translationsQuery);
    }

    // Query 3: Get transliterations if requested (batch query)
    let transliterationsQuery: Promise<any> | null = null;
    if (includeOptions.includes('transliteration')) {
      transliterationsQuery = optimizedPrisma.quranTransliteration.findMany({
        where: {
          sura: surahNumber,
          aya: {
            gte: startVerse,
            lte: endVerse
          }
        },
        orderBy: { aya: 'asc' },
        select: {
          aya: true,
          rawText: true,
          cleanText: true,
          formattedText: true
        }
      });
      queries.push(transliterationsQuery);
    }

    // Execute all queries in parallel using optimized batch execution
    const results = await BatchQueryOptimizer.executeBatch(queries);
    const arabicVerses = results[0];
    
    if (arabicVerses.length === 0) {
      const duration = timer();
      return res.status(404).json({ 
        error: 'No verses found for the specified range',
        performance: { queryTime: duration }
      });
    }

    // Create lookup maps for O(1) access
    const translationsMap = new Map();
    const transliterationsMap = new Map();
    
    if (includeOptions.includes('translation') && results[1]) {
      results[1].forEach((t: any) => {
        translationsMap.set(Number(t.aya), t.text);
      });
    }
    
    if (includeOptions.includes('transliteration')) {
      const transliterationResults = includeOptions.includes('translation') ? results[2] : results[1];
      if (transliterationResults) {
        transliterationResults.forEach((t: any) => {
          transliterationsMap.set(Number(t.aya), {
            raw: t.rawText,
            clean: t.cleanText,
            formatted: t.formattedText
          });
        });
      }
    }

    // Build response efficiently
    const batchResults: BatchVerseResponse[] = arabicVerses.map((verse: any) => {
      const verseNumber = Number(verse.aya);
      const result: BatchVerseResponse = {
        id: Number(verse.id),
        surahId: Number(verse.sura),
        numberInSurah: verseNumber,
        text: verse.text || ''
      };

      // Add translation if available
      if (includeOptions.includes('translation')) {
        result.translation = translationsMap.get(verseNumber) || 'Translation not available';
      }

      // Add transliteration if available
      if (includeOptions.includes('transliteration')) {
        const transliteration = transliterationsMap.get(verseNumber);
        if (transliteration) {
          result.transliteration = transliteration;
        }
      }

      return result;
    });

    const duration = timer();

    // Response with metadata and performance info
    const response = {
      success: true,
      data: {
        surahId: surahNumber,
        verses: batchResults,
        pagination: {
          start: startVerse,
          end: Math.min(endVerse, Number(arabicVerses[arabicVerses.length - 1].aya || 0)),
          total: batchResults.length,
          hasMore: endVerse < 286 // Max verses in any surah (Al-Baqarah)
        },
        includes: includeOptions,
        translator: includeOptions.includes('translation') ? translator : undefined
      },
      performance: {
        queryTime: duration,
        queriesExecuted: queries.length,
        cacheHit: false
      }
    };

    // Cache the response for 5 minutes
    ApiCache.set(cacheKey, response, 300);

    return res.status(200).json(response);

  } catch (error) {
    const duration = timer();
    console.error('Database error in get-verses-batch:', error);
    
    return res.status(500).json({ 
      error: 'Database error',
      performance: { queryTime: duration },
      details: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
}