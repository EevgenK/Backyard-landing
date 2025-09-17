import clsx from 'clsx';
import { ElementType, ReactNode } from 'react';

interface ContainerProps {
  tag?: ElementType;
  children: ReactNode;
  additionalClass?: string;
}
const Container = ({
  tag: Tag = 'div',
  children,
  additionalClass,
}: ContainerProps) => {
  return (
    <Tag
      className={clsx(
        'mx-auto border border-blue-500 md:border-green-500 lg:border-red-700 min-w-[316px] max-w-[360px] md:min-w-[768px] px-5.5 md:pl-8 md:pr-10 lg:min-w-[1920px] lg:pl-66 lg:pr-66',
        additionalClass,
      )}
    >
      {children}
    </Tag>
  );
};

export default Container;
