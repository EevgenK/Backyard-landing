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
      'text-xs font-medium rounded-full p-2 transition-all duration-500 ease-in-out';
    switch (type) {
      case 'menu':
        return clsx(
          base,
          active === el ? 'text-black' : 'text-[var(--text-grey)]',
        );
      case 'footer':
        return clsx(
          base,
          active === el
            ? 'underline text-[var(--text-blue)]'
            : 'text-[var(--text-grey)] hover:text-[var(--text-blue)]',
        );
      case 'header':
      default:
        return clsx(
          base,
          active === el
            ? 'bg-[var(--btn-bg_dark)] text-white'
            : 'text-[var(--text-grey)] hover:bg-[var(--btn-bg_dark_hover)] hover:text-white focus:bg-[var(--btn-bg_dark_hover)] focus:text-white',
        );
    }
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
      )}
    >
      {sections.map((el) => (
        <li key={el} className={getItemClass(el)}>
          <a href={`#${makeId(el)}`}>{el}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
