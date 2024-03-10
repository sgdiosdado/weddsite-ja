import Autoplay from 'embla-carousel-autoplay';

import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

type Photo = { source: string };

export function PhotoCarousel({
  photos,
  basis,
}: {
  photos: Array<Photo>;
  basis?: string;
}) {
  if (photos) {
    return (
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
          WheelGesturesPlugin(),
        ]}
        className="mt-10 w-full lg:max-w-screen-lg"
      >
        <CarouselContent>
          {photos.map((data, index) => (
            <CarouselItem
              key={index}
              className={basis + ' flex justify-center'}
            >
              <img
                src={data.source}
                alt="Foto"
                className="min-h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  }
}
