import { parseWithZod } from '@conform-to/zod';
import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { Link, useActionData } from '@remix-run/react';
import { ChevronRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { db } from '~/drizzle/config.server';
import { invitations } from '~/drizzle/schema.server';
import { schema, InvitationForm } from '~/components/invitation-form';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  try {
    await db.transaction(async (tx) => {
      await tx.insert(invitations).values(submission.value);
    });
  } catch (error) {
    return submission.reply({
      formErrors: ['Unxpected error ocurred. Try again later'],
    });
  }

  return redirect('/admin/invitations');
}

export default function NewInvitation() {
  const lastResult = useActionData<typeof action>();

  return (
    <div className="mx-auto flex flex-col gap-4 px-4 py-12">
      <div className="flex items-center gap-2 text-sm text-neutral-600">
        <Button asChild variant="link">
          <Link to="/admin/invitations/">Invitaciones</Link>
        </Button>
        <ChevronRight />
        <p className="text-foreground">Nueva invitación</p>
      </div>
      <h1 className="text-3xl font-bold">Nueva invitación</h1>

      <InvitationForm lastResult={lastResult} />
    </div>
  );
}
