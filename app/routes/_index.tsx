import type { MetaFunction } from '@remix-run/node';
import CountdownTimer from '~/countdown/countdown';

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
      <section className="bg-JANDY flex min-h-svh flex-col items-center justify-between bg-green-50 bg-cover text-JA-gray">
        <img
          src="./images/logo.png"
          alt="Logo boda Jacqueline y Andrés"
          className="w-16"
        />
        <div className="flex h-full flex-1 flex-col items-center justify-center gap-4">
          <p className="text-xs">Jacqueline & Andrés</p>
          <div className="flex flex-col gap-4 text-center text-5xl font-thin">
            <p>
              <span className="font-extralight italic">Our love</span> is a
            </p>
            <p>journey that</p>
            <p>begins with</p>
            <p>forever</p>
          </div>
          <p className="text-xs">04.05.2024</p>
        </div>
      </section>

      <section className="mt-4 bg-JA-creme-50 p-6 text-center font-light leading-relaxed">
        <p>
          Con alegría en nuestros corazones, les invitamos a celebrar el amor de
          <span className="font-medium italic"> Jacqueline y Andrés</span> en el
          día de su boda. Únanse a nosotros para compartir este momento lleno de
          amor y felicidad
        </p>
      </section>

      <section className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-JA-sage-100 p-6 text-center [&>*]:z-10">
        <div className="absolute z-0 h-full w-full bg-flowers opacity-5" />
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </section>

      <section className="flex min-h-svh flex-col items-center justify-center gap-3 bg-JA-creme-50 p-6">
        <p className="text-sm  font-medium text-JA-sage-150">ITINERARIO</p>
        <img src="./images/separator-dark.svg" alt="Separador de itinerario" />
        <p className="mt-1 text-3xl font-light italic text-JA-sage-150">
          Día de la boda
        </p>
        <p className="text-lg font-light text-JA-sage-150">
          Sábado 4 de mayo de 2024
        </p>

        <div className="mt-16 grid grid-cols-3 gap-x-7">
          <div className="flex items-center justify-end border-r-2 border-JA-sage-100 p-3 font-light italic text-JA-sage-150">
            <p>5:30 PM</p>
          </div>

          <div className="col-span-2 flex min-h-80 flex-col justify-center gap-2">
            <img
              src="./images/civil-icon.svg"
              alt="Icono para itinerario de boda civil"
              width={42}
            />
            <p>Civil</p>
            <hr className="border-JA-sage-100 opacity-30" />
            <p className="font-light text-JA-sage-150">
              Ubicación o Información que pueda ponerse aquí
            </p>
          </div>

          <div className="flex items-center justify-end border-r-2 border-[#B5B9B6] p-2 font-light italic text-JA-sage-150">
            <p>
              8:00 PM - <br />
              2:00 AM
            </p>
          </div>

          <div className="col-span-2 flex min-h-80 flex-col justify-center gap-2">
            <img
              src="./images/reception-icon.svg"
              alt="Icono para itinerario de recepción"
              width={42}
            />
            <p className="">Recepción</p>
            <hr className="border-JA-sage-100 opacity-30" />
            <p className="font-light text-JA-sage-150">
              Quinta <span className="font-bold">Las Jacarandas</span>
            </p>
            <p className="font-light text-JA-sage-150">
              Carretera Nacional KM. 257, San Roberto S/N, El Barrial, 67303{' '}
              <span className="font-bold">Santiago, N.L.</span>
            </p>
            <a
              href="https://maps.app.goo.gl/7mE8xLuguVdNmmkV7"
              className="max-w-80 bg-JA-sage-100 p-2 text-center italic text-JA-creme-50 hover:bg-JA-sage-150"
              target="_blank"
            >
              UBICACIÓN
            </a>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center gap-5 bg-JA-sage-100 px-10 py-20 [&>*]:z-10">
        <div className="absolute z-0 h-full w-full bg-flowers opacity-5" />
        <p className=" text-sm font-medium text-JA-creme-50">
          ¿DÓNDE QUEDARSE?
        </p>
        <img src="./images/separator-light.svg" alt="Separador de hospedaje" />
        <p className=" text-3xl font-light italic text-JA-creme-50">
          Hospedaje
        </p>
        <p className=" mt-6 text-center text-2xl font-light text-JA-creme-50">
          Hotel Novotel Monterrey Valle
        </p>
        <a
          href="https://maps.app.goo.gl/NoH6JTPjNGbHnMma6"
          target="_blank"
          className=" mt-4 w-full max-w-80 bg-JA-sage-150 p-2 text-center italic text-JA-creme-50 hover:bg-JA-creme-50 hover:text-JA-sage-150"
        >
          UBICACIÓN
        </a>
        <button className=" w-full max-w-80 bg-JA-sage-150 p-2 italic text-JA-creme-50 hover:bg-JA-creme-50 hover:text-JA-sage-150">
          RESERVACIÓN
        </button>
        <p className=" text-center text-lg font-light text-JA-creme-50">
          Te recomendamos hospedarte en el hotel{' '}
          <strong className="font-medium italic">Novotel Valle</strong>, ya que
          contaremos con transporte del hotel a la ceremonia.
        </p>
        <p className=" text-center text-lg font-light text-JA-creme-50">
          Te compartimos el código con tarifa especial para tu reservación:
        </p>
        <p className=" text-center text-lg font-semibold text-JA-creme-50 underline">
          BODA JAQUELINE Y ANDRES
        </p>
        <p className=" text-center text-lg font-light text-JA-creme-50">
          Si tienes alguna otra opción en mente, te recomendamos que sea en la
          zona sur de Monterrey o en San Pedro Garza García.
        </p>
      </section>

      <section className="flex  flex-col items-center justify-center gap-5 bg-JA-creme-50 px-10 py-20 text-lg">
        <p className="text-sm font-medium text-JA-sage-150">
          INFORMACIÓN DE TRASLADO
        </p>
        <img src="./images/separator-dark.svg" alt="Separador de hospedaje" />
        <p className="mt-1 text-3xl font-light italic text-JA-sage-150">
          Transporte
        </p>
        <p className="text-center font-light text-JA-sage-150">
          El transporte saldrá del hotel{' '}
          <span className="font-medium italic">Novotel Valle</span> hacia el
          evento, más adelante te confirmaremos el horario. Al terminar el
          evento, el transporte te llevará de regreso al hotel{' '}
          <span className="font-medium italic">Novotel Valle</span>.
        </p>

        <p className="text-sm font-medium text-JA-sage-150">REGALOS</p>
        <img src="./images/separator-dark.svg" alt="Separador de hospedaje" />
        <p className="mt-1 text-center text-3xl font-light italic text-JA-sage-150">
          MESA DE REGALOS
        </p>
      </section>

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
