
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.EnYusufaliScalarFieldEnum = {
  index: 'index',
  sura: 'sura',
  aya: 'aya',
  text: 'text'
};

exports.Prisma.QuranSajdaScalarFieldEnum = {
  sajdaId: 'sajdaId',
  surahNumber: 'surahNumber',
  ayahNumber: 'ayahNumber',
  type: 'type'
};

exports.Prisma.QuranSurahScalarFieldEnum = {
  number: 'number',
  arabicName: 'arabicName',
  transliteration: 'transliteration',
  englishName: 'englishName',
  ayas: 'ayas',
  revelationType: 'revelationType',
  chronologicalOrder: 'chronologicalOrder',
  rukus: 'rukus',
  startIndex: 'startIndex'
};

exports.Prisma.QuranTextScalarFieldEnum = {
  id: 'id',
  sura: 'sura',
  aya: 'aya',
  text: 'text'
};

exports.Prisma.SurahDescriptionScalarFieldEnum = {
  surahId: 'surahId',
  description: 'description',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  userType: 'userType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserBookmarkScalarFieldEnum = {
  id: 'id',
  userid: 'userid',
  surahid: 'surahid',
  versenumber: 'versenumber',
  versetext: 'versetext',
  surahname: 'surahname',
  translation: 'translation',
  notes: 'notes',
  createdat: 'createdat',
  updatedat: 'updatedat'
};

exports.Prisma.QuranTransliterationScalarFieldEnum = {
  id: 'id',
  sura: 'sura',
  aya: 'aya',
  rawText: 'rawText',
  cleanText: 'cleanText',
  formattedText: 'formattedText',
  source: 'source',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  EnYusufali: 'EnYusufali',
  QuranSajda: 'QuranSajda',
  QuranSurah: 'QuranSurah',
  QuranText: 'QuranText',
  SurahDescription: 'SurahDescription',
  User: 'User',
  UserBookmark: 'UserBookmark',
  QuranTransliteration: 'QuranTransliteration'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/kalyannath/projects/quran-data-api/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-3.0.x"
      },
      {
        "fromEnvVar": null,
        "value": "darwin-arm64"
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "/Users/kalyannath/projects/quran-data-api/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"./generated/client\"\n  previewFeatures = [\"driverAdapters\"]\n  binaryTargets   = [\"native\", \"rhel-openssl-3.0.x\", \"darwin-arm64\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel EnYusufali {\n  index BigInt  @id @default(autoincrement())\n  sura  BigInt?\n  aya   BigInt?\n  text  String?\n\n  @@map(\"en_yusufali\")\n}\n\nmodel QuranSajda {\n  sajdaId     BigInt  @id @default(autoincrement()) @map(\"sajda_id\")\n  surahNumber BigInt? @map(\"surah_number\")\n  ayahNumber  BigInt? @map(\"ayah_number\")\n  type        String?\n\n  @@map(\"quran_sajdas\")\n}\n\nmodel QuranSurah {\n  number             BigInt  @id @default(autoincrement())\n  arabicName         String? @map(\"arabic_name\")\n  transliteration    String?\n  englishName        String? @map(\"english_name\")\n  ayas               BigInt?\n  revelationType     String? @map(\"revelation_type\")\n  chronologicalOrder BigInt? @map(\"chronological_order\")\n  rukus              BigInt?\n  startIndex         BigInt? @map(\"start_index\")\n\n  @@map(\"quran_surahs\")\n}\n\nmodel QuranText {\n  id   BigInt  @id @default(autoincrement())\n  sura BigInt?\n  aya  BigInt?\n  text String?\n\n  @@map(\"quran_text\")\n}\n\nmodel SurahDescription {\n  surahId     BigInt    @id @map(\"surah_id\")\n  description String?\n  updatedAt   DateTime? @default(now()) @map(\"updated_at\") @db.Timestamp(6)\n\n  @@map(\"surah_descriptions\")\n}\n\nmodel User {\n  id        String   @id @default(cuid())\n  email     String   @unique\n  name      String?\n  userType  String   @default(\"guest\") @map(\"user_type\") // 'guest' or 'registered'\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  // Relations\n  bookmarks UserBookmark[]\n\n  @@map(\"users\")\n}\n\nmodel UserBookmark {\n  id          String    @id(map: \"sqlite_autoindex_user_bookmarks_1\") @default(cuid())\n  userid      String?\n  surahid     BigInt?\n  versenumber BigInt?\n  versetext   String?\n  surahname   String?\n  translation String?\n  notes       String?\n  createdat   DateTime? @default(now()) @db.Timestamptz(6)\n  updatedat   DateTime? @default(now()) @db.Timestamptz(6)\n\n  // Relations\n  user User? @relation(fields: [userid], references: [id])\n\n  @@unique([userid, surahid, versenumber], map: \"sqlite_autoindex_user_bookmarks_2\")\n  @@map(\"user_bookmarks\")\n}\n\nmodel QuranTransliteration {\n  id            BigInt   @id @default(autoincrement())\n  sura          BigInt\n  aya           BigInt\n  rawText       String?  @map(\"raw_text\")\n  cleanText     String?  @map(\"clean_text\")\n  formattedText String?  @map(\"formatted_text\")\n  source        String?  @default(\"tanzil.net\")\n  createdAt     DateTime @default(now()) @map(\"created_at\")\n\n  @@unique([sura, aya])\n  @@map(\"quran_transliterations\")\n}\n",
  "inlineSchemaHash": "cfdd67101c09be368595f62c6c6f604e0d6c3339fe6dd7022b5a1a7a86398405",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"EnYusufali\":{\"fields\":[{\"name\":\"index\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"sura\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"aya\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"text\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":\"en_yusufali\"},\"QuranSajda\":{\"fields\":[{\"name\":\"sajdaId\",\"kind\":\"scalar\",\"type\":\"BigInt\",\"dbName\":\"sajda_id\"},{\"name\":\"surahNumber\",\"kind\":\"scalar\",\"type\":\"BigInt\",\"dbName\":\"surah_number\"},{\"name\":\"ayahNumber\",\"kind\":\"scalar\",\"type\":\"BigInt\",\"dbName\":\"ayah_number\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":\"quran_sajdas\"},\"QuranSurah\":{\"fields\":[{\"name\":\"number\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"arabicName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"arabic_name\"},{\"name\":\"transliteration\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"englishName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"english_name\"},{\"name\":\"ayas\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"revelationType\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"revelation_type\"},{\"name\":\"chronologicalOrder\",\"kind\":\"scalar\",\"type\":\"BigInt\",\"dbName\":\"chronological_order\"},{\"name\":\"rukus\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"startIndex\",\"kind\":\"scalar\",\"type\":\"BigInt\",\"dbName\":\"start_index\"}],\"dbName\":\"quran_surahs\"},\"QuranText\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"sura\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"aya\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"text\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":\"quran_text\"},\"SurahDescription\":{\"fields\":[{\"name\":\"surahId\",\"kind\":\"scalar\",\"type\":\"BigInt\",\"dbName\":\"surah_id\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"surah_descriptions\"},\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userType\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_type\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"bookmarks\",\"kind\":\"object\",\"type\":\"UserBookmark\",\"relationName\":\"UserToUserBookmark\"}],\"dbName\":\"users\"},\"UserBookmark\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"surahid\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"versenumber\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"versetext\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"surahname\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"translation\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"notes\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdat\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedat\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserToUserBookmark\"}],\"dbName\":\"user_bookmarks\"},\"QuranTransliteration\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"sura\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"aya\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"rawText\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"raw_text\"},{\"name\":\"cleanText\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"clean_text\"},{\"name\":\"formattedText\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"formatted_text\"},{\"name\":\"source\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"}],\"dbName\":\"quran_transliterations\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

