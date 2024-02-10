import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { env } from '~/env.server';

export const db = drizzle(new Database(env.DATABASE_URL));
