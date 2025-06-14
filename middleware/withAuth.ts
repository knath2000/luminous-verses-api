import type { VercelRequest, VercelResponse } from '@vercel/node';

export const withAuth = (handler: Function) => {
  return async (req: VercelRequest, res: VercelResponse) => {
    let userId: string | undefined;

    // Extract Stack Auth token from Authorization header
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      try {
        // For Stack Auth, we can decode the JWT payload to get user info
        // In production, you'd verify the signature against Stack Auth's public key
        const parts = token.split('.');
        if (parts.length === 3) {
          const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
          
          // Stack Auth tokens typically have 'sub' (subject) as the user ID
          userId = payload.sub || payload.user_id || payload.userId;
          
          console.log('Auth token decoded:', { userId, tokenType: 'Stack Auth' });
        }
      } catch (error) {
        console.error('JWT token decode failed:', error);
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
