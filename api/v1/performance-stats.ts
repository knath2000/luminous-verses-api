import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCorsHeaders } from '../lib/cors';
import { QueryPerformanceMonitor, ApiCache, DatabaseHealth } from '../lib/optimized-prisma';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(req, res);

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Optional authentication check for production
  const authHeader = req.headers.authorization;
  if (process.env.NODE_ENV === 'production' && authHeader !== `Bearer ${process.env.ADMIN_API_KEY}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Gather performance statistics
    const queryStats = QueryPerformanceMonitor.getAllStats();
    const cacheStats = ApiCache.getStats();
    const dbHealthy = await DatabaseHealth.checkConnection();
    const connectionInfo = await DatabaseHealth.getConnectionInfo();

    const stats = {
      timestamp: new Date().toISOString(),
      database: {
        healthy: dbHealthy,
        connectionInfo: connectionInfo
      },
      queries: {
        statistics: queryStats,
        totalQueries: Object.values(queryStats).reduce((sum: number, stat: any) => sum + (stat?.count || 0), 0)
      },
      cache: {
        ...cacheStats,
        hitRate: calculateCacheHitRate()
      },
      system: {
        nodeVersion: process.version,
        platform: process.platform,
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage()
      }
    };

    return res.status(200).json({
      success: true,
      data: stats
    });

  } catch (error) {
    console.error('Error gathering performance stats:', error);
    return res.status(500).json({
      error: 'Failed to gather performance statistics',
      details: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
}

// Helper function to calculate cache hit rate
function calculateCacheHitRate(): number {
  // This would need to be implemented with actual cache hit/miss tracking
  // For now, return a placeholder
  return 0.85; // 85% hit rate placeholder
}