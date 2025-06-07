# Prisma Client Path Error Fix Plan

## Issue Analysis

**Error:** `@prisma/client did not initialize yet. Please run "prisma generate"`

**Root Cause:** Mismatch between Prisma client generation path and import path:

1. **Schema Configuration:** [`prisma/schema.prisma:4`](prisma/schema.prisma:4) has `output = "./generated/client"`
2. **Import Statement:** [`api/lib/prisma.ts:1`](api/lib/prisma.ts:1) imports from `@prisma/client` (default location)
3. **Vercel Environment:** Can't resolve custom Prisma client path in serverless functions

## Current Configuration

**In [`prisma/schema.prisma`](prisma/schema.prisma):**
```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["driverAdapters"]
  output          = "./generated/client"  ← CUSTOM PATH
  binaryTargets   = ["native", "rhel-openssl-3.0.x", "darwin-arm64"]
}
```

**In [`api/lib/prisma.ts`](api/lib/prisma.ts):**
```typescript
import { PrismaClient } from '@prisma/client';  ← DEFAULT PATH
```

## Solution Options

### Option 1: Fix Import Path (Recommended)

Update [`api/lib/prisma.ts`](api/lib/prisma.ts) to use correct generated client path:

```typescript
import { PrismaClient } from '../../prisma/generated/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
```

### Option 2: Use Default Client Location

Remove custom output from [`prisma/schema.prisma`](prisma/schema.prisma):

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["driverAdapters"]
  # output          = "./generated/client"  ← REMOVE THIS LINE
  binaryTargets   = ["native", "rhel-openssl-3.0.x", "darwin-arm64"]
}
```

### Option 3: Hybrid Approach (Most Robust)

1. **Update import path** to use relative path
2. **Add path alias** in [`tsconfig.json`](tsconfig.json) for cleaner imports
3. **Keep custom output** for organization

## Recommended Implementation (Option 1)

### Step 1: Update Prisma Import

**Fix [`api/lib/prisma.ts`](api/lib/prisma.ts):**
```typescript
import { PrismaClient } from '../../prisma/generated/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
```

### Step 2: Update .vercelignore (If Needed)

Ensure [`prisma/generated/client`](prisma/generated/client) is **not** ignored in [`.vercelignore`](.vercelignore):

```
# Ignore Prisma WASM and native binaries that conflict with Vercel deployment
prisma/generated/client/*.wasm
prisma/generated/client/libquery_engine-*.node
prisma/generated/client/*.dylib.node
prisma/generated/client/*.so.node
# BUT DON'T IGNORE: prisma/generated/client/ (the whole directory)
```

### Step 3: Verify Build Process

Ensure [`package.json`](package.json) build script generates client:
```json
{
  "scripts": {
    "build": "prisma generate && tsc -p api/tsconfig.json && mkdir -p public"
  }
}
```

## Alternative Quick Fix (Option 2)

If you prefer simplicity, remove custom output:

**Update [`prisma/schema.prisma`](prisma/schema.prisma):**
```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["driverAdapters"]
  binaryTargets   = ["native", "rhel-openssl-3.0.x", "darwin-arm64"]
}
```

Keep [`api/lib/prisma.ts`](api/lib/prisma.ts) unchanged.

## Expected File Structure

**After Option 1 (Custom Path):**
```
prisma/
├── schema.prisma
└── generated/
    └── client/           ← Generated here
        ├── index.js
        ├── index.d.ts
        └── ...
```

**After Option 2 (Default Path):**
```
node_modules/
└── .prisma/
    └── client/           ← Generated here
        ├── index.js
        ├── index.d.ts
        └── ...
```

## Implementation Steps

### Phase 1: Apply Fix
1. **Choose approach** (Option 1 recommended)
2. **Update import path** in [`api/lib/prisma.ts`](api/lib/prisma.ts)
3. **Test locally:** `npm run dev`
4. **Verify client generation:** `npm run build`

### Phase 2: Deploy and Test
1. **Commit changes** to git
2. **Push to GitHub**
3. **Deploy to Vercel**
4. **Test endpoint:** `/api/v1/get-metadata`

### Phase 3: Verify All Endpoints
1. **Test main endpoints:**
   - `/api/v1/get-metadata` ✅
   - `/api/v1/get-verses?surah=1` ✅
   - `/v1/get-metadata` (alias) ✅
2. **Check function logs** for any remaining errors

## Expected Results

✅ **After Fix:**
- Prisma client initializes correctly in Vercel
- Database queries work in serverless functions
- All API endpoints return proper responses
- No more "FUNCTION_INVOCATION_FAILED" errors

## Debugging Commands

If issues persist:
```bash
# Check generated client exists
ls -la prisma/generated/client/

# Verify imports resolve
npx tsc --noEmit -p api/tsconfig.json

# Test Prisma client
node -e "const { PrismaClient } = require('./prisma/generated/client'); console.log('OK');"
```

---

**Priority:** Fix the import path mismatch to resolve Prisma client initialization in Vercel serverless environment.