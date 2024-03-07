import type { MetaFunction } from '@remix-run/node';
import CountdownTimer from '~/components/countdown/countdown';
import { WeddingCover } from '~/components/cover';
import { GiftsCarousel } from '~/components/gifts-carousel';
import { LocationInfo } from '~/components/location-info';
import { LodgingInfo } from '~/components/lodging-info';
import { PhotoCarousel } from '~/components/photo-carousel';
import TransportInfo from '~/components/transport-info';

export const meta: MetaFunction = () => {
  return [
    { title: 'Boda Jacqueline y Andrés' },
    { name: 'description', content: 'Invitación boda Jacqueline y Andrés' },
  ];
};

export default function Index() {
  const fecha_boda = new Date('May 4, 2024 17:30:00');
  const dateTimeAfterThreeDays = fecha_boda.getTime();

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
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </section>

      <LocationInfo />

      <LodgingInfo />

      <TransportInfo />

      <section className="flex  flex-col items-center justify-center gap-5 bg-JA-sage-100  px-10 py-20 text-lg">
        <p className="mt-1 text-center text-3xl font-light italic text-JA-creme-50">
          ¡NOS VEMOS PRONTO!
        </p>
        <img src="./images/separator-light.svg" alt="Separador de hospedaje" />
        <p className="text-center font-light text-JA-creme-50">
          Estamos muy felices de poder compartir este hermoso momento junto a
          ustedes. Por favor confirma tu asistencia dando click en el siguiente
          botón:
        </p>
        <button className="w-full max-w-80 bg-JA-sage-150 p-2 italic text-JA-creme-50 hover:bg-JA-creme-50 hover:text-JA-sage-150">
          RSVP
        </button>
      </section>
    </main>
  );
}
