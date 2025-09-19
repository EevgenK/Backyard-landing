import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';
import SlideCard from '../../SlideCard';

import { slides } from '../../../data/slidesData';

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const slidesCount = slides.length;

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div
      className="relative overflow-hidden   w-full h-110 md:h-80  mx-auto"
      ref={emblaRef}
    >
      <ul className="flex">
        {slides.map((slide) => (
          <SlideCard key={slide.id} {...slide} />
        ))}
      </ul>

      {/* пагінація */}
      <div className="absolute bottom-0 flex justify-center gap-2 mt-4">
        {Array.from({ length: slidesCount }).map((_, i) => (
          <button
            key={i}
            className={`w-7 h-1 rounded-full ${
              selectedIndex === i
                ? 'bg-[var(--btn-bg_dark_hover)]'
                : 'bg-gray-300'
            }`}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
