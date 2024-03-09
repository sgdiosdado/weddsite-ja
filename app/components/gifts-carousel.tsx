import { ReactNode } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

function GiftCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex aspect-square max-h-64 flex-col items-center justify-center bg-white px-2 py-4 shadow-lg">
      {children}
    </div>
  );
}

export function GiftsCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
        breakpoints: { '(min-width: 1024px)': { active: false } },
      }}
      className="flex max-w-screen-lg flex-col items-center "
    >
      <CarouselContent>
        <CarouselItem className="basis-[80%] md:basis-1/2">
          <GiftCard>
            <img
              src="./images/envelope2.svg"
              alt="Sobre con dinero"
              className="h-32"
            />
            <p>¡Muchas gracias!</p>
          </GiftCard>
        </CarouselItem>

        <CarouselItem className="basis-[80%] md:basis-1/2">
          <a
            href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51378762"
            target="_blank"
          >
            <GiftCard>
              <img
                src="./images/liverpool.png"
                alt="Logotipo de Liverpool"
                className="mt-auto"
              />
              <p className="mt-auto w-full text-center text-sm">
                Revisa nuestra mesa de regalos
              </p>
            </GiftCard>
          </a>
        </CarouselItem>

        <CarouselItem className="basis-[80%] md:basis-1/2">
          <GiftCard>
            <img
              src="./images/BBVA-logo.png"
              alt="Logotipo de BBVA"
              className="my-auto h-32"
            />
            <p className="text-center text-sm">CLABE: 0125 8001 5540 613735</p>
            <p className="text-center text-sm">Tarjeta: 4152 3140 2095 1219</p>
          </GiftCard>
        </CarouselItem>
      </CarouselContent>
      <div className="relative mt-6">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
