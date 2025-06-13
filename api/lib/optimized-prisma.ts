import { PrismaClient } from '../../prisma/generated/client';
import { Pool } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';

// Global Prisma instance to prevent connection pool exhaustion
// Based on Prisma best practices for serverless environments
declare global {
  var __prisma: PrismaClient | undefined;
}

// Optimized Prisma configuration for performance
const createPrismaClient = () => {
  const connectionString = process.env.DATABASE_URL;
  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);
  return new PrismaClient({
    adapter,
    // Enable query logging in development
    log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
  });
};

// Singleton pattern for Prisma client
export const optimizedPrisma = globalThis.__prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = optimizedPrisma;
}

// Performance monitoring utilities
export class QueryPerformanceMonitor {
  private static queryTimes: Map<string, number[]> = new Map();
  
  static startTimer(queryKey: string): () => number {
    const startTime = Date.now();
    return () => {
      const duration = Date.now() - startTime;
      this.recordQueryTime(queryKey, duration);
      return duration;
    };
  }
  
  private static recordQueryTime(queryKey: string, duration: number) {
    if (!this.queryTimes.has(queryKey)) {
      this.queryTimes.set(queryKey, []);
    }
    
    const times = this.queryTimes.get(queryKey)!;
    times.push(duration);
    
    // Keep only last 100 measurements to prevent memory leaks
    if (times.length > 100) {
      times.shift();
    }
  }
  
  static getQueryStats(queryKey: string) {
    const times = this.queryTimes.get(queryKey) || [];
    if (times.length === 0) return null;
    
    const sorted = [...times].sort((a, b) => a - b);
    const avg = times.reduce((sum, time) => sum + time, 0) / times.length;
    
    return {
      count: times.length,
      average: Math.round(avg),
      p50: sorted[Math.floor(sorted.length * 0.5)],
      p95: sorted[Math.floor(sorted.length * 0.95)],
      p99: sorted[Math.floor(sorted.length * 0.99)],
      min: sorted[0],
      max: sorted[sorted.length - 1]
    };
  }
  
  static getAllStats() {
    const stats: Record<string, any> = {};
    for (const [key] of this.queryTimes) {
      stats[key] = this.getQueryStats(key);
    }
    return stats;
  }
}

// Cache utilities for API responses
export class ApiCache {
  private static cache: Map<string, { data: any; timestamp: number; ttl: number }> = new Map();
  
  static set(key: string, data: any, ttlSeconds: number = 300) {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttlSeconds * 1000
    });
  }
  
  static get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.data as T;
  }
  
  static invalidate(key: string) {
    this.cache.delete(key);
  }
  
  static invalidatePattern(pattern: string) {
    const regex = new RegExp(pattern);
    for (const [key] of this.cache) {
      if (regex.test(key)) {
        this.cache.delete(key);
      }
    }
  }
  
  static clear() {
    this.cache.clear();
  }
  
  static getStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}

// Batch query utilities
export class BatchQueryOptimizer {
  // Optimize batch queries using Prisma's built-in batching
  static async executeBatch<T>(queries: Promise<T>[]): Promise<T[]> {
    const timer = QueryPerformanceMonitor.startTimer('batch_execution');
    
    try {
      // Use Promise.all for parallel execution
      const results = await Promise.all(queries);
      const duration = timer();
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`Batch execution completed in ${duration}ms for ${queries.length} queries`);
      }
      
      return results;
    } catch (error) {
      timer();
      throw error;
    }
  }
  
  // Optimize related data fetching using include strategy
  static getOptimalIncludeStrategy(includeTranslations: boolean, includeTransliterations: boolean) {
    const include: any = {};
    
    if (includeTranslations) {
      // Use relationLoadStrategy for better performance
      include.relationLoadStrategy = 'join';
    }
    
    return include;
  }
}

// Database health check utilities
export class DatabaseHealth {
  static async checkConnection(): Promise<boolean> {
    try {
      await optimizedPrisma.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      console.error('Database connection check failed:', error);
      return false;
    }
  }
  
  static async getConnectionInfo() {
    try {
      const result = await optimizedPrisma.$queryRaw`
        SELECT 
          count(*) as active_connections,
          current_database() as database_name,
          version() as postgres_version
      `;
      return result;
    } catch (error) {
      console.error('Failed to get connection info:', error);
      return null;
    }
  }
}

// Graceful shutdown handler
process.on('beforeExit', async () => {
  await optimizedPrisma.$disconnect();
});

process.on('SIGINT', async () => {
  await optimizedPrisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await optimizedPrisma.$disconnect();
  process.exit(0);
});

export default optimizedPrisma;