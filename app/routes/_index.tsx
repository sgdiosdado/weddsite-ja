import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node';
import { Form, redirect, useActionData } from '@remix-run/react';
import { FormLabel } from '~/components/ui/form/form-label';
import { FormMessage } from '~/components/ui/form/form-message';
import { Input } from '~/components/ui/input';
import { db } from '~/drizzle/config.server';
import { z } from 'zod';
import { invitations } from '~/drizzle/schema.server';
import { eq } from 'drizzle-orm';
import { parseWithZod, getZodConstraint } from '@conform-to/zod';
import { getInputProps, useForm } from '@conform-to/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Boda Jacqueline y Andrés' },
    { name: 'description', content: 'Invitación boda Jacqueline y Andrés' },
  ];
};

const schema = z.object({
  phoneNumber: z
    .string()
    .length(10, 'El número telefónico debe contener 10 dígitos'),
});

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  try {
    const invitation = await db
      .select()
      .from(invitations)
      .where(eq(invitations.phoneNumber, submission.value.phoneNumber));
    if (invitation.length === 0) {
      return submission.reply({
        formErrors: [
          'No existe una invitación asociada a este número telefónico.',
        ],
      });
    }
    return redirect(`/${invitation[0].id}`);
  } catch (error) {
    return submission.reply({
      formErrors: ['Unxpected error ocurred. Try again later'],
    });
  }
}

export default function Index() {
  const lastResult = useActionData<typeof action>();
  const [form, fields] = useForm({
    lastResult,
    constraint: getZodConstraint(schema),
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
  });

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Form
        method="POST"
        id={form.id}
        aria-invalid={form.errors ? true : undefined}
        aria-describedby={form.errors ? form.errorId : undefined}
        className="flex max-w-80 flex-col gap-4"
      >
        <FormLabel
          htmlFor={fields.phoneNumber.name}
          errors={fields.phoneNumber.errors}
        >
          Ingresa tu número telefónico a 10 dígitos
        </FormLabel>
        <FormMessage errors={form.errors} />
        <Input {...getInputProps(fields.phoneNumber, { type: 'text' })} />
        <FormMessage errors={fields.phoneNumber.errors} />
      </Form>
    </div>
  );
}
