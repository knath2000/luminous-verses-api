import type { VercelRequest, VercelResponse } from '@vercel/node';
import { QuranTransliteration } from '../../prisma/generated/client';
import { setCorsHeaders } from '../lib/cors';
import { prisma } from '../lib/prisma';

// Type definitions for better type safety
interface TransliterationFormat {
  raw?: string;
  clean?: string;
  formatted?: string;
}

interface TransliterationData {
  ayahId: number;
  transliteration: TransliterationFormat;
}

interface SingleVerseResponse {
  success: true;
  data: {
    surahId: number;
    ayahId: number;
    transliteration: TransliterationFormat;
    source: string;
  };
}

interface MultipleVersesResponse {
  success: true;
  data: {
    surahId: number;
    totalVerses: number;
    verses: TransliterationData[];
  };
  pagination: {
    start: number;
    end: number;
    total: number;
  };
}

interface ErrorResponse {
  success: false;
  error: string;
  details?: string;
  validRanges?: {
    surah: string;
    ayah?: string;
  };
}

type ApiResponse = SingleVerseResponse | MultipleVersesResponse | ErrorResponse;

// Format transliteration text based on requested format
function formatTransliteration(
  transliteration: QuranTransliteration,
  format: string
): TransliterationFormat {
  const result: TransliterationFormat = {};

  switch (format) {
    case 'raw':
      result.raw = transliteration.rawText || '';
      break;
    case 'clean':
      result.clean = transliteration.cleanText || '';
      break;
    case 'formatted':
      result.formatted = transliteration.formattedText || '';
      break;
    case 'all':
    default:
      result.raw = transliteration.rawText || '';
      result.clean = transliteration.cleanText || '';
      result.formatted = transliteration.formattedText || '';
      break;
  }

  return result;
}

// Validate surah number
function validateSurahNumber(surah: string | undefined): { isValid: boolean; surahNum?: number; error?: string } {
  if (!surah) {
    return { isValid: false, error: 'Surah parameter is required' };
  }

  const surahNum = parseInt(surah);
  if (isNaN(surahNum) || surahNum < 1 || surahNum > 114) {
    return { 
      isValid: false, 
      error: 'Invalid surah number. Must be between 1 and 114',
      surahNum 
    };
  }

  return { isValid: true, surahNum };
}

// Validate ayah number for a given surah
function validateAyahNumber(ayah: string | undefined, surahNum: number): { isValid: boolean; ayahNum?: number; error?: string } {
  if (!ayah) {
    return { isValid: true }; // Ayah is optional
  }

  const ayahNum = parseInt(ayah);
  if (isNaN(ayahNum) || ayahNum < 1) {
    return { 
      isValid: false, 
      error: 'Invalid ayah number. Must be a positive integer',
      ayahNum 
    };
  }

  // Basic validation - more specific validation would require surah metadata
  if (ayahNum > 286) { // Al-Baqarah has the most verses (286)
    return { 
      isValid: false, 
      error: 'Ayah number too high. Maximum is 286 for any surah',
      ayahNum 
    };
  }

  return { isValid: true, ayahNum };
}

// Validate verse range
function validateVerseRange(start: string | undefined, end: string | undefined): { 
  isValid: boolean; 
  startNum?: number; 
  endNum?: number; 
  error?: string 
} {
  if (!start && !end) {
    return { isValid: true }; // No range specified
  }

  if (start && !end) {
    return { isValid: false, error: 'End verse required when start verse is specified' };
  }

  if (!start && end) {
    return { isValid: false, error: 'Start verse required when end verse is specified' };
  }

  const startNum = parseInt(start!);
  const endNum = parseInt(end!);

  if (isNaN(startNum) || isNaN(endNum)) {
    return { isValid: false, error: 'Start and end verses must be valid numbers' };
  }

  if (startNum < 1 || endNum < 1) {
    return { isValid: false, error: 'Start and end verses must be positive integers' };
  }

  if (startNum > endNum) {
    return { isValid: false, error: 'Start verse must be less than or equal to end verse' };
  }

  if (endNum - startNum > 50) {
    return { isValid: false, error: 'Verse range too large. Maximum 50 verses per request' };
  }

  return { isValid: true, startNum, endNum };
}

