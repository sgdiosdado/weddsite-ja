import { Invitation, columns } from './columns';
import { DataTable } from './data-table';
import { db } from '~/drizzle/config.server';
import { guests, invitations } from '~/drizzle/schema.server';
import { Link, useLoaderData } from '@remix-run/react';
import { eq, countDistinct, count, SQL } from 'drizzle-orm';
import { Button } from '~/components/ui/button';
import { Plus } from 'lucide-react';

export async function loader() {
  const sq = await db
    .select({
      invitationId: guests.invitationId,
      goingGuests: count(guests.id).as('goingGuests'),
    })
    .from(guests)
    .where(eq(guests.status, 'going'))
    .groupBy(guests.invitationId)
    .as('sq');

  const data = await db
    .select({
      id: invitations.id,
      phoneNumber: invitations.phoneNumber,
      createdAt: invitations.createdAt,
      updatedAt: invitations.updatedAt,
      guests: countDistinct(guests.id),
      goingGuests: sq.goingGuests,
    })
    .from(invitations)
    .leftJoin(guests, eq(invitations.id, guests.invitationId))
    .leftJoin(sq, eq(invitations.id, sq.invitationId))
    .groupBy(
      invitations.id,
      invitations.phoneNumber,
      invitations.createdAt,
      invitations.updatedAt,
      sq.goingGuests,
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
          <Link to="new/">
            <Plus className="mr-2 h-4 w-4" /> Crear invitación
          </Link>
        </Button>
      </div>

      {/* @ts-expect-error */}
      <DataTable columns={columns} data={data as Invitation[]} />
    </div>
  );
}
