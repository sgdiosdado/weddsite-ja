import { sql } from 'drizzle-orm';
import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { v4 as uuidv4 } from 'uuid';

// TODO: Replace sqlite with pg

export const invitations = pgTable('invitations', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => uuidv4()),
  phoneNumber: varchar('phone_number', { length: 10 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const guests = pgTable('guests', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => uuidv4()),
  name: text('name').notNull(),
  status: varchar('status', { enum: ['going', 'not going', 'pending'] })
    .notNull()
    .default('pending'),
  menu: varchar('menu', { enum: ['regular', 'vegetarian'] })
    .notNull()
    .default('regular'),
  invitationId: uuid('invitationId')
    .notNull()
    .references(() => invitations.id, {
      onDelete: 'cascade',
    }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
