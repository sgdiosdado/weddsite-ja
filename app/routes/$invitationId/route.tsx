import { parseWithZod } from '@conform-to/zod';
import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from '@remix-run/node';
import { eq } from 'drizzle-orm';
import { RouteParams } from 'routes-gen';
import { WeddingCover } from '~/components/cover';
import { LocationInfo } from '~/components/location-info';
import { LodgingInfo } from '~/components/lodging-info';
import TransportInfo from '~/components/transport-info';
import CountdownTimer from '~/components/countdown/countdown';
import { db } from '~/drizzle/config.server';
import { guests } from '~/drizzle/schema.server';
import { GuestForm, schema } from './guest-form';
import { useActionData, useFetcher, useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Boda Jacqueline y Andrés' },
    { name: 'description', content: 'Invitación boda Jacqueline y Andrés' },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { invitationId } = params as RouteParams['/:invitationId'];
  const guestList = await db
    .select({
      id: guests.id,
      name: guests.name,
      status: guests.status,
      menu: guests.menu,
    })
    .from(guests)
    .where(eq(guests.invitationId, invitationId));

  return { guests: guestList };
}

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  await db.transaction(async (tx) => {
    for (const guest of submission.value.guests) {
      await tx
        .update(guests)
        .set({ status: guest.status, menu: guest.menu })
        .where(eq(guests.id, guest.id));
    }
  });

  return submission;
}

const WEDDING_DATE = new Date('May 4, 2024 17:30:00');

export default function Index() {
  const defaultValue = useLoaderData<typeof loader>();
  const lastResult = useActionData<typeof action>();

  return (
    <main className="flex flex-col bg-JA-sage-100">
      <WeddingCover />

      <section className="mt-4 bg-JA-creme-50 p-6 text-center font-light leading-relaxed">
        <p>
          Con alegría en nuestros corazones, les invitamos a celebrar el amor de
          <span className="font-medium italic"> Jacqueline y Andrés</span> en el
          día de su boda. Únanse a nosotros para compartir este momento lleno de
          amor y felicidad
        </p>
      </section>

      <section className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-JA-sage-100 p-6 pb-12 text-center [&>*]:z-10">
        <div className="absolute inset-0 z-0 h-full w-full bg-flowers opacity-5" />
        <CountdownTimer targetDate={WEDDING_DATE.getTime()} />
      </section>

      <LocationInfo />

      <LodgingInfo />

      <TransportInfo />

      <section className="flex flex-col items-center justify-center gap-5 bg-JA-sage-100  px-10 py-20 text-lg text-JA-creme-50">
        <p className="mt-1 text-center text-3xl font-light italic ">
          ¡NOS VEMOS PRONTO!
        </p>
        <img src="./images/separator-light.svg" alt="Separador de hospedaje" />
        <p className="text-center font-light">
          Estamos muy felices de poder compartir este hermoso momento junto a
          ustedes. Por favor confirma tu asistencia dando click en el siguiente
          botón:
        </p>
        <GuestForm defaultValue={defaultValue} lastResult={lastResult} />
      </section>
    </main>
  );
}
