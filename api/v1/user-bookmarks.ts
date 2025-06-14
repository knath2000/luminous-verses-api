import type { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../lib/prisma';
import { withAuth } from '../../middleware/withAuth';
import { z } from 'zod';
import { setCorsHeaders } from '../lib/cors';
export const runtime = 'nodejs'

// Define Zod schemas
const bookmarkSchema = z.object({
  surahId: z.number().int().min(1).max(114),
  verseNumber: z.number().int().min(1),
  verseText: z.string().min(1),
  surahName: z.string().min(1),
  translation: z.string().min(1),
  notes: z.string().optional().nullable(),
});

const updateBookmarkSchema = z.object({
  notes: z.string().optional().nullable(),
});

async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res as any, req.headers.origin as any); // Explicit cast to bypass type error

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const userId = (req as any).userId; // userId is attached by withAuth middleware

  if (req.method === 'GET') {
    try {
      const cursor = req.query.cursor as string | undefined;
      const take = parseInt(req.query.take as string || '20'); // Default to 20 items

      const findManyArgs: any = {
        where: { userid: userId },
        orderBy: { createdat: 'desc' },
        take: take,
      };

      if (cursor) {
        findManyArgs.cursor = { id: cursor };
        findManyArgs.skip = 1; // Skip the cursor itself
      }

      const bookmarks = await prisma.userBookmark.findMany(findManyArgs);
      
      // Determine next cursor
      const nextCursor = bookmarks.length === take ? bookmarks[bookmarks.length - 1].id : undefined;

      return res.status(200).json({
        data: bookmarks,
        nextCursor: nextCursor,
      });
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
      return res.status(500).json({ error: 'Failed to fetch bookmarks' });
    }
  }

  if (req.method === 'POST') {
    try {
      const parsedBody = bookmarkSchema.parse(req.body);
      const { surahId, verseNumber, verseText, surahName, translation, notes } = parsedBody;
      
      const existingBookmark = await prisma.userBookmark.findFirst({
        where: {
          userid: userId,
          surahid: surahId,
          versenumber: verseNumber
        }
      });
      
      if (existingBookmark) {
        return res.status(409).json({
          error: 'Bookmark already exists',
          existingId: existingBookmark.id
        });
      }
      
      const bookmark = await prisma.userBookmark.create({
        data: {
          userid: userId,
          surahid: surahId,
          versenumber: verseNumber,
          versetext: verseText,
          surahname: surahName,
          translation: translation,
          notes: notes || ''
        }
      });
      
      return res.status(201).json(bookmark);
      
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: 'Validation failed', details: error.errors });
      }
      console.error('Error creating bookmark:', error);
      return res.status(500).json({ error: 'Failed to create bookmark' });
    }
  }

  if (req.method === 'PUT') {
    try {
      const { id } = req.query;
      const parsedBody = updateBookmarkSchema.parse(req.body);
      const { notes } = parsedBody;

      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Bookmark ID is required' });
      }
      const bookmark = await prisma.userBookmark.updateMany({
        where: { id, userid: userId },
        data: { notes }
      });
      if (bookmark.count === 0) {
        return res.status(404).json({ error: 'Bookmark not found or unauthorized' });
      }
      return res.status(200).json({ message: 'Bookmark updated successfully' });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: 'Validation failed', details: error.errors });
      }
      console.error('Error updating bookmark:', error);
      return res.status(500).json({ error: 'Failed to update bookmark' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Bookmark ID is required' });
      }
      // Ensure DELETE uses prisma.userBookmark.delete({where:{id,userid:userId}}) to leverage PK.
      const bookmark = await prisma.userBookmark.delete({
        where: { id: id as string, userid: userId }
      });
      return res.status(204).end();
    } catch (error: any) {
      // P2025 means record not found
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Bookmark not found or unauthorized' });
      }
      console.error('Error deleting bookmark:', error);
      return res.status(500).json({ error: 'Failed to delete bookmark' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}

export default withAuth(handler);

export const config = {
  runtime: 'edge',
};