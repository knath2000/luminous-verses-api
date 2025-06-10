import { PrismaClient } from '../prisma/generated/client';
import * as fs from 'fs';
import { parseStringPromise } from 'xml2js';

const prisma = new PrismaClient();

interface TransliterationData {
  sura: number;
  aya: number;
  rawText: string;
  cleanText: string;
  formattedText: string;
}

// Decode HTML entities
function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

// Remove all HTML markup for clean text
function cleanMarkup(text: string): string {
  return text.replace(/<[^>]*>/g, '');
}

// Convert markup to proper HTML for web display
function formatForWeb(text: string): string {
  return text
    .replace(/<u>/g, '<u>')
    .replace(/<\/u>/g, '</u>')
    .replace(/<U>/g, '<u>')
    .replace(/<\/U>/g, '</u>')
    .replace(/<b>/g, '<b>')
    .replace(/<\/b>/g, '</b>')
    .replace(/<B>/g, '<b>')
    .replace(/<\/B>/g, '</b>')
    .replace(/<i>/g, '<i>')
    .replace(/<\/i>/g, '</i>')
    .replace(/<I>/g, '<i>')
    .replace(/<\/I>/g, '</i>');
}

// Clean XML content to fix malformed comments
function cleanXmlContent(xmlContent: string): string {
  // Fix malformed XML comments that contain double hyphens
  // Replace problematic comment patterns while preserving content
  return xmlContent
    .replace(/<!--[\s\S]*?-->/g, (match) => {
      // Clean up double hyphens inside comments that aren't part of the comment delimiters
      const commentContent = match.slice(4, -3); // Remove <!-- and -->
      const cleanedContent = commentContent
        .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/#\s*-+/g, '#') // Remove problematic dash patterns after #
        .trim();
      return `<!-- ${cleanedContent} -->`;
    });
}

// Parse XML file and extract transliteration data
async function parseXmlFile(filePath: string): Promise<TransliterationData[]> {
  try {
    console.log('Reading XML file...');
    const rawXmlContent = fs.readFileSync(filePath, 'utf-8');
    
    console.log('Cleaning XML content to fix malformed comments...');
    const xmlContent = cleanXmlContent(rawXmlContent);
    
    console.log('Parsing cleaned XML content...');
    const result = await parseStringPromise(xmlContent, {
      trim: true,
      explicitArray: false,
      mergeAttrs: false,
      explicitCharkey: false
    });
    
    const transliterations: TransliterationData[] = [];
    
    if (result.quran && result.quran.sura) {
      console.log(`Found ${Array.isArray(result.quran.sura) ? result.quran.sura.length : 1} surahs in XML`);
      
      const suras = Array.isArray(result.quran.sura) ? result.quran.sura : [result.quran.sura];
      
      for (const sura of suras) {
        const surahNumber = parseInt(sura.$.index);
        console.log(`Processing Surah ${surahNumber}...`);
        
        if (sura.aya) {
          const ayas = Array.isArray(sura.aya) ? sura.aya : [sura.aya];
          
          for (const aya of ayas) {
            const ayahNumber = parseInt(aya.$.index);
            const rawText = decodeHtmlEntities(aya.$.text);
            
            if (!rawText || rawText.trim() === '') {
              console.warn(`Warning: Empty text for Surah ${surahNumber}, Ayah ${ayahNumber}`);
              continue;
            }
            
            transliterations.push({
              sura: surahNumber,
              aya: ayahNumber,
              rawText: rawText,
              cleanText: cleanMarkup(rawText),
              formattedText: formatForWeb(rawText)
            });
          }
          
          console.log(`  Processed ${ayas.length} ayahs`);
        } else {
          console.warn(`Warning: No ayahs found for Surah ${surahNumber}`);
        }
      }
    } else {
      throw new Error('Invalid XML structure: No quran or sura elements found');
    }
    
    return transliterations;
  } catch (error) {
    console.error('Error parsing XML file:', error);
    console.error('XML parsing failed. This might be due to:');
    console.error('1. Malformed XML comments or structure');
    console.error('2. Encoding issues');
    console.error('3. File corruption');
    
    // Provide helpful debugging information
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      if (error.message.includes('Malformed comment')) {
        console.error('Suggestion: The XML file contains malformed comments. Try cleaning the XML manually.');
      }
    }
    
    throw error;
  }
}

