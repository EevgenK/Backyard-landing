import { ReactNode } from 'react';

interface MainTitleProps {
  children: ReactNode;
}

const MainTitle = ({ children }: MainTitleProps) => {
  return (
    <h1 className="font-semibold text-[58px] md:text-[48px] lg:text-[90px] text-[var(--title-color)]">
      {children}
    </h1>
  );
};

export default MainTitle;
