import { SubmissionResult, getInputProps, useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { Form } from '@remix-run/react';
import { z } from 'zod';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { FormLabel } from './ui/form/form-label';
import { Input } from './ui/input';
import { FormMessage } from './ui/form/form-message';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

export const schema = z.object({
  phoneNumber: z
    .string()
    .length(10)
    .refine(
      (value) => !isNaN(Number(value)),
      'Phone number must contain only numbers',
    ),
  invitedToCivil: z.boolean().default(false),
});

type InvitationFormProps = {
  lastResult?: SubmissionResult;
  defaultValue?: z.infer<typeof schema>;
};

export function InvitationForm({
  lastResult,
  defaultValue,
}: InvitationFormProps) {
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
      <div className="flex items-center gap-2">
        <FormLabel
          errors={fields.invitedToCivil.errors}
          htmlFor={fields.invitedToCivil.id}
        >
          ¿Invitado al civil?
        </FormLabel>
        <Checkbox
          {...getInputProps(fields.invitedToCivil, { type: 'checkbox' })}
        />
      </div>

      <Button>Guardar invitación</Button>
    </Form>
  );
}
