import { PrismaClient } from '../../prisma/generated/client'

// Use standard Prisma client - works reliably with Vercel
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});

export default prisma;
