import { slides } from '../data/slidesData';
import SlideCard from './SlideCard';

const AnimList = () => {
  return (
    <ul className="flex gap-36 w-full h-110 mx-auto">
      {slides.map((slide) => (
        <SlideCard
          className="relative flex-col flex basis-90 justify-center"
          key={slide.id}
          {...slide}
        />
      ))}
    </ul>
  );
};

export default AnimList;
