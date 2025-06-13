import type { VercelRequest, VercelResponse } from '@vercel/node'; // Add VercelRequest

const ALLOWED_ORIGINS = [
  'https://quranastroweb.vercel.app',
  'http://localhost:4321',
  'http://localhost:3000',
  'https://luminous-verses.vercel.app' // Add luminous-verses production URL
];

export function setCorsHeaders(
  res: VercelResponse,
  origin?: string, // Changed from string | string[]
  reqMethod?: VercelRequest['method'] // optional third arg if needed
) {
  const requestOrigin = origin; // Simplified as origin is now string | undefined

  if (requestOrigin && ALLOWED_ORIGINS.includes(requestOrigin)) {
    res.setHeader('Access-Control-Allow-Origin', requestOrigin);
  } else {
    // Fallback for origins not explicitly in the list, or for development
    // In production, you might want to restrict this more.
    res.setHeader('Access-Control-Allow-Origin', '*'); 
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type, X-Requested-With, X-Clerk-User-Id'); // Add X-Clerk-User-Id
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Max-Age', '86400'); // Cache preflight for 24 hours
}