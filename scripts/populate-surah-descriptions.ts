import { prisma } from '../api/lib/prisma';
import * as fs from 'fs';
import * as path from 'path';

interface SurahDescriptionData {
  surah_id: string;
  description: string;
  updated_at: string;
}

async function populateSurahDescriptions() {
  try {
    // Read the JSON file from Downloads directory
    const jsonPath = path.join(process.cwd(), '../../Downloads/surah_descriptions.json');
    const rawData = fs.readFileSync(jsonPath, 'utf8');
    const descriptions: SurahDescriptionData[] = JSON.parse(rawData);

    console.log(`Processing ${descriptions.length} surah descriptions...`);

    let processedCount = 0;
    let skippedCount = 0;

    for (const desc of descriptions) {
      const surahId = parseInt(desc.surah_id);
      
      // Skip the incorrect entry for surah 13 (Ray's Mill Pond content)
      if (surahId === 13 && desc.description.includes("Ray's Mill Pond")) {
        console.log(`⚠️  Skipping invalid data for Surah ${surahId} (contains incorrect content)`);
        skippedCount++;
        continue;
      }

      try {
        await prisma.surahDescription.upsert({
          where: { surahId: BigInt(surahId) },
          update: {
            description: desc.description,
            updatedAt: new Date(desc.updated_at)
          },
          create: {
            surahId: BigInt(surahId),
            description: desc.description,
            updatedAt: new Date(desc.updated_at)
          }
        });

        console.log(`✅ Processed Surah ${surahId}`);
        processedCount++;
      } catch (error) {
        console.error(`❌ Error processing Surah ${surahId}:`, error);
      }
    }

    // Add a proper description for Surah 13 (Ar-Ra'd - The Thunder)
    console.log('📝 Adding correct description for Surah 13 (Ar-Ra\'d)...');
    await prisma.surahDescription.upsert({
      where: { surahId: BigInt(13) },
      update: {
        description: `**Surah Ar-Ra'd (The Thunder)**, Surah 13, is a Medinan Surah emphasizing God's power through natural phenomena, particularly thunder and lightning as manifestations of divine majesty. Historically, it addresses the early Muslim community's need for reassurance about God's ultimate control over creation. Its main themes include divine unity (Tawhid), the signs of God in creation, and the certainty of resurrection and judgment. The Surah draws powerful analogies from nature - thunder that glorifies God, rain that brings life to dead earth, and the alternation of day and night - to demonstrate God's sovereignty. It addresses the disbelievers' denial and presents logical arguments for monotheism, emphasizing that guidance comes from God alone. Unique features include its vivid descriptions of natural phenomena as divine signs, the metaphor of good and evil words as good and bad trees, and its emphasis on the Quran as a clear Arabic revelation. The Surah serves as a powerful reminder that just as God controls the natural world, He also controls human destiny and the ultimate outcome of belief and disbelief.`,
        updatedAt: new Date()
      },
      create: {
        surahId: BigInt(13),
        description: `**Surah Ar-Ra'd (The Thunder)**, Surah 13, is a Medinan Surah emphasizing God's power through natural phenomena, particularly thunder and lightning as manifestations of divine majesty. Historically, it addresses the early Muslim community's need for reassurance about God's ultimate control over creation. Its main themes include divine unity (Tawhid), the signs of God in creation, and the certainty of resurrection and judgment. The Surah draws powerful analogies from nature - thunder that glorifies God, rain that brings life to dead earth, and the alternation of day and night - to demonstrate God's sovereignty. It addresses the disbelievers' denial and presents logical arguments for monotheism, emphasizing that guidance comes from God alone. Unique features include its vivid descriptions of natural phenomena as divine signs, the metaphor of good and evil words as good and bad trees, and its emphasis on the Quran as a clear Arabic revelation. The Surah serves as a powerful reminder that just as God controls the natural world, He also controls human destiny and the ultimate outcome of belief and disbelief.`,
        updatedAt: new Date()
      }
    });

    console.log('✅ Added correct description for Surah 13');
    processedCount++;

    console.log('\n🎉 Population Summary:');
    console.log(`✅ Successfully processed: ${processedCount} descriptions`);
    console.log(`⚠️  Skipped invalid entries: ${skippedCount}`);
    console.log(`📊 Total surahs with descriptions: ${processedCount}`);
    
    // Verify we have all 114 surahs
    const totalCount = await prisma.surahDescription.count();
    console.log(`🔍 Database verification: ${totalCount} descriptions in database`);
    
    if (totalCount === 114) {
      console.log('🎯 Perfect! All 114 surahs have descriptions.');
    } else {
      console.log(`⚠️  Warning: Expected 114 descriptions, found ${totalCount}`);
    }
    
  } catch (error) {
    console.error('❌ Error populating descriptions:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the population script
populateSurahDescriptions()
  .then(() => {
    console.log('🏁 Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Script failed:', error);
    process.exit(1);
  });