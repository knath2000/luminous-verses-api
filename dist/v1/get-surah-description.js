"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../lib/prisma");
exports.default = async (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (request.method === 'OPTIONS') {
        return response.status(200).end();
    }
    try {
        const { surahId } = request.query;
        if (!surahId) {
            return response.status(400).json({ error: 'surahId is required' });
        }
        const surahInfo = await prisma_1.prisma.quranSurah.findUnique({
            where: {
                number: Number(surahId),
            },
            select: {
                arabicName: true,
                transliteration: true,
                englishName: true,
                revelationType: true,
                ayas: true,
                chronologicalOrder: true,
            },
        });
        if (surahInfo) {
            const description = `${surahInfo.englishName} (${surahInfo.transliteration}) is a ${surahInfo.revelationType} Surah with ${surahInfo.ayas} verses. It is the ${surahInfo.chronologicalOrder}${getOrdinalSuffix(surahInfo.chronologicalOrder)} chapter revealed chronologically.`;
            response.status(200).json({
                description,
                surahInfo
            });
        }
        else {
            response.status(404).json({ error: 'Surah not found for this surahId' });
        }
    }
    catch (error) {
        console.error('Error fetching surah description:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
};
function getOrdinalSuffix(num) {
    const j = num % 10;
    const k = num % 100;
    if (j === 1 && k !== 11)
        return "st";
    if (j === 2 && k !== 12)
        return "nd";
    if (j === 3 && k !== 13)
        return "rd";
    return "th";
}
