import { ChurchIcon } from 'lucide-react';

export function LocationInfo({ invitedToCivil }: { invitedToCivil: boolean }) {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center gap-3 bg-JA-creme-50 p-6">
      <p className="text-sm  font-medium text-JA-sage-150">ITINERARIO</p>
      <img src="./images/separator-dark.svg" alt="Separador de itinerario" />
      <p className="text-center  text-2xl font-light text-JA-sage-150">
        Sábado 4 de mayo, 2024
      </p>
      <hr className="w-3/4 border-JA-sage-100 opacity-30" />
      <p className="font-light text-JA-sage-150">
        Quinta <span className="font-bold">Las Jacarandas</span>
      </p>
      <p className="text-center font-light text-JA-sage-150">
        Carretera Nacional KM. 257, San Roberto S/N, El Barrial, 67303{' '}
        <span className="font-bold">Santiago, N.L.</span>
      </p>
      <a
        href="https://maps.app.goo.gl/7mE8xLuguVdNmmkV7"
        className="max-w-80 bg-JA-sage-100 p-2 text-center italic text-JA-creme-50 hover:bg-JA-sage-150"
        target="_blank"
        rel="noreferrer"
      >
        UBICACIÓN
      </a>

      <div className="mt-10 grid grid-cols-3 gap-x-7">
        <div className="flex items-center justify-end border-r-2 border-JA-sage-150 p-2 font-light italic text-JA-sage-150">
          <p>4:00 pm</p>
        </div>
        <div className="col-span-2 flex min-h-36 flex-col justify-center gap-2">
          <ChurchIcon className="fill-JA-sage-100" width={40} height={40} />
          <hr className="border-JA-sage-100 opacity-30" />
          <p>Misa</p>
          <p className="font-light">Parroquia del Rosario de Monterrey A.R.D</p>
          <a
            href="https://maps.app.goo.gl/L6tRdHkfVZFZRK4P8"
            className="max-w-80 bg-JA-sage-100 p-2 text-center italic text-JA-creme-50 hover:bg-JA-sage-150"
            target="_blank"
            rel="noreferrer"
          >
            UBICACIÓN
          </a>
        </div>

        {invitedToCivil ? (
          <>
            <div className="flex items-center justify-end border-r-2 border-JA-sage-150 p-2 font-light italic text-JA-sage-150">
              <p>5:30 pm</p>
            </div>
            <div className="col-span-2 flex min-h-36 flex-col justify-center gap-2">
              <img src="./images/rings.svg" alt="Icono de anillos" width={60} />
              <hr className="border-JA-sage-100 opacity-30" />
              <p className="">Civil</p>
            </div>{' '}
          </>
        ) : null}

        <div className="flex items-center justify-end border-r-2 border-JA-sage-100 p-2 font-light italic text-JA-sage-150">
          <p>8:00 pm</p>
        </div>
        <div className="col-span-2 flex min-h-36 flex-col justify-center gap-2">
          <img src="./images/glasses.svg" alt="Icono de copas" width={60} />
          <hr className="border-JA-sage-100 opacity-30" />
          <p className="">Recepción</p>
        </div>

        <div className="flex items-center justify-end border-r-2 border-JA-sage-50 p-3 font-light italic text-JA-sage-150">
          <p>9:00 pm</p>
        </div>
        <div className="col-span-2 flex min-h-36 flex-col justify-center gap-2">
          <img
            src="./images/plate.svg"
            alt="Icono de plato y cubiertos"
            width={70}
          />
          <hr className="border-JA-sage-100 opacity-30" />
          <p>Cena</p>
        </div>

        <div className="flex items-center justify-end border-r-2 border-[#B5B9B6] p-2 font-light italic text-JA-sage-150">
          <p>
            10:00 PM - <br />
            1:00 AM
          </p>
        </div>
        <div className="col-span-2 flex min-h-36 flex-col justify-center gap-2">
          <img
            src="./images/music-notes.svg"
            alt="Icono de notas musicales"
            width={60}
          />
          <hr className="border-JA-sage-100 opacity-30" />
          <p className="">A bailar</p>
        </div>
      </div>
    </section>
  );
}
