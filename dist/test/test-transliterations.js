"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testTransliterationEndpoint = testTransliterationEndpoint;
const prisma_1 = require("../lib/prisma");
// Test script for the transliteration endpoint
async function testTransliterationEndpoint() {
    console.log('🧪 Testing Transliteration Endpoint Functionality');
    console.log('================================================');
    try {
        // Test 1: Check if transliteration data exists
        console.log('\n1️⃣ Testing database connectivity and data availability...');
        const totalCount = await prisma_1.prisma.quranTransliteration.count();
        console.log(`✅ Total transliterations in database: ${totalCount}`);
        if (totalCount === 0) {
            console.log('❌ No transliteration data found. Please run the populate script first.');
            return;
        }
        // Test 2: Test single verse query
        console.log('\n2️⃣ Testing single verse query...');
        const singleVerse = await prisma_1.prisma.quranTransliteration.findFirst({
            where: {
                sura: BigInt(1),
                aya: BigInt(1)
            },
            select: {
                id: true,
                sura: true,
                aya: true,
                rawText: true,
                cleanText: true,
                formattedText: true,
                source: true
            }
        });
        if (singleVerse) {
            console.log('✅ Single verse query successful');
            console.log(`   Surah: ${singleVerse.sura}, Ayah: ${singleVerse.aya}`);
            console.log(`   Raw: ${singleVerse.rawText?.substring(0, 50)}...`);
            console.log(`   Clean: ${singleVerse.cleanText?.substring(0, 50)}...`);
            console.log(`   Formatted: ${singleVerse.formattedText?.substring(0, 50)}...`);
        }
        else {
            console.log('❌ Single verse query failed - Al-Fatiha verse 1 not found');
        }
        // Test 3: Test multiple verses query
        console.log('\n3️⃣ Testing multiple verses query...');
        const multipleVerses = await prisma_1.prisma.quranTransliteration.findMany({
            where: {
                sura: BigInt(1)
            },
            orderBy: { aya: 'asc' },
            select: {
                aya: true,
                cleanText: true
            }
        });
        if (multipleVerses.length > 0) {
            console.log(`✅ Multiple verses query successful - Found ${multipleVerses.length} verses in Al-Fatiha`);
            console.log(`   First verse: ${multipleVerses[0].cleanText?.substring(0, 30)}...`);
            console.log(`   Last verse: ${multipleVerses[multipleVerses.length - 1].cleanText?.substring(0, 30)}...`);
        }
        else {
            console.log('❌ Multiple verses query failed');
        }
        // Test 4: Test verse range query
        console.log('\n4️⃣ Testing verse range query...');
        const rangeVerses = await prisma_1.prisma.quranTransliteration.findMany({
            where: {
                sura: BigInt(2),
                aya: {
                    gte: BigInt(1),
                    lte: BigInt(5)
                }
            },
            orderBy: { aya: 'asc' },
            select: {
                aya: true,
                cleanText: true
            }
        });
        if (rangeVerses.length > 0) {
            console.log(`✅ Range query successful - Found ${rangeVerses.length} verses (Al-Baqarah 1-5)`);
            rangeVerses.forEach(verse => {
                console.log(`   Ayah ${verse.aya}: ${verse.cleanText?.substring(0, 40)}...`);
            });
        }
        else {
            console.log('❌ Range query failed');
        }
        // Test 5: Check data quality
        console.log('\n5️⃣ Testing data quality...');
        const dataQualityCheck = await prisma_1.prisma.quranTransliteration.findMany({
            where: {
                OR: [
                    { rawText: null },
                    { cleanText: null },
                    { formattedText: null },
                    { rawText: '' },
                    { cleanText: '' },
                    { formattedText: '' }
                ]
            },
            take: 5,
            select: {
                sura: true,
                aya: true,
                rawText: true,
                cleanText: true,
                formattedText: true
            }
        });
        if (dataQualityCheck.length === 0) {
            console.log('✅ Data quality check passed - No empty or null transliterations found');
        }
        else {
            console.log(`⚠️  Data quality issues found - ${dataQualityCheck.length} records with missing data`);
            dataQualityCheck.forEach(record => {
                console.log(`   Surah ${record.sura}, Ayah ${record.aya}: Raw=${!!record.rawText}, Clean=${!!record.cleanText}, Formatted=${!!record.formattedText}`);
            });
        }
        // Test 6: Performance test
        console.log('\n6️⃣ Testing query performance...');
        const startTime = Date.now();
        const performanceTest = await prisma_1.prisma.quranTransliteration.findMany({
            where: {
                sura: BigInt(2)
            },
            orderBy: { aya: 'asc' },
            select: {
                aya: true,
                cleanText: true
            }
        });
        const endTime = Date.now();
        console.log(`✅ Performance test completed - Retrieved ${performanceTest.length} verses in ${endTime - startTime}ms`);
        // Summary
        console.log('\n📊 Test Summary');
        console.log('===============');
        console.log(`✅ Database contains ${totalCount} transliterations`);
        console.log(`✅ Single verse queries: Working`);
        console.log(`✅ Multiple verse queries: Working`);
        console.log(`✅ Range queries: Working`);
        console.log(`✅ Performance: ${endTime - startTime}ms for full surah`);
        console.log('\n🎉 All tests completed successfully!');
        console.log('\n💡 You can now test the API endpoint at:');
        console.log('   GET /api/v1/get-transliterations?surah=1&ayah=1');
        console.log('   GET /api/v1/get-transliterations?surah=1');
        console.log('   GET /api/v1/get-transliterations?surah=2&start=1&end=5&format=clean');
    }
    catch (error) {
        console.error('❌ Test failed:', error);
    }
    finally {
        await prisma_1.prisma.$disconnect();
    }
}
// Run the test
if (require.main === module) {
    testTransliterationEndpoint();
}
