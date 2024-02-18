import { LoaderFunctionArgs } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { eq } from 'drizzle-orm';
import { ChevronRight, Plus } from 'lucide-react';
import { RouteParams } from 'routes-gen';
import { Button } from '~/components/ui/button';
import { db } from '~/drizzle/config.server';
import { guests } from '~/drizzle/schema.server';
import { Guest, columns } from './columns';
import { DataTable } from './data-table';

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params as RouteParams['/admin/invitations/:id'];

  const data = await db
    .select({
      id: guests.id,
      name: guests.name,
      status: guests.status,
      createdAt: guests.createdAt,
      updatedAt: guests.updatedAt,
    })
    .from(guests)
    .where(eq(guests.invitationId, id));

  return { data, id };
}

export default function Invitation() {
  const { data, id } = useLoaderData<typeof loader>();

  return (
    <div className="mx-auto flex flex-col gap-4 px-4 py-12">
      <div className="flex items-center gap-2 text-sm text-neutral-600">
        <Button asChild variant="link">
          <Link to="/admin/invitations/">Invitaciones</Link>
        </Button>
        <ChevronRight />
        <p className="text-foreground">{id}</p>
      </div>

      <h1 className="text-3xl font-bold">Invitados</h1>

      <div className="flex justify-end">
        <Button className="cursor-pointer">
          <Plus className="mr-2 h-4 w-4" /> Añadir invitado
        </Button>
      </div>

      {/* @ts-expect-error */}
      <DataTable columns={columns} data={data} />
    </div>
  );
}
