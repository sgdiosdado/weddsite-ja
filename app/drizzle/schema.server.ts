import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// TODO: Replace sqlite with pg

export const invitations = sqliteTable('invitations', {
  id: text('id').primaryKey(),
  phoneNumber: text('phoneNumber').notNull(),
  createdAt: integer('createdAt', { mode: 'timestamp' }),
  updatedAt: integer('updatedAt', { mode: 'timestamp' }),
});

export const guests = sqliteTable('guests', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  status: text('status', { enum: ['going', 'not going', 'pending'] })
    .notNull()
    .default('pending'),
  invitationId: text('invitationId').references(() => invitations.id),
  createdAt: integer('createdAt', { mode: 'timestamp' }),
  updatedAt: integer('updatedAt', { mode: 'timestamp' }),
});
