import { parseWithZod } from '@conform-to/zod';
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from '@remix-run/node';
import { Link, useActionData, useLoaderData } from '@remix-run/react';
import { ChevronRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { db } from '~/drizzle/config.server';
import { invitations } from '~/drizzle/schema.server';
import { schema, InvitationForm } from '~/components/invitation-form';
import { RouteParams } from 'routes-gen';
import { eq } from 'drizzle-orm';

export async function loader({ params }: LoaderFunctionArgs) {
  const { id: invitationId } =
    params as RouteParams['/admin/invitations/:id/edit'];

  const invitation = await db
    .select({
      phoneNumber: invitations.phoneNumber,
      invitedToCivil: invitations.invitedToCivil,
    })
    .from(invitations)
    .where(eq(invitations.id, invitationId));

  return invitation[0];
}

export async function action({ request, params }: ActionFunctionArgs) {
  const { id: invitationId } =
    params as RouteParams['/admin/invitations/:id/edit'];

  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  try {
    await db.transaction(async (tx) => {
      await tx
        .update(invitations)
        .set({
          invitedToCivil: submission.value.invitedToCivil,
          phoneNumber: submission.value.phoneNumber,
        })
        .where(eq(invitations.id, invitationId));
    });
  } catch (error) {
    console.error(error);
    return submission.reply({
      formErrors: ['Unxpected error ocurred. Try again later'],
    });
  }

  return redirect('/admin/invitations');
}

export default function NewInvitation() {
  const invitation = useLoaderData<typeof loader>();
  const lastResult = useActionData<typeof action>();

  return (
    <div className="mx-auto flex flex-col gap-4 px-4 py-12">
      <div className="flex items-center gap-2 text-sm text-neutral-600">
        <Button asChild variant="link">
          <Link to="/admin/invitations/">Invitaciones</Link>
        </Button>
        <ChevronRight />
        <p className="text-foreground">Editar invitación</p>
      </div>
      <h1 className="text-3xl font-bold">Editar invitación</h1>

      <InvitationForm lastResult={lastResult} defaultValue={invitation} />
    </div>
  );
}
