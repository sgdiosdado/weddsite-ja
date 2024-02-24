import { getInputProps, useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { Form, Link, useActionData, useParams } from '@remix-run/react';
import { ChevronRight } from 'lucide-react';
import { RouteParams } from 'routes-gen';
import { z } from 'zod';
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert';
import { Button } from '~/components/ui/button';
import { FormLabel } from '~/components/ui/form/form-label';
import { FormMessage } from '~/components/ui/form/form-message';
import { Input } from '~/components/ui/input';
import { db } from '~/drizzle/config.server';
import { guests, invitations } from '~/drizzle/schema.server';

const schema = z.object({
  name: z.string().min(3),
});

export async function action({ request, params }: ActionFunctionArgs) {
  const { id: invitationId } =
    params as RouteParams['/admin/invitations/:id/new'];
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  try {
    await db.transaction(async (tx) => {
      await tx.insert(guests).values({ ...submission.value, invitationId });
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
  const [form, fields] = useForm({
    lastResult,
    constraint: getZodConstraint(schema),
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
  });

  return (
    <div className="mx-auto flex flex-col gap-4 px-4 py-12">
      <div className="flex items-center gap-2 text-sm text-neutral-600">
        <Button asChild variant="link">
          <Link to={`/admin/invitations/${id}/`}>Invitación</Link>
        </Button>
        <ChevronRight />
        <p className="text-foreground">Nuevo invitado</p>
      </div>
      <h1 className="text-3xl font-bold">Nueva invitado</h1>
      <Form
        method="POST"
        id={form.id}
        aria-invalid={form.errors ? true : undefined}
        aria-describedby={form.errors ? form.errorId : undefined}
        className="flex max-w-md flex-col gap-4"
      >
        {form.errors && (
          <Alert variant="destructive">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>{form.errors.join()}</AlertDescription>
          </Alert>
        )}
        <div className="space-y-2">
          <FormLabel errors={fields.name.errors} htmlFor={fields.name.id}>
            Nombre
          </FormLabel>
          <Input {...getInputProps(fields.name, { type: 'text' })} />
          <FormMessage errors={fields.name.errors} />
        </div>

        <Button>Crear invitación</Button>
      </Form>
    </div>
  );
}
