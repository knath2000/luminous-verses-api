-- CreateTable
CREATE TABLE IF NOT EXISTS "surah_descriptions" (
    "surah_id" BIGINT NOT NULL,
    "description" TEXT,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "surah_descriptions_pkey" PRIMARY KEY ("surah_id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "quran_transliterations" (
    "id" BIGSERIAL NOT NULL,
    "sura" BIGINT NOT NULL,
    "aya" BIGINT NOT NULL,
    "raw_text" TEXT,
    "clean_text" TEXT,
    "formatted_text" TEXT,
    "source" TEXT DEFAULT 'tanzil.net',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quran_transliterations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "quran_transliterations_sura_aya_key" ON "quran_transliterations"("sura", "aya");