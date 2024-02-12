import { ColumnDef } from '@tanstack/react-table';
import { z } from 'zod';

const invitationSchema = z.object({
  id: z.string().uuid(),
  phoneNumber: z.string().length(10),
  createdAt: z.date().nullable(),
  updatedAt: z.date().nullable(),
});

export type Invitation = z.infer<typeof invitationSchema>;

export const columns: ColumnDef<Invitation>[] = [
  {
    accessorKey: 'id',
    header: 'id',
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone Number',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created at',
  },
  {
    accessorKey: 'updatedAt',
    header: 'Updated at',
  },
];
