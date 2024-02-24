import { getInputProps, useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';
import { ChevronRight } from 'lucide-react';
import { z } from 'zod';
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert';
import { Button } from '~/components/ui/button';
import { FormLabel } from '~/components/ui/form/form-label';
import { FormMessage } from '~/components/ui/form/form-message';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { db } from '~/drizzle/config.server';
import { invitations } from '~/drizzle/schema.server';

const schema = z.object({
  phoneNumber: z
    .string()
    .length(10)
    .refine(
      (value) => !isNaN(Number(value)),
      'Phone number must contain only numbers',
    ),
});

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
          <Link to="/admin/invitations/">Invitaciones</Link>
        </Button>
        <ChevronRight />
        <p className="text-foreground">Nueva invitación</p>
      </div>
      <h1 className="text-3xl font-bold">Nueva invitación</h1>
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
          <FormLabel
            errors={fields.phoneNumber.errors}
            htmlFor={fields.phoneNumber.id}
          >
            Número telefónico
          </FormLabel>
          <Input
            {...getInputProps(fields.phoneNumber, { type: 'text' })}
            maxLength={10}
          />
          <FormMessage errors={fields.phoneNumber.errors} />
        </div>

        <Button>Crear invitación</Button>
      </Form>
    </div>
  );
}
