"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const cors_1 = require("../lib/cors");
const prisma_1 = require("../lib/prisma");
async function handler(req, res) {
    console.log('get-metadata API handler invoked.');
    (0, cors_1.setCorsHeaders)(req, res);
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    const { type } = req.query;
    try {
        switch (type) {
            case 'surah-list':
                console.log('Fetching surah-list...');
                const surahs = await prisma_1.prisma.quranSurah.findMany({
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
                return res.status(200).json(surahs.map((s) => ({
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
                const sajdas = await prisma_1.prisma.quranSajda.findMany({
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
                const defaultSurahs = await prisma_1.prisma.quranSurah.findMany({
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
                        surahs: defaultSurahs.map((s) => ({
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
    }
    catch (error) {
        console.error('API Error in get-metadata:', error.message || error);
        return res.status(500).json({
            error: 'Internal Server Error',
            details: error.message || 'Unknown error'
        });
    }
}
