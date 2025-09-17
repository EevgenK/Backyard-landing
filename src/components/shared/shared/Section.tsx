import clsx from 'clsx';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  additionalClass?: string;
}
const Section = ({ id, children, additionalClass }: SectionProps) => (
  <section
    id={id}
    className={clsx('mb-[67px] md:mb-[119px] lg:mb-[131px]', additionalClass)}
  >
    {children}
  </section>
);

export default Section;
