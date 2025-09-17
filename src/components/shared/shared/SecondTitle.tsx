import clsx from 'clsx';
import { ReactNode } from 'react';

interface SecondTitleProps {
  children: ReactNode;
  additionalClass?: string;
}

const SecondTitle = ({ children, additionalClass }: SecondTitleProps) => {
  return (
    <h2
      className={clsx(
        'font-bold text-[28px] md:text-[42px] lg:text-[48px] mb-[39px] md:mb-6 lg:mb-0',
        additionalClass,
      )}
    >
      {children}
    </h2>
  );
};

export default SecondTitle;
