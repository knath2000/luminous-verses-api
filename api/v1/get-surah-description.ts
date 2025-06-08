import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../lib/prisma';

export default async (request: VercelRequest, response: VercelResponse) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  try {
    const { surahId } = request.query;

    if (!surahId) {
      return response.status(400).json({ 
        error: 'surahId parameter is required',
        usage: '/api/v1/get-surah-description?surahId=1' 
      });
    }

    const surahNumber = parseInt(surahId as string);
    
    if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
      return response.status(400).json({ 
        error: 'Invalid surahId. Must be between 1 and 114',
        received: surahId 
      });
    }

    // Query for surah info and description from Neon database
    const surahInfo = await prisma.quranSurah.findUnique({
      where: {
        number: BigInt(surahNumber),
      },
      select: {
        number: true,
        arabicName: true,
        transliteration: true,
        englishName: true,
        revelationType: true,
        ayas: true,
        chronologicalOrder: true,
        rukus: true,
      },
    });

    if (!surahInfo) {
      return response.status(404).json({ 
        error: 'Surah not found',
        surahId: surahNumber 
      });
    }

    // Query for rich description
    const surahDescription = await prisma.surahDescription.findUnique({
      where: {
        surahId: BigInt(surahNumber),
      },
      select: {
        description: true,
        updatedAt: true,
      },
    });

    // Return rich description if available
    if (surahDescription && surahDescription.description) {
      return response.status(200).json({
        success: true,
        source: "neon_database",
        surah: {
          id: Number(surahInfo.number),
          name: {
            arabic: surahInfo.arabicName,
            transliteration: surahInfo.transliteration,
            english: surahInfo.englishName
          },
          description: surahDescription.description,
          metadata: {
            totalVerses: Number(surahInfo.ayas),
            revelationType: surahInfo.revelationType,
            chronologicalOrder: Number(surahInfo.chronologicalOrder),
            rukus: Number(surahInfo.rukus),
            lastUpdated: surahDescription.updatedAt
          }
        }
      });
    }

    // Fallback to generated description if no rich content
    const fallbackDescription = generateFallbackDescription(surahInfo);
    
    return response.status(200).json({
      success: true,
      source: "generated_fallback",
      surah: {
        id: Number(surahInfo.number),
        name: {
          arabic: surahInfo.arabicName,
          transliteration: surahInfo.transliteration,
          english: surahInfo.englishName
        },
        description: fallbackDescription,
        metadata: {
          totalVerses: Number(surahInfo.ayas),
          revelationType: surahInfo.revelationType,
          chronologicalOrder: Number(surahInfo.chronologicalOrder),
          rukus: Number(surahInfo.rukus)
        }
      },
      note: "Rich description not available. Generated from basic surah information."
    });

  } catch (error) {
    console.error('Error fetching surah description:', error);
    return response.status(500).json({ 
      error: 'Internal Server Error',
      details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : undefined
    });
  }
};

function generateFallbackDescription(surah: any): string {
  const ordinal = getOrdinalSuffix(Number(surah.chronologicalOrder));
  return `${surah.englishName} (${surah.transliteration}) is a ${surah.revelationType} Surah with ${Number(surah.ayas)} verses. It is the ${Number(surah.chronologicalOrder)}${ordinal} chapter revealed chronologically.`;
}

function getOrdinalSuffix(num: number): string {
  const j = num % 10;
  const k = num % 100;
  if (j === 1 && k !== 11) return "st";
  if (j === 2 && k !== 12) return "nd";
  if (j === 3 && k !== 13) return "rd";
  return "th";
}