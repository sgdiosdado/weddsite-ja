import { json } from '@remix-run/node';
import { Invitation, columns } from './columns';
import { DataTable } from './data-table';
import { db } from '~/drizzle/config.server';
import { invitations } from '~/drizzle/schema.server';
import { useLoaderData } from '@remix-run/react';

export async function loader() {
  const data = await db.select().from(invitations);

  return { data };
}

export default function Invitations() {
  const { data } = useLoaderData<typeof loader>();

  if (!data) return <></>;

  return (
    <div className="mx-auto py-10">
      <DataTable columns={columns} data={data as Invitation[]} />
    </div>
  );
}
