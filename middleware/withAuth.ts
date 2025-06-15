import type { VercelRequest, VercelResponse } from '@vercel/node';

export const withAuth = (handler: Function) => {
  return async (req: VercelRequest, res: VercelResponse) => {
    // Bypass authentication for OPTIONS requests (CORS preflight)
    if (req.method === 'OPTIONS') {
      return handler(req, res);
    }

    let userId: string | undefined;

    // Extract Stack Auth token from Authorization header
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      
      try {
        // First, try to decode as JWT
        if (token.includes('.')) {
          // This looks like a JWT token
          const parts = token.split('.');
          if (parts.length === 3) {
            const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
            userId = payload.sub || payload.user_id || payload.userId;
            console.log('JWT token decoded:', { userId, tokenType: 'JWT' });
          }
        } else {
          // This looks like a direct user ID from Stack Auth
          userId = token;
          console.log('Direct user ID received:', { userId, tokenType: 'Direct ID' });
        }
      } catch (error) {
        console.error('Token processing failed:', error);
        return res.status(401).json({ 
          message: 'Unauthorized: Invalid token format',
          error: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : undefined
        });
      }
    }

    if (!userId) {
      console.log('No user ID found in token');
      return res.status(401).json({ 
        message: 'Unauthorized: No valid user ID found',
        debug: process.env.NODE_ENV === 'development' ? {
          hasAuthHeader: !!authHeader,
          headerStart: authHeader?.substring(0, 20) + '...'
        } : undefined
      });
    }

    // Attach userId to the request for downstream handlers
    (req as any).userId = userId;
    console.log('Authentication successful for user:', userId);

    return handler(req, res);
  };
};
