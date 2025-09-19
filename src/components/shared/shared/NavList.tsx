import clsx from 'clsx';
import { makeId } from '../../../utils/helpers/makeHref';
import { useActiveSection } from '../../../utils/hooks/useActiveSection';
const sections: string[] = [
  'Home',
  'About',
  'How it works',
  'Taken design',
  'YARD flywheel',
];
export interface NavListProps {
  type: 'header' | 'footer' | 'menu';
}
const NavList = ({ type }: NavListProps) => {
  const active = useActiveSection(sections);

  const getItemClass = (el: string) => {
    const base =
      'text-xs font-medium rounded-full transition-all duration-500 ease-in-out';
    switch (type) {
      case 'menu':
        return clsx(
          base,
          'p-2 ',
          active === el ? 'text-black' : 'text-[var(--text-grey)]',
        );
      case 'footer':
        return clsx(base, 'p-[1px]');
      case 'header':
      default:
        return clsx(
          base,
          'p-2 ',
          active === el
            ? 'bg-[var(--btn-bg_dark)] text-white'
            : 'text-[var(--text-grey)] hover:bg-[var(--btn-bg_dark_hover)] hover:text-white focus:bg-[var(--btn-bg_dark_hover)] focus:text-white',
        );
    }
  };
  const getLabel = (el: string, index: number) => {
    if (type === 'footer' && index === sections.length - 1) {
      return 'YARD';
    }
    return el;
  };

  return (
    <ul
      className={clsx(
        type === 'header' && [
          'flex items-center gap-[1px] bg-[var(--nav-bg)] rounded-full p-[3px]',
        ],
        type === 'menu' && [
          'flex flex-col gap-[7px] font-[var(--second-family) mb-3',
        ],
        type === 'footer' && [
          'flex flex-col gap-[1px] text-2 text-[var(--text-grey)] md:flex-row md:gap-7',
        ],
      )}
    >
      {sections.map((el, idx) => (
        <li key={el} className={getItemClass(el)}>
          <a href={`#${makeId(el)}`}>{getLabel(el, idx)}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
