import { optimizedPrisma, QueryPerformanceMonitor, ApiCache, DatabaseHealth } from '../lib/optimized-prisma';

interface PerformanceTestResult {
  testName: string;
  duration: number;
  success: boolean;
  error?: string;
  metadata?: any;
}

class PerformanceTestSuite {
  private results: PerformanceTestResult[] = [];

  async runAllTests(): Promise<PerformanceTestResult[]> {
    console.log('🚀 Starting Performance Test Suite...\n');

    // Database connection tests
    await this.testDatabaseConnection();
    await this.testDatabaseIndexes();

    // Query performance tests
    await this.testSingleVerseQuery();
    await this.testBatchVerseQuery();
    await this.testLargeSurahQuery();
    await this.testParallelQueries();

    // Cache performance tests
    await this.testCachePerformance();
    await this.testCacheInvalidation();

    // Memory and resource tests
    await this.testMemoryUsage();
    await this.testConnectionPooling();

    console.log('\n📊 Performance Test Results Summary:');
    this.printSummary();

    return this.results;
  }

  private async runTest(testName: string, testFn: () => Promise<any>): Promise<void> {
    const startTime = Date.now();
    try {
      console.log(`⏳ Running: ${testName}`);
      const result = await testFn();
      const duration = Date.now() - startTime;
      
      this.results.push({
        testName,
        duration,
        success: true,
        metadata: result
      });
      
      console.log(`✅ ${testName} - ${duration}ms`);
    } catch (error) {
      const duration = Date.now() - startTime;
      this.results.push({
        testName,
        duration,
        success: false,
        error: error instanceof Error ? error.message : String(error)
      });
      
      console.log(`❌ ${testName} - Failed in ${duration}ms: ${error}`);
    }
  }

  private async testDatabaseConnection(): Promise<void> {
    await this.runTest('Database Connection', async () => {
      const isHealthy = await DatabaseHealth.checkConnection();
      if (!isHealthy) throw new Error('Database connection failed');
      
      const connectionInfo = await DatabaseHealth.getConnectionInfo();
      return { healthy: isHealthy, connectionInfo };
    });
  }

  private async testDatabaseIndexes(): Promise<void> {
    await this.runTest('Database Index Usage', async () => {
      // Test if indexes are being used effectively
      const result = await optimizedPrisma.$queryRaw`
        EXPLAIN (ANALYZE, BUFFERS) 
        SELECT * FROM quran_text 
        WHERE sura = 2 AND aya BETWEEN 1 AND 20
      `;
      return result;
    });
  }

  private async testSingleVerseQuery(): Promise<void> {
    await this.runTest('Single Verse Query', async () => {
      const verse = await optimizedPrisma.quranText.findFirst({
        where: { sura: 1, aya: 1 },
        select: { id: true, sura: true, aya: true, text: true }
      });
      
      if (!verse) throw new Error('Verse not found');
      return { verseId: verse.id };
    });
  }

  private async testBatchVerseQuery(): Promise<void> {
    await this.runTest('Batch Verse Query (20 verses)', async () => {
      const verses = await optimizedPrisma.quranText.findMany({
        where: {
          sura: 2,
          aya: { gte: 1, lte: 20 }
        },
        orderBy: { aya: 'asc' },
        select: { id: true, sura: true, aya: true, text: true }
      });
      
      return { count: verses.length };
    });
  }

  private async testLargeSurahQuery(): Promise<void> {
    await this.runTest('Large Surah Query (Al-Baqarah)', async () => {
      const verses = await optimizedPrisma.quranText.findMany({
        where: { sura: 2 },
        orderBy: { aya: 'asc' },
        select: { id: true, sura: true, aya: true, text: true }
      });
      
      return { count: verses.length };
    });
  }

  private async testParallelQueries(): Promise<void> {
    await this.runTest('Parallel Queries (3 simultaneous)', async () => {
      const queries = [
        optimizedPrisma.quranText.findMany({ where: { sura: 1 } }),
        optimizedPrisma.enYusufali.findMany({ where: { sura: 1 } }),
        optimizedPrisma.quranTransliteration.findMany({ where: { sura: 1 } })
      ];
      
      const results = await Promise.all(queries);
      return { 
        arabicCount: results[0].length,
        translationCount: results[1].length,
        transliterationCount: results[2].length
      };
    });
  }

