import { Submission, SubmissionResult, useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { useFetcher } from '@remix-run/react';
import { CheckCircle2Icon } from 'lucide-react';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import { FormLabel } from '~/components/ui/form/form-label';
import { FormMessage } from '~/components/ui/form/form-message';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

export const schema = z.object({
  guests: z
    .object({
      id: z.string().uuid(),
      name: z.string(),
      status: z.enum(['going', 'not going', 'pending']),
      menu: z.enum(['regular', 'vegetarian']),
    })
    .array(),
});

type GuestFormProps = {
  lastResult?: SubmissionResult;
  defaultValue?: z.infer<typeof schema>;
};

type FetcherType = Submission<z.infer<typeof schema>>;

export function GuestForm({ defaultValue, lastResult }: GuestFormProps) {
  const [form, fields] = useForm({
    defaultValue,
    lastResult,
    constraint: getZodConstraint(schema),
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
  });
  const guests = fields.guests.getFieldList();
  const fetcher = useFetcher<FetcherType>({ key: 'confirm-guests' });

  const confirmed =
    fetcher.data?.status === 'success'
      ? fetcher.data.value.guests.every((guest) => guest.status !== 'pending')
      : guests.every((guest) => guest.value?.status !== 'pending');

  return (
    <>
      {confirmed ? (
        <section className="mx-auto flex flex-col items-center justify-center gap-2 rounded-sm bg-emerald-500/40 p-8 text-center text-emerald-900">
          <CheckCircle2Icon size={64} className="text-emerald-900" />
          <p>¡Gracias por confirmar tu asistencia!</p>
        </section>
      ) : null}

      <fetcher.Form
        method="POST"
        id={form.id}
        aria-invalid={form.errors ? true : undefined}
        aria-describedby={form.errors ? form.errorId : undefined}
        className="flex flex-col gap-4"
      >
        <FormMessage errors={form.errors} />
        <ul className="flex flex-col gap-4">
          {guests.map((guest) => {
            const guestField = guest.getFieldset();

            return (
              <li key={guest.key} className="flex flex-col">
                <p className="whitespace-nowrap">
                  {guestField.name.initialValue}
                </p>
                <input
                  name={guestField.id.name}
                  defaultValue={guestField.id.initialValue}
                  aria-hidden
                  type="hidden"
                />
                <input
                  name={guestField.name.name}
                  defaultValue={guestField.name.initialValue}
                  aria-hidden
                  type="hidden"
                />
                <div className="flex gap-2">
                  <div>
                    <FormLabel
                      htmlFor={guestField.status.name}
                      errors={guestField.status.errors}
                    >
                      Asistencia
                    </FormLabel>
                    <Select
                      defaultValue={guestField.status.initialValue}
                      name={guestField.status.name}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Confirma tu asistencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="going">Asistiré</SelectItem>
                          <SelectItem value="not going">No asistiré</SelectItem>
                          <SelectItem value="pending" disabled>
                            Pendiente
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage errors={guestField.status.errors} />
                  </div>
                  <div>
                    <FormLabel
                      htmlFor={guestField.menu.name}
                      errors={guestField.menu.errors}
                    >
                      Menú
                    </FormLabel>
                    <Select
                      defaultValue={guestField.menu.initialValue}
                      name={guestField.menu.name}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Menú" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="regular">
                            Sin restricción
                          </SelectItem>
                          <SelectItem value="vegetarian">
                            Vegetariano
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage errors={guestField.status.errors} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <Button type="submit">Confirmar</Button>
      </fetcher.Form>
    </>
  );
}
