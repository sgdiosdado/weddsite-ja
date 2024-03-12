import { GiftsCarousel } from './gifts-carousel';
import { PhotoCarousel } from './photo-carousel';

const PHOTOS_TOP = [
  {
    source:
      'https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-8WqVRq5/0/DVd2c5hqqCthhkzBwkD8zQN3Cp94jxH68hB6zvxJh/X3/240504%20-%20Jacky%20y%20Andres%20-%20077-X3.jpg',
  },
  {
    source:
      'https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-F5PMPwr/0/jF2db57fLXVJRkbFPcqmVGwxmTkTKvxsBqXVxMw3/X2/240504%20-%20Jacky%20y%20Andres%20-%20120-X2.jpg',
  },
  {
    source:
      'https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-FvwQWCw/0/CstD83jdtK4pwdvZZbPvgSxsvCrxKzBTV3MdzqQMR/X2/240504%20-%20Jacky%20y%20Andres%20-%20055-X2.jpg',
  },
  {
    source:
      'https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-npR4vJr/0/vpZJP2MjSNQZLHGqNkjh5pPvDNvVRfZ5HVzdgj2x/X2/240504%20-%20Jacky%20y%20Andres%20-%20015-X2.jpg',
  },
];

const PHOTOS_BOTTOM = [
  {
    source:
      'https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-VfknVgL/0/DcjwSqg89bD45RWcDhQNpjh2SrqxFnX86CdvCzxf4/X2/240504%20-%20Jacky%20y%20Andres%20-%20078-X2.jpg',
  },
  {
    source:
      'https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-scPJv3h/0/7sKThzSKCLHkCRw64XW4hHbW57SQxmZ5ChmhGX5G/X2/240504%20-%20Jacky%20y%20Andres%20-%20058-X2.jpg',
  },
  {
    source:
      'https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-qRmB2mF/0/FJf4HHCZTrzKjj8sGfDLfDTFgmdX66GKXj25jttN/X2/240504%20-%20Jacky%20y%20Andres%20-%20115-X2.jpg',
  },
  {
    source:
      'https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-F8f3xw8/0/rgCD5kcxwqJB8gqVtRQMMhfNJXBMMHjsjZRdq8sj/X2/240504%20-%20Jacky%20y%20Andres%20-%20004-X2.jpg',
  },
  {
    source:
      'https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-Gg3qwJ5/0/DQSN3453p6MpJKLsgRgQKRXmTBPbNzd27DxcM7DNB/X4/240504%20-%20Jacky%20y%20Andres%20-%20168-X4.jpg',
  },
  {
    source:
      'https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-dSqqQSZ/0/FTtT9bCCgPTH4gw33pTMchRRVFjRhCjcQr9RFZtVp/X2/240504%20-%20Jacky%20y%20Andres%20-%20124-X2.jpg',
  },
  {
    source:
      'https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-5McqB4G/0/qK2tX43S73nk3sfzKQFjbvndbQhmMdXSpHfQ5Cjk/X2/240504%20-%20Jacky%20y%20Andres%20-%20075-X2.jpg',
  },
  {
    source:
      'https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-Lgvbr4c/0/CmBhBr7nGrDWtzjWTgbvXqVwSwhFSxM4cz5QdsWcB/X2/240504%20-%20Jacky%20y%20Andres%20-%20068-X2.jpg',
  },
  {
    source:
      'https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-tLCwh5G/0/FWKmrNtjz5RhQr8rWZrH3Cc8bv2JXkL7bDZkSmbLG/X2/240504%20-%20Jacky%20y%20Andres%20-%20182-X2.jpg',
  },
  {
    source:
      'https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-rcsM4sk/0/CRqFqKp3Zx8hVK5R9XHDdmKGfNSbQB9t6LTPZf3Zn/X2/240504%20-%20Jacky%20y%20Andres%20-%20127-X2.jpg',
  },
];

export default function TransportInfo({
  invitedToCivil = false,
}: {
  invitedToCivil: boolean;
}) {
  return (
    <section className=" grid grid-cols-[40px_1fr_40px] place-items-center gap-5 bg-JA-creme-50 py-20 text-lg ">
      <p className="col-start-2 text-sm font-medium text-JA-sage-150">
        INFORMACIÓN DE TRASLADO
      </p>
      <img
        src="./images/separator-dark.svg"
        alt="Separador de hospedaje "
        className="col-start-2"
      />
      <p className="col-start-2 mt-1 text-3xl font-light italic text-JA-sage-150">
        Transporte
      </p>
      {invitedToCivil ? (
        <p className="col-start-2 text-center font-light text-JA-sage-150">
          Para su conveniencia, contaremos con transporte del hotel{' '}
          <span className="font-medium italic">Novotel Valle</span> a la iglesia
          y al lugar del evento. El transporte saldrá del hotel{' '}
          <span className="font-medium italic">Novotel Valle</span> a las 3:30
          pm. Al terminar el evento, te llevará de regreso al hotel.
        </p>
      ) : (
        <p className="col-start-2 text-center font-light text-JA-sage-150">
          Para su conveniencia, contaremos con transporte del hotel{' '}
          <span className="font-medium italic">Novotel Valle</span> a al lugar
          del evento. El transporte saldrá del hotel{' '}
          <span className="font-medium italic">Novotel Valle</span> a las 6:00
          pm. Al terminar el evento, te llevará de regreso al hotel.
        </p>
      )}
      <div className="col-span-3 ">
        <PhotoCarousel photos={PHOTOS_TOP} basis={'basis-[80%]'} />
      </div>

      <p className="col-start-2 text-center text-sm font-medium text-JA-sage-150">
        Gracias por formar parte de nuestro inicio como familia
      </p>
      <img
        src="./images/separator-dark.svg"
        alt="Separador de hospedaje "
        className="col-start-2"
      />
      <div className="col-start-2 flex flex-col">
        <p className=" mb-3 mt-1 text-center text-3xl font-light italic text-JA-sage-150">
          MESA DE REGALOS
        </p>
        <GiftsCarousel />
      </div>
      <div className="col-span-3">
        <PhotoCarousel photos={PHOTOS_BOTTOM} />
      </div>
    </section>
  );
}
