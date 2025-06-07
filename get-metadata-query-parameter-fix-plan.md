# Get-Metadata Query Parameter Fix Plan

## Issue Analysis

**Error:** `Invalid metadata type: undefined`  
**Location:** [`api/v1/get-metadata.ts:59`](api/v1/get-metadata.ts:59)

**Root Cause:** The endpoint expects a **required `type` query parameter** but it's being called without it.

## Current Implementation

**Expected Usage:**
- `/api/v1/get-metadata?type=surah-list` → Returns list of surahs
- `/api/v1/get-metadata?type=sajdas` → Returns list of sajdas

**Current Call:** `/api/v1/get-metadata` (no type parameter) → **ERROR**

## Problem Details

**In [`api/v1/get-metadata.ts:17-20`](api/v1/get-metadata.ts:17-20):**
```typescript
const { type } = req.query  // ← type is undefined if not provided

switch (type) {
  case 'surah-list': // Valid
  case 'sajdas':     // Valid  
  default:          // ← Goes here when type is undefined
    return res.status(400).json({ error: 'Invalid metadata type' });
}
```

## Solution Options

### Option 1: Make Default Response (Recommended)

Provide a default response when no type is specified:

**Update [`api/v1/get-metadata.ts`](api/v1/get-metadata.ts):**
```typescript
export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('get-metadata API handler invoked.');
  setCorsHeaders(req, res);

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
          number: s.number,
          name: s.arabicName,
          tname: s.transliteration,
          ename: s.englishName,
          ayas: s.ayas,
          type: s.revelationType,
          order: s.chronologicalOrder,
          rukus: s.rukus,
          startIndex: s.startIndex
        })));

      case 'sajdas':
        console.log('Fetching sajdas...');
        const sajdas = await prisma.quranSajda.findMany({
          orderBy: [{ surahNumber: 'asc' }, { ayahNumber: 'asc' }]
        });
        return res.status(200).json(sajdas);

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
              number: s.number,
              name: s.arabicName,
              tname: s.transliteration,
              ename: s.englishName,
              ayas: s.ayas,
              type: s.revelationType,
              order: s.chronologicalOrder,
              rukus: s.rukus,
              startIndex: s.startIndex
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
```

### Option 2: Require Type Parameter

Keep current behavior but improve error message:

```typescript
default:
  console.warn('Invalid or missing metadata type:', type);
  return res.status(400).json({ 
    error: 'Missing or invalid metadata type parameter',
    message: 'Please specify a valid type parameter',
    validTypes: ['surah-list', 'sajdas'],
    examples: [
      '/api/v1/get-metadata?type=surah-list',
      '/api/v1/get-metadata?type=sajdas'
    ]
  });
```

### Option 3: Split into Separate Endpoints

Create dedicated endpoints:
- `/api/v1/get-surahs` → Surah list
- `/api/v1/get-sajdas` → Sajda list  
- `/api/v1/get-metadata` → Combined info

## Recommended Implementation (Option 1)

### Benefits:
✅ **Backward compatible** - doesn't break existing calls  
✅ **User-friendly** - provides useful default response  
✅ **Self-documenting** - shows available options  
✅ **Comprehensive** - returns both data and usage info

### Expected Responses:

**Call:** `/api/v1/get-metadata`
```json
{
  "version": "1.0",
  "availableTypes": ["surah-list", "sajdas"],
  "usage": {
    "surah-list": "/api/v1/get-metadata?type=surah-list",
    "sajdas": "/api/v1/get-metadata?type=sajdas"
  },
  "defaultData": {
    "totalSurahs": 114,
    "surahs": [...]
  }
}
```

**Call:** `/api/v1/get-metadata?type=surah-list`
```json
[
  {
    "number": 1,
    "name": "الفاتحة",
    "tname": "Al-Fatiha",
    "ename": "The Opening",
    "ayas": 7,
    "type": "Meccan",
    "order": 5,
    "rukus": 1,
    "startIndex": 0
  },
  ...
]
```

**Call:** `/api/v1/get-metadata?type=invalid`
```json
{
  "error": "Invalid metadata type",
  "received": "invalid",
  "validTypes": ["surah-list", "sajdas"],
  "usage": {
    "surah-list": "/api/v1/get-metadata?type=surah-list",
    "sajdas": "/api/v1/get-metadata?type=sajdas"
  }
}
```

## Implementation Steps

1. **Update [`api/v1/get-metadata.ts`](api/v1/get-metadata.ts)** with Option 1 code
2. **Test locally:** `npm run dev`
3. **Verify responses:**
   - `GET /api/v1/get-metadata` → Default response
   - `GET /api/v1/get-metadata?type=surah-list` → Surah list
   - `GET /api/v1/get-metadata?type=sajdas` → Sajda list
4. **Deploy to Vercel**
5. **Update API documentation** in [`public/index.html`](public/index.html)

## Expected Results

✅ **After Fix:**
- `/api/v1/get-metadata` returns helpful default response
- All existing parameterized calls continue working
- Better error messages for invalid parameters
- Self-documenting API responses

---

**Priority:** Implement Option 1 to provide a user-friendly default response while maintaining existing functionality.