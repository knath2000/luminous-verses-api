import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken'; // Using default import for CommonJS module

// This secret should be loaded from environment variables in a production environment
const JWT_SIGNING_SECRET = process.env.JWT_SIGNING_SECRET || 'YOUR_SUPER_SECRET_KEY'; // Placeholder

export const withAuth = (handler: Function) => {
  return async (req: VercelRequest, res: VercelResponse) => {
    let userId: string | undefined;

    // 1. Try to extract Clerk Authorization Bearer header
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      try {
        // Assuming Clerk's JWTs are standard JWTs that can be verified
        // In a real Clerk integration, you might use Clerk's own verification methods
        const decoded = jwt.verify(token, JWT_SIGNING_SECRET) as { userId: string }; // Adjust type based on actual JWT payload
        userId = decoded.userId;
      } catch (error) {
        console.error('JWT verification failed:', error);
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
      }
    }

    // 2. Fallback to x-clerk-user-id header (set by Clerk EdgeMiddleware)
    if (!userId && req.headers['x-clerk-user-id']) {
      userId = req.headers['x-clerk-user-id'] as string;
    }

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: No user ID found' });
    }

    // Attach userId to the request for downstream handlers
    (req as any).userId = userId; // Using 'any' for simplicity, proper typing would extend VercelRequest

    return handler(req, res);
  };
};