import animationsMap from './animations/animationsMap';

interface SlideCardProps {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  animationType: string;
  className?: string;
}

export default function SlideCard({
  id,
  title,
  subtitle,
  text,
  animationType,
  className = '',
}: SlideCardProps) {
  const AnimationComponent = animationsMap[animationType];
  return (
    <li
      className={` flex items-center flex-[0_0_100%] flex-col md:flex-row-reverse lg:items-start gap-4  ${className}`}
    >
      <AnimationComponent />
      <div className="absolute md:static lg:absolute  top-40 lg:top-40 w-full ">
        <div className=" w-full flex items-center gap-8.5 md:gap-18 lg:gap-9.5 bg-white rounded-full p-3 mb-4">
          <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold">
            {id}
          </span>
          <h3 className="font-[var(--third-family)] text-xl  text-[var( --title-color)] ">
            {title}
          </h3>
        </div>
        <div className="p-8 md:pr-25 lg:p-8 h-46 lg:h-43 bg-white rounded-[31px]">
          <h4 className="font-extrabold text-lg mb-3">{subtitle}</h4>
          <p className="text-justify font-[var(--third-family)] text-[var(--text-grey)] text-sm">
            {text}
          </p>
        </div>
      </div>
    </li>
  );
}
