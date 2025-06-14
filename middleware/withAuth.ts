import type { VercelRequest, VercelResponse } from '@vercel/node';
import { verify } from 'jsonwebtoken';

// JWKS endpoint for Stack Auth - get this from your Neon Auth setup
const JWKS_URL = 'https://api.stack-auth.com/api/v1/projects/c73605ba-199b-4a3b-b7e9-77442f3ea2e8/.well-known/jwks.json'; // We'll configure this

export const withAuth = (handler: Function) => {
  return async (req: VercelRequest, res: VercelResponse) => {
    let userId: string | undefined;

    // Extract Stack Auth token from Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      try {
        // For now, we'll use a simple verification
        // In production, you'd verify against Stack Auth JWKS
        const decoded = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()) as { sub: string, userId?: string };
        userId = decoded.sub || decoded.userId;
      } catch (error) {
        console.error('JWT verification failed:', error);
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
      }
    }

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: No user ID found' });
    }

    // Attach userId to the request for downstream handlers
    (req as any).userId = userId;

    return handler(req, res);
  };
};
