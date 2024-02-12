import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { v4 as uuidv4 } from 'uuid';

// TODO: Replace sqlite with pg

export const invitations = sqliteTable('invitations', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => uuidv4()),
  phoneNumber: text('phoneNumber').notNull(),
  createdAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`),
});

export const guests = sqliteTable('guests', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => uuidv4()),
  name: text('name').notNull(),
  status: text('status', { enum: ['going', 'not going', 'pending'] })
    .notNull()
    .default('pending'),
  invitationId: text('invitationId').references(() => invitations.id),
  createdAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`),
});
