import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCorsHeaders as setCorsHeadersRoot } from '../../lib/cors';

// Thin wrapper to preserve (req, res) signature used by api/v1 handlers
export function setCorsHeaders(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers?.origin;
  setCorsHeadersRoot(res, origin, req.method);
}
