import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCorsHeaders } from '../../lib/cors';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  setCorsHeaders(req, res);

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name, userType = 'guest' } = req.body;

    // Validate required fields
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // For now, create a mock user response without database
    // This will allow the frontend to work while we fix the database schema
    const mockUser = {
      id: `user_${Date.now()}`,
      email,
      name: name || null,
      userType,
      createdAt: new Date().toISOString()
    };

    return res.status(201).json({
      success: true,
      user: mockUser,
      token: `mock_token_${mockUser.id}` // Simple token for demo purposes
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}