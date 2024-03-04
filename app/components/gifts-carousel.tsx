import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

export function GiftsCarousel() {
  const GIFTS = [
    {
      source: './images/envelope2.svg',
      details: 'Muchas gracias por sus regalos.',
    },
    {
      source: './images/liverpool.png',
    },
  ];

  return (
    <Carousel
      opts={{
        align: 'start',
        breakpoints: { '(min-width: 1024px)': { active: false } },
      }}
      className="flex max-w-screen-lg flex-col items-center "
    >
      <CarouselContent>
        {GIFTS.map((data, index) => (
          <CarouselItem key={index} className="basis-[80%] md:basis-1/2">
            <div className="flex aspect-square min-h-full p-2">
              <div className="flex aspect-square flex-col  items-center justify-center bg-white p-2 shadow-lg ">
                <img src={data.source} alt="Foto" className="max-w-[80%]" />
                {data?.details && (
                  <div className="text-center text-JA-sage-150">
                    {data.details}
                  </div>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative mt-6">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
