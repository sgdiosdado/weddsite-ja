import { defineConfig } from 'drizzle-kit';
import { env } from '~/env.server';

export default defineConfig({
  schema: './app/drizzle/schema.server.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
