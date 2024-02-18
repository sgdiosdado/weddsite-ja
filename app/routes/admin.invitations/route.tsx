import { Invitation, columns } from './columns';
import { DataTable } from './data-table';
import { db } from '~/drizzle/config.server';
import { guests, invitations } from '~/drizzle/schema.server';
import { Link, useLoaderData } from '@remix-run/react';
import { eq, count } from 'drizzle-orm';
import { Button } from '~/components/ui/button';
import { Plus } from 'lucide-react';

export async function loader() {
  const data = await db
    .select({
      id: invitations.id,
      phoneNumber: invitations.phoneNumber,
      createdAt: invitations.createdAt,
      updatedAt: invitations.updatedAt,
      guests: count(guests.id),
    })
    .from(invitations)
    .innerJoin(guests, eq(invitations.id, guests.invitationId))
    .groupBy(
      invitations.id,
      invitations.phoneNumber,
      invitations.createdAt,
      invitations.updatedAt,
    );

  return { data };
}

export default function Invitations() {
  const { data } = useLoaderData<typeof loader>();

  if (!data) return <></>;

  return (
    <div className="mx-auto flex flex-col gap-4 px-4 py-12">
      <h1 className="text-3xl font-bold">Invitaciones</h1>
      <div className="flex justify-end">
        <Button asChild>
          <Link to="/admin/invitations/new/">
            <Plus className="mr-2 h-4 w-4" /> Crear invitación
          </Link>
        </Button>
      </div>

      {/* @ts-expect-error */}
      <DataTable columns={columns} data={data as Invitation[]} />
    </div>
  );
}
