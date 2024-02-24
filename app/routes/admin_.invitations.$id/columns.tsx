import { Link } from '@remix-run/react';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { z } from 'zod';
import { Button } from '~/components/ui/button';

const guestSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  status: z.enum(['going', 'not going', 'pending']),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Guest = z.infer<typeof guestSchema>;

const columnHelper = createColumnHelper<Guest>();

const dateFormatter = Intl.DateTimeFormat(undefined, {
  dateStyle: 'long',
});

export const columns = [
  columnHelper.accessor('id', {
    header: 'Identificador',
  }),
  columnHelper.accessor('name', {
    header: 'Invitado',
  }),
  columnHelper.accessor('status', {
    header: 'Estado',
  }),
  columnHelper.accessor('createdAt', {
    header: 'Fecha de creación',
    cell: ({ getValue }) => dateFormatter.format(new Date(getValue())),
  }),
  columnHelper.accessor('updatedAt', {
    header: 'Última actualización',
    cell: ({ getValue }) => dateFormatter.format(new Date(getValue())),
  }),
  {
    accessorKey: 'actions',
    header: '',
    cell: ({ row }) => (
      <Button asChild variant="link">
        <Link to={`${row.original.id}/edit/`}>Editar</Link>
      </Button>
    ),
  } as ColumnDef<Guest>,
];
