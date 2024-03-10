import 'dotenv/config';
// import { env } from '~/env.server';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db, conn } from './config.server';

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: 'app/drizzle/migrations/' });
    await conn.end();
    console.log('Migrations successfully applied 🎉');
  } catch (error) {
    console.error('Error ❌', error);
    await conn.end();
    process.exit(1);
  }
};
main();
