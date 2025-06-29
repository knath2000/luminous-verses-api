import type { VercelRequest, VercelResponse } from '@vercel/node';
import { QuranSurah } from '../../prisma/generated/client'; // Import from generated client path
import { setCorsHeaders } from '../lib/cors';
import { prisma } from '../lib/prisma';


export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('get-metadata API handler invoked.');

  setCorsHeaders(req, res);

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { type } = req.query;

  try {
    switch (type) {
      case 'surah-list':
        console.log('Fetching surah-list...');
        const surahs = await prisma.quranSurah.findMany({
          orderBy: { number: 'asc' },
          select: {
            number: true,
            arabicName: true,
            transliteration: true,
            englishName: true,
            ayas: true,
            revelationType: true,
            chronologicalOrder: true,
            rukus: true,
            startIndex: true
          },
        });
        
        return res.status(200).json(surahs.map((s: QuranSurah) => ({
          number: Number(s.number),
          name: s.arabicName,
          tname: s.transliteration,
          ename: s.englishName,
          ayas: Number(s.ayas),
          type: s.revelationType,
          order: Number(s.chronologicalOrder),
          rukus: Number(s.rukus),
          startIndex: Number(s.startIndex)
        })));

      case 'sajdas':
        console.log('Fetching sajdas...');
        const sajdas = await prisma.quranSajda.findMany({
          orderBy: [{ surahNumber: 'asc' }, { ayahNumber: 'asc' }]
        });
        return res.status(200).json(sajdas.map(sajda => ({
          ...sajda,
          surahNumber: Number(sajda.surahNumber),
          ayahNumber: Number(sajda.ayahNumber)
        })));

      case undefined:
      case null:
      case '':
        // DEFAULT: Return both surah list and available types
        console.log('No type specified, returning default metadata...');
        
        const defaultSurahs = await prisma.quranSurah.findMany({
          orderBy: { number: 'asc' },
          select: {
            number: true,
            arabicName: true,
            transliteration: true,
            englishName: true,
            ayas: true,
            revelationType: true,
            chronologicalOrder: true,
            rukus: true,
            startIndex: true
          },
        });

        return res.status(200).json({
          version: "1.0",
          availableTypes: ["surah-list", "sajdas"],
          usage: {
            "surah-list": "/api/v1/get-metadata?type=surah-list",
            "sajdas": "/api/v1/get-metadata?type=sajdas"
          },
          defaultData: {
            totalSurahs: defaultSurahs.length,
            surahs: defaultSurahs.map((s: QuranSurah) => ({
              number: Number(s.number),
              name: s.arabicName,
              tname: s.transliteration,
              ename: s.englishName,
              ayas: Number(s.ayas),
              type: s.revelationType,
              order: Number(s.chronologicalOrder),
              rukus: Number(s.rukus),
              startIndex: Number(s.startIndex)
            }))
          }
        });

      default:
        console.warn('Invalid metadata type:', type);
        return res.status(400).json({
          error: 'Invalid metadata type',
          received: type,
          validTypes: ['surah-list', 'sajdas'],
          usage: {
            "surah-list": "/api/v1/get-metadata?type=surah-list",
            "sajdas": "/api/v1/get-metadata?type=sajdas"
          }
        });
    }
  } catch (error: any) {
    console.error('API Error in get-metadata:', error.message || error);
    return res.status(500).json({
      error: 'Internal Server Error',
      details: error.message || 'Unknown error'
    });
  }
}