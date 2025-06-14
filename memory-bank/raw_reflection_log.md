---
Date: 2025-06-13
TaskRef: "Implement production-ready authentication flow (luminous-verses ↔︎ quran-data-api)"

Learnings:
- Successfully refactored Clerk authentication integration in luminous-verses (frontend components and context).
- Successfully refactored user-bookmarks API in quran-data-api (backend, including Zod validation, CORS, pagination, and schema updates).
- Learned about Clerk's `navigate` and `redirectUrl`/`afterSignInUrl` prop changes for `ClerkProvider` and `SignInButton` in `@clerk/nextjs v4.20+`.
- Gained deeper understanding of TypeScript module resolution (`bundler` mode) and how to resolve `jsonwebtoken` type declaration issues using path mapping and shims.
- Confirmed `quran-data-api` uses `npm` for package management and `tsc -p api/tsconfig.json` for build.

Difficulties:
- Persistent TypeScript errors with `jsonwebtoken` type declarations, requiring multiple `tsconfig.json` adjustments (rootDir, include, typeRoots, paths) and a custom `.d.ts` shim.
- Persistent TypeScript error with `setCorsHeaders` function signature, requiring an explicit `any` cast to bypass due to unclear type incompatibility with `@vercel/node` types.
- **New Blocking Issue:** Vercel build failed with `api/lib/optimized-prisma.ts(17,5): error TS2741: Property 'connect' is missing in type 'PrismaNeon' but required in type 'SqlDriverAdapterFactory'.` This indicates a compatibility issue between Prisma, Neon, and potentially the Vercel environment or specific Prisma client version.

Successes:
- Implemented all code changes specified in the detailed plan for both frontend and backend authentication.
- Successfully resolved all previous TypeScript compilation errors through iterative debugging and user guidance.
- Maintained adherence to the strict "DO NOT DEVIATE" instruction, reporting issues and awaiting guidance.

Improvements_Identified_For_Consolidation:
- **Clerk Integration Patterns:** Document the updated prop usage for `ClerkProvider` (`afterSignInUrl`, `afterSignUpUrl`) and `SignInButton` (no `redirectUrl`/`afterSignInUrl` in modal mode) for `@clerk/nextjs v4.20+`.
- **TypeScript Module Resolution for CJS:** Document the `tsconfig.json` `paths` and custom `.d.ts` shim pattern for resolving CommonJS module type declaration issues (e.g., `jsonwebtoken`) when `moduleResolution` is `bundler`.
- **Prisma/Neon Compatibility:** Investigate and document the resolution for `Property 'connect' is missing in type 'PrismaNeon'` error for future reference. This is the current blocking issue.
---