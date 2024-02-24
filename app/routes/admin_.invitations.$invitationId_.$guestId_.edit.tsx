import { parseWithZod } from '@conform-to/zod';
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from '@remix-run/node';
import {
  Link,
  useActionData,
  useLoaderData,
  useParams,
} from '@remix-run/react';
import { eq } from 'drizzle-orm';
import { ChevronRight } from 'lucide-react';
import { RouteParams } from 'routes-gen';
import { GuestForm, schema } from '~/components/guest-form';
import { Button } from '~/components/ui/button';
import { db } from '~/drizzle/config.server';
import { guests } from '~/drizzle/schema.server';

export async function loader({ params }: LoaderFunctionArgs) {
  const { guestId } =
    params as RouteParams['/admin/invitations/:invitationId/:guestId/edit'];

  const guest = await db.select().from(guests).where(eq(guests.id, guestId));

  return guest[0];
}

export async function action({ request, params }: ActionFunctionArgs) {
  const { invitationId, guestId } =
    params as RouteParams['/admin/invitations/:invitationId/:guestId/edit'];
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  try {
    await db.transaction(async (tx) => {
      await tx
        .update(guests)
        .set(submission.value)
        .where(eq(guests.id, guestId));
    });
  } catch (error) {
    return submission.reply({
      formErrors: ['Unxpected error ocurred. Try again later'],
    });
  }

  return redirect(`/admin/invitations/${invitationId}`);
}

export default function NewInvitation() {
  const { id } = useParams<RouteParams['/admin/invitations/:id/new']>();
  const lastResult = useActionData<typeof action>();
  const defaultValue = useLoaderData<typeof loader>();

  return (
    <div className="mx-auto flex flex-col gap-4 px-4 py-12">
      <div className="flex items-center gap-2 text-sm text-neutral-600">
        <Button asChild variant="link">
          <Link to={`/admin/invitations/${id}/`}>Invitación</Link>
        </Button>
        <ChevronRight />
        <p className="text-foreground">Editar invitado</p>
      </div>
      <h1 className="text-3xl font-bold">Editar invitado</h1>

      <GuestForm lastResult={lastResult} defaultValue={defaultValue} />
    </div>
  );
}
