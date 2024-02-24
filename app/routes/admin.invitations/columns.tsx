import { Link } from '@remix-run/react';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { MouseEventHandler, PropsWithChildren } from 'react';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import { useToast } from '~/components/ui/use-toast';

const invitationSchema = z.object({
  id: z.string().uuid(),
  phoneNumber: z.string().length(10),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Invitation = z.infer<typeof invitationSchema> & { guests: number };

const columnHelper = createColumnHelper<Invitation>();

const dateFormatter = Intl.DateTimeFormat(undefined, {
  dateStyle: 'long',
});

export const columns = [
  columnHelper.accessor('id', {
    header: 'Identificador',
    cell: ({ renderValue }) => <IdCell>{renderValue()}</IdCell>,
  }),
  columnHelper.accessor('phoneNumber', {
    header: 'Número telefónico',
  }),
  columnHelper.accessor('createdAt', {
    header: 'Fecha de creación',
    cell: ({ getValue }) => dateFormatter.format(new Date(getValue())),
  }),
  columnHelper.accessor('updatedAt', {
    header: 'Última actualización',
    cell: ({ getValue }) => dateFormatter.format(new Date(getValue())),
  }),
  columnHelper.accessor('guests', {
    header: 'Cantidad de invitados',
  }),
  {
    accessorKey: 'actions',
    header: '',
    cell: ({ row }) => (
      <div>
        <Button asChild variant="link">
          <Link to={`/admin/invitations/${row.original.id}`}>
            Administrar invitados
          </Link>
        </Button>
        <Button asChild variant="link">
          <Link to={`/admin/invitations/${row.original.id}/edit`}>Editar</Link>
        </Button>
      </div>
    ),
  } as ColumnDef<Invitation>,
];

function IdCell({ children }: PropsWithChildren) {
  const [_, copyToClipboard] = useCopyToClipboard();
  const { toast } = useToast();

  const onClick: MouseEventHandler<HTMLSpanElement> = async (e) => {
    const text = e.currentTarget.textContent;
    if (!text) return;
    await copyToClipboard(`${text}`);
    toast({
      title: '🎉 Copiado',
      description: 'Has copiado el enlace de la invitación.',
      duration: 2500,
    });
  };

  return <span onClick={onClick}>{children}</span>;
}
