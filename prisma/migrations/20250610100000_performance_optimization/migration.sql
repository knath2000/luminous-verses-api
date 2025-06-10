-- Performance Optimization Migration for Quran Data API
-- This migration adds indexes and optimizations based on query patterns

-- Add indexes for frequently queried columns
-- QuranText table indexes
CREATE INDEX IF NOT EXISTS "idx_quran_text_sura_aya" ON "quran_text" ("sura", "aya");
CREATE INDEX IF NOT EXISTS "idx_quran_text_sura" ON "quran_text" ("sura");

-- EnYusufali table indexes  
CREATE INDEX IF NOT EXISTS "idx_en_yusufali_sura_aya" ON "en_yusufali" ("sura", "aya");
CREATE INDEX IF NOT EXISTS "idx_en_yusufali_sura" ON "en_yusufali" ("sura");

-- QuranTransliteration table indexes
CREATE INDEX IF NOT EXISTS "idx_quran_transliterations_sura_aya" ON "quran_transliterations" ("sura", "aya");
CREATE INDEX IF NOT EXISTS "idx_quran_transliterations_sura" ON "quran_transliterations" ("sura");

-- QuranSurah table indexes
CREATE INDEX IF NOT EXISTS "idx_quran_surahs_number" ON "quran_surahs" ("number");

-- QuranSajda table indexes
CREATE INDEX IF NOT EXISTS "idx_quran_sajdas_surah_ayah" ON "quran_sajdas" ("surah_number", "ayah_number");

-- SurahDescription table indexes
CREATE INDEX IF NOT EXISTS "idx_surah_descriptions_surah_id" ON "surah_descriptions" ("surah_id");

-- UserBookmark table indexes for better query performance
CREATE INDEX IF NOT EXISTS "idx_user_bookmarks_userid" ON "user_bookmarks" ("userid");
CREATE INDEX IF NOT EXISTS "idx_user_bookmarks_surahid" ON "user_bookmarks" ("surahid");
CREATE INDEX IF NOT EXISTS "idx_user_bookmarks_userid_surahid" ON "user_bookmarks" ("userid", "surahid");

-- Add partial indexes for common query patterns
-- Index for published/active content (if applicable)
-- CREATE INDEX IF NOT EXISTS "idx_active_content" ON "table_name" ("status") WHERE "status" = 'active';

-- Optimize text search if needed (for future full-text search)
-- CREATE INDEX IF NOT EXISTS "idx_quran_text_fulltext" ON "quran_text" USING gin(to_tsvector('arabic', "text"));
-- CREATE INDEX IF NOT EXISTS "idx_en_yusufali_fulltext" ON "en_yusufali" USING gin(to_tsvector('english', "text"));

-- Add statistics update for better query planning
ANALYZE "quran_text";
ANALYZE "en_yusufali"; 
ANALYZE "quran_transliterations";
ANALYZE "quran_surahs";
ANALYZE "quran_sajdas";
ANALYZE "surah_descriptions";
ANALYZE "user_bookmarks";