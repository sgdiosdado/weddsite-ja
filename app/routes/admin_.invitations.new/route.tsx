import { getInputProps, useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';
import { ChevronRight } from 'lucide-react';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

const schema = z.object({
  phoneNumber: z.string().length(10),
});

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });
  if (submission.status !== 'success') {
    return submission.reply();
  }

  console.log(submission.value);

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
        className="max-w-md"
      >
        <div className="space-y-2">
          <Label htmlFor={fields.phoneNumber.id}>Número telefónico</Label>
          <Input {...getInputProps(fields.phoneNumber, { type: 'text' })} />
        </div>
      </Form>
    </div>
  );
}
