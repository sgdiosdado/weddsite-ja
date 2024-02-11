import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Boda Jacqueline y Andrés' },
    { name: 'description', content: 'Invitación boda Jacqueline y Andrés' },
  ];
};

export default function Index() {
  return (
    <main className="bg-JA-sage-100 flex flex-col">
      <section className="text-JA-gray flex min-h-svh flex-col items-center justify-between bg-green-50">
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

      <section className="bg-JA-creme-50 mt-4 p-6 text-center font-light leading-relaxed">
        <p>
          Con alegría en nuestros corazones, les invitamos a celebrar el amor de
          <span className="font-medium italic"> Jacqueline y Andrés</span> en el
          día de su boda. Únanse a nosotros para compartir este momento lleno de
          amor y felicidad
        </p>
      </section>

      <section className="bg-verde flex min-h-svh flex-col justify-center p-6 text-center ">
        <p className="text-JA-creme-50 text-[100px]">25</p>
        <p className="text-JA-creme-50 text-[24px] italic">días</p>
        <p className="text-JA-creme-50 text-[100px]">10</p>
        <p className="text-JA-creme-50 text-[24px] italic">horas</p>
        <p className="text-JA-creme-50 text-[100px]">34</p>
        <p className="text-JA-creme-50 text-[24px] italic">minutos</p>
        <p className="text-JA-creme-50 text-[100px]">03</p>
        <p className="text-JA-creme-50 text-[24px] italic">segundos</p>
      </section>

      <section className="bg-JA-creme-50 flex h-svh flex-col items-center justify-center gap-3 p-6">
        <p className="text-JA-text  text-sm font-medium">ITINERARIO</p>
        <img src="./images/separator.svg" alt="Separador de itinerario" />
        <p className="text-JA-text mt-1 text-3xl font-light italic">
          Día de la boda
        </p>
        <p className="text-JA-text text-lg font-light">
          Sábado 4 de mayo de 2024
        </p>

        <div className="mt-16 grid min-h-80 grid-cols-3 gap-x-7">
          <p className="text-JA-text border-JA-sage-100 border-r-2 p-5 text-center font-light italic">
            5:30 PM
          </p>

          <div className="col-span-2 flex min-h-56 flex-col gap-2">
            <img
              src="./images/civil-icon.svg"
              alt="Icono para itinerario de boda civil"
              width={42}
            />
            <p>Civil</p>
            <hr className="border-JA-sage-100 opacity-30" />
            <p className="text-JA-text font-light">
              Ubicación o Información que pueda ponerse aquí
            </p>
          </div>

          <p className="text-JA-text border-r-2 border-[#B5B9B6] p-5 text-center font-light italic">
            8:00 PM - <br />
            2:00 AM
          </p>

          <div className="col-span-2 flex min-h-56 flex-col gap-2">
            <img
              src="./images/recepcion-icon.svg"
              alt="Icono para itinerario de recepción"
              width={42}
            />
            <p className="">Recepción</p>
            <hr className="border-JA-sage-100 opacity-30" />
            <p className="text-JA-text font-light">
              Quinta <span className="font-bold">Las Jacarandas</span>
            </p>
            <p className="text-JA-text font-light">
              Carretera Nacional KM. 257, San Roberto S/N, El Barrial, 67303{' '}
              <span className="font-bold">Santiago, N.L.</span>
            </p>
            <button className="bg-JA-sage-100 text-JA-creme-50 hover:bg-JA-sage-50 max-w-80 p-2 italic">
              UBICACIÓN
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
