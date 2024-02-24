import { SubmissionResult, getInputProps, useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { Form } from '@remix-run/react';
import { z } from 'zod';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';
import { Button } from './ui/button';
import { FormLabel } from './ui/form/form-label';
import { FormMessage } from './ui/form/form-message';
import { Input } from './ui/input';

export const schema = z.object({
  name: z.string().min(3),
});

type GuestFormProps = {
  lastResult?: SubmissionResult;
  defaultValue?: z.infer<typeof schema>;
};

export function GuestForm({ lastResult, defaultValue }: GuestFormProps) {
  const [form, fields] = useForm({
    lastResult,
    defaultValue,
    constraint: getZodConstraint(schema),
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
  });

  return (
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

      <Button>Guardar invitado</Button>
    </Form>
  );
}