// Validate format parameter
function validateFormat(format: string | undefined): { isValid: boolean; validFormat: string; error?: string } {
  const validFormats = ['raw', 'clean', 'formatted', 'all'];
  const requestedFormat = format || 'all';

  if (!validFormats.includes(requestedFormat)) {
    return { 
      isValid: false, 
      validFormat: 'all',
      error: `Invalid format. Must be one of: ${validFormats.join(', ')}` 
    };
  }

  return { isValid: true, validFormat: requestedFormat };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('get-transliterations API handler invoked.');

  setCorsHeaders(req, res);

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
      details: 'Only GET requests are supported'
    } as ErrorResponse);
  }

  try {
    const { surah, ayah, start, end, format } = req.query;

    // Validate surah number
    const surahValidation = validateSurahNumber(surah as string);
    if (!surahValidation.isValid) {
      return res.status(400).json({
        success: false,
        error: surahValidation.error,
        validRanges: {
          surah: '1-114'
        }
      } as ErrorResponse);
    }

    const surahNumber = surahValidation.surahNum!;

    // Validate ayah number
    const ayahValidation = validateAyahNumber(ayah as string, surahNumber);
    if (!ayahValidation.isValid) {
      return res.status(400).json({
        success: false,
        error: ayahValidation.error,
        validRanges: {
          surah: '1-114',
          ayah: '1-286 (varies by surah)'
        }
      } as ErrorResponse);
    }

    // Validate verse range
    const rangeValidation = validateVerseRange(start as string, end as string);
    if (!rangeValidation.isValid) {
      return res.status(400).json({
        success: false,
        error: rangeValidation.error,
        details: 'Use start and end parameters together for verse ranges'
      } as ErrorResponse);
    }

    // Validate format
    const formatValidation = validateFormat(format as string);
    if (!formatValidation.isValid) {
      return res.status(400).json({
        success: false,
        error: formatValidation.error,
        details: 'Format determines which transliteration text versions are returned'
      } as ErrorResponse);
    }

    const requestedFormat = formatValidation.validFormat;

    // Check for conflicting parameters
    if (ayahValidation.ayahNum && (rangeValidation.startNum || rangeValidation.endNum)) {
      return res.status(400).json({
        success: false,
        error: 'Cannot specify both ayah and verse range (start/end) parameters',
        details: 'Use ayah for single verse or start/end for verse range'
      } as ErrorResponse);
    }

    // Build query based on parameters
    let whereClause: any = {
      sura: BigInt(surahNumber)
    };

    // Single verse query
    if (ayahValidation.ayahNum) {
      whereClause.aya = BigInt(ayahValidation.ayahNum);
      
      console.log(`Fetching single verse: Surah ${surahNumber}, Ayah ${ayahValidation.ayahNum}`);
      
      const transliteration = await prisma.quranTransliteration.findFirst({
        where: whereClause,
        select: {
          id: true,
          sura: true,
          aya: true,
          rawText: true,
          cleanText: true,
          formattedText: true,
          source: true,
          createdAt: true
        }
      });

      if (!transliteration) {
        return res.status(404).json({
          success: false,
          error: 'Transliteration not found',
          details: `No transliteration found for Surah ${surahNumber}, Ayah ${ayahValidation.ayahNum}`
        } as ErrorResponse);
      }

      const response: SingleVerseResponse = {
        success: true,
        data: {
          surahId: Number(transliteration.sura),
          ayahId: Number(transliteration.aya),
          transliteration: formatTransliteration(transliteration, requestedFormat),
          source: transliteration.source || 'tanzil.net'
        }
      };

      return res.status(200).json(response);
    }

    // Multiple verses query (full surah or range)
    if (rangeValidation.startNum && rangeValidation.endNum) {
      whereClause.aya = {
        gte: BigInt(rangeValidation.startNum),
        lte: BigInt(rangeValidation.endNum)
      };
      console.log(`Fetching verse range: Surah ${surahNumber}, Ayahs ${rangeValidation.startNum}-${rangeValidation.endNum}`);
    } else {
      console.log(`Fetching full surah: Surah ${surahNumber}`);
    }

    const transliterations = await prisma.quranTransliteration.findMany({
      where: whereClause,
      orderBy: { aya: 'asc' },
      select: {
        id: true,
        sura: true,
        aya: true,
        rawText: true,
        cleanText: true,
        formattedText: true,
        source: true,
        createdAt: true
      }
    });

    if (transliterations.length === 0) {
      const rangeText = rangeValidation.startNum && rangeValidation.endNum 
        ? `Ayahs ${rangeValidation.startNum}-${rangeValidation.endNum}`
        : 'any verses';
      
      return res.status(404).json({
        success: false,
        error: 'No transliterations found',
        details: `No transliterations found for Surah ${surahNumber}, ${rangeText}`
      } as ErrorResponse);
    }

    // Format response data
    const verses: TransliterationData[] = transliterations.map(t => ({
      ayahId: Number(t.aya),
      transliteration: formatTransliteration(t, requestedFormat)
    }));

    const startVerse = rangeValidation.startNum || Number(transliterations[0].aya);
    const endVerse = rangeValidation.endNum || Number(transliterations[transliterations.length - 1].aya);

    const response: MultipleVersesResponse = {
      success: true,
      data: {
        surahId: surahNumber,
        totalVerses: transliterations.length,
        verses: verses
      },
      pagination: {
        start: startVerse,
        end: endVerse,
        total: transliterations.length
      }
    };

    return res.status(200).json(response);

  } catch (error: any) {
    console.error('API Error in get-transliterations:', error.message || error);
    return res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      details: process.env.NODE_ENV === 'development' ? (error.message || 'Unknown error') : undefined
    } as ErrorResponse);
  }
}