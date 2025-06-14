import { PrismaClient } from '../../prisma/generated/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool } from '@neondatabase/serverless'
import ws from 'ws'

const connectionString = process.env.DATABASE_URL!

// Configure WebSocket for Vercel Node.js runtime
const pool = new Pool({ 
  connectionString,
  // @ts-ignore - ws types compatibility
  webSocketConstructor: ws
});

const adapter = new PrismaNeon(pool);
const prisma = new PrismaClient({ adapter });

export default prisma;