// Batch insert transliterations to database
async function batchInsert(transliterations: TransliterationData[], batchSize: number = 100) {
  console.log(`Starting to insert ${transliterations.length} transliterations...`);
  
  for (let i = 0; i < transliterations.length; i += batchSize) {
    const batch = transliterations.slice(i, i + batchSize);
    
    try {
      await prisma.quranTransliteration.createMany({
        data: batch.map(t => ({
          sura: BigInt(t.sura),
          aya: BigInt(t.aya),
          rawText: t.rawText,
          cleanText: t.cleanText,
          formattedText: t.formattedText,
          source: 'tanzil.net'
        })),
        skipDuplicates: true
      });
      
      console.log(`Inserted batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(transliterations.length / batchSize)}`);
    } catch (error) {
      console.error(`Error inserting batch starting at index ${i}:`, error);
      throw error;
    }
  }
}

// Validate data integrity
async function validateData() {
  console.log('Validating transliteration data...');
  
  // Check total count
  const totalCount = await prisma.quranTransliteration.count();
  console.log(`Total transliterations in database: ${totalCount}`);
  
  // Check for missing surahs
  const surahCounts = await prisma.quranTransliteration.groupBy({
    by: ['sura'],
    _count: {
      aya: true
    },
    orderBy: {
      sura: 'asc'
    }
  });
  
  console.log('Surah counts:');
  surahCounts.forEach(surah => {
    console.log(`Surah ${surah.sura}: ${surah._count.aya} ayahs`);
  });
  
  // Check for any missing ayahs in first few surahs
  for (let surah = 1; surah <= 5; surah++) {
    const ayahs = await prisma.quranTransliteration.findMany({
      where: { sura: BigInt(surah) },
      select: { aya: true },
      orderBy: { aya: 'asc' }
    });
    
    const ayahNumbers = ayahs.map(a => Number(a.aya));
    const expectedCount = surah === 1 ? 7 : surah === 2 ? 286 : surah === 3 ? 200 : surah === 4 ? 176 : 120;
    
    if (ayahNumbers.length !== expectedCount) {
      console.warn(`Surah ${surah}: Expected ${expectedCount} ayahs, found ${ayahNumbers.length}`);
    }
  }
}

// Main execution function
async function main() {
  try {
    console.log('🚀 Starting transliteration data population...');
    console.log('=====================================');
    
    // Check if XML file exists
    const xmlFilePath = './data/en.transliteration.xml';
    if (!fs.existsSync(xmlFilePath)) {
      console.error(`❌ XML file not found at ${xmlFilePath}`);
      console.log('💡 Tip: Make sure the XML file is in the correct location');
      throw new Error(`XML file not found at ${xmlFilePath}`);
    }
    
    console.log(`✅ XML file found at ${xmlFilePath}`);
    
    // Test database connection
    console.log('🔍 Testing database connection...');
    try {
      await prisma.$connect();
      console.log('✅ Database connection successful');
    } catch (dbError) {
      console.error('❌ Database connection failed:', dbError);
      throw new Error('Database connection failed. Please check your DATABASE_URL and database status.');
    }
    
    // Parse XML data
    console.log('📖 Parsing XML file...');
    const transliterations = await parseXmlFile(xmlFilePath);
    console.log(`✅ Parsed ${transliterations.length} transliterations`);
    
    // Sample the first few entries for verification
    console.log('🔍 Sample data:');
    transliterations.slice(0, 3).forEach(t => {
      console.log(`Surah ${t.sura}, Ayah ${t.aya}:`);
      console.log(`  Raw: ${t.rawText.substring(0, 50)}...`);
      console.log(`  Clean: ${t.cleanText.substring(0, 50)}...`);
      console.log(`  Formatted: ${t.formattedText.substring(0, 50)}...`);
    });
    
    // Insert data
    console.log('💾 Inserting data to database...');
    await batchInsert(transliterations);
    
    // Validate insertion
    console.log('🔍 Validating data integrity...');
    await validateData();
    
    console.log('✅ Transliteration data population completed successfully!');
    console.log('=====================================');
    
  } catch (error) {
    console.error('❌ Error during transliteration population:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
if (require.main === module) {
  main();
}

export { parseXmlFile, decodeHtmlEntities, cleanMarkup, formatForWeb };