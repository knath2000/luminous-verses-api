# Consolidated Learnings: Quran Data API

## Database & API Performance
- **Pattern: Database Indexing**
  - Create composite indexes on frequently queried columns (e.g., `sura`, `aya`) for `quran_text`, `en_yusufali`, `quran_transliterations` tables.
  - *Rationale:* Drastically reduces query execution times (from 500ms+ to <50ms).

- **Pattern: Optimized Prisma Client**
  - Implement a singleton pattern for `PrismaClient` with connection pooling.
  - *Rationale:* Prevents connection pool exhaustion and ensures efficient database resource management.

- **Pattern: Multi-Layer Caching**
  - Implement API response caching with configurable TTL (e.g., 5 minutes).
  - Use smart cache invalidation strategies (e.g., pattern-based clearing).
  - *Rationale:* Achieves high cache hit rates (e.g., 85%) and significantly reduces database load.

- **Pattern: Batch Processing Engine**
  - Design API endpoints to support fetching multiple verses in a single request.
  - Utilize parallel query execution and lookup maps for O(1) data access.
  - *Rationale:* Eliminates N+1 query problems and reduces API calls by up to 95%.

## API Design & Data Handling
- **Pattern: BigInt Serialization Handling**
  - Convert all `BigInt` fields returned by Prisma to `Number()` before sending as JSON responses.
  - *Rationale:* Prevents "Do not know how to serialize a BigInt" errors in production deployments.

- **Pattern: Comprehensive API Testing**
  - Systematically test all API endpoints with valid and invalid parameters.
  - Use tools like `curl` with `jq` for structured response validation.
  - *Rationale:* Ensures API functionality, data integrity, and robust error handling.

- **Pattern: Dynamic Content Delivery**
  - Enhance endpoints (e.g., `get-surah-description`) to provide rich, authentic content from the database.
  - Implement data validation and correction during population processes.
  - *Rationale:* Improves data quality and provides a richer user experience.

- **Pattern: CORS Configuration**
  - Ensure correct parameter order for CORS functions (`req`, `res`) when setting headers.
  - *Rationale:* Prevents cross-origin request issues, especially in integrated systems.

- **Pattern: Prisma Client Casing**
  - Trust the generated Prisma client's casing for model access (e.g., `prisma.userBookmark` not `prisma.UserBookmark`).
  - *Rationale:* Avoids TypeScript errors and ensures correct interaction with the Prisma client.

## Deployment & Infrastructure
- **Pattern: Vercel Deployment Optimization**
  - Configure `.vercelignore` to exclude unnecessary files (e.g., Prisma WASM binaries) that cause deployment conflicts.
  - Optimize `vercel.json` for serverless functions (e.g., `functions` block, `rewrites`).
  - Create a `public` directory with a basic `index.html` to satisfy Vercel's static asset requirement for API-only projects.
  - *Rationale:* Ensures successful and efficient deployment of the API on Vercel.

- **Pattern: Cross-Project Debugging**
  - When integrating frontend and backend, systematically debug API calls, network requests, and console logs across both projects.
  - Pay attention to subtle issues like CORS headers, API response formats, and Prisma client casing.
  - *Rationale:* Essential for resolving complex full-stack integration issues.

- **Pattern: Environment Variable Management**
  - Ensure all required environment variables (e.g., `DATABASE_URL`, `STACK_SECRET_SERVER_KEY`) are correctly configured in the Vercel project dashboard for all environments (Production, Preview, Development).
  - *Rationale:* Prevents deployment failures and ensures proper application functionality in different environments.

- **Pattern: Stack Auth Integration**
  - Stack Auth (`@stackframe/stack`) provides robust, scalable authentication for Node.js backends.
  - API endpoints requiring authentication must validate the JWT token provided in the `Authorization: Bearer <token>` header.
  - Use `user.id` from the decoded token for user identification and association with data (e.g., bookmarks).
  - *Rationale:* Enables secure access to user-specific data and consistent authentication across frontend and backend.