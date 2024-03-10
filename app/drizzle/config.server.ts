import { drizzle } from 'drizzle-orm/postgres-js';
import { env } from '~/env.server';
import postgres from 'postgres';

export const conn = postgres(env.DATABASE_URL, { max: 1 });

export const db = drizzle(conn);
