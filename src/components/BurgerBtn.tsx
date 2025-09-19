import clsx from 'clsx';

export interface BurgerBtnProps {
  action: () => void;
  icon: string;
  additionalClass?: string;
}

const BurgerBtn = ({ action, icon, additionalClass }: BurgerBtnProps) => {
  return (
    <button
      onClick={action}
      type="button"
      className={clsx(
        'sm:flex items-center justify-center  md:hidden w-10 h-10 border-b-neutral-400 bg-gray-200 rounded-xl cursor-pointer scale-100 transition-scale duration-500 ease-in-out hover:scale-105 focus:scale-105',
        additionalClass,
      )}
    >
      <svg
        className="stroke-gray-950 scale-100 transition-scale duration-500 ease-in-out hover:scale-105 focus:scale-105"
        width="15"
        height="12"
      >
        <use href={`sprite.svg#${icon}`} />
      </svg>
    </button>
  );
};

export default BurgerBtn;