  private async testCachePerformance(): Promise<void> {
    await this.runTest('Cache Performance', async () => {
      const key = 'test-cache-key';
      const testData = { message: 'Hello, World!', timestamp: Date.now() };
      
      // Test cache set
      ApiCache.set(key, testData, 60);
      
      // Test cache get
      const cachedData = ApiCache.get(key);
      if (!cachedData) throw new Error('Cache get failed');
      
      // Test cache stats
      const stats = ApiCache.getStats();
      
      return { cached: cachedData, stats };
    });
  }

  private async testCacheInvalidation(): Promise<void> {
    await this.runTest('Cache Invalidation', async () => {
      const key = 'test-invalidation-key';
      ApiCache.set(key, { data: 'test' }, 60);
      
      // Verify data is cached
      let cached = ApiCache.get(key);
      if (!cached) throw new Error('Cache set failed');
      
      // Invalidate cache
      ApiCache.invalidate(key);
      
      // Verify data is removed
      cached = ApiCache.get(key);
      if (cached) throw new Error('Cache invalidation failed');
      
      return { invalidated: true };
    });
  }

  private async testMemoryUsage(): Promise<void> {
    await this.runTest('Memory Usage', async () => {
      const memBefore = process.memoryUsage();
      
      // Perform memory-intensive operation
      const largeData = await optimizedPrisma.quranText.findMany({
        take: 1000,
        select: { id: true, text: true }
      });
      
      const memAfter = process.memoryUsage();
      
      return {
        before: memBefore,
        after: memAfter,
        heapDiff: memAfter.heapUsed - memBefore.heapUsed,
        dataSize: largeData.length
      };
    });
  }

  private async testConnectionPooling(): Promise<void> {
    await this.runTest('Connection Pooling', async () => {
      // Test multiple concurrent connections
      const promises = Array.from({ length: 10 }, (_, i) => 
        optimizedPrisma.quranText.findFirst({
          where: { sura: 1, aya: i + 1 }
        })
      );
      
      const results = await Promise.all(promises);
      return { concurrentQueries: results.length };
    });
  }

  private printSummary(): void {
    const successful = this.results.filter(r => r.success).length;
    const failed = this.results.filter(r => !r.success).length;
    const totalTime = this.results.reduce((sum, r) => sum + r.duration, 0);
    const avgTime = totalTime / this.results.length;

    console.log(`\n📈 Summary:`);
    console.log(`   Total Tests: ${this.results.length}`);
    console.log(`   Successful: ${successful}`);
    console.log(`   Failed: ${failed}`);
    console.log(`   Total Time: ${totalTime}ms`);
    console.log(`   Average Time: ${Math.round(avgTime)}ms`);

    if (failed > 0) {
      console.log(`\n❌ Failed Tests:`);
      this.results
        .filter(r => !r.success)
        .forEach(r => console.log(`   - ${r.testName}: ${r.error}`));
    }

    // Performance recommendations
    console.log(`\n💡 Performance Recommendations:`);
    const slowTests = this.results.filter(r => r.duration > 1000);
    if (slowTests.length > 0) {
      console.log(`   - Consider optimizing slow queries (>1s):`);
      slowTests.forEach(t => console.log(`     * ${t.testName}: ${t.duration}ms`));
    }

    const queryStats = QueryPerformanceMonitor.getAllStats();
    if (Object.keys(queryStats).length > 0) {
      console.log(`   - Query performance statistics available`);
    }
  }
}

// Export for use in API endpoint or standalone testing
export { PerformanceTestSuite };

// Run tests if called directly
if (require.main === module) {
  const testSuite = new PerformanceTestSuite();
  testSuite.runAllTests()
    .then(() => {
      console.log('\n🎉 Performance testing completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Performance testing failed:', error);
      process.exit(1);
    });
}