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
  type: 'header' | 'footer';
}
const NavList = ({ type }: NavListProps) => {
  const active = useActiveSection(sections);
  return (
    <ul
      className={clsx(
        type === 'header' && [
          'flex items-center gap-[1px] bg-[var(--nav-bg)] rounded-full p-[3px]',
        ],
      )}
    >
      {sections.map((el) => (
        <li
          key={el}
          className={`text-xs font-medium rounded-full p-2 transition-all duration-500 ease-in-out  ${
            active === el
              ? 'bg-[var(--btn-bg_dark)] text-white'
              : 'text-[var(--text-grey)] hover:bg-[var(--btn-bg_dark_hover)] hover:text-white focus:bg-[var(--btn-bg_dark_hover)] focus:text-white'
          }`}
        >
          <a href={`#${makeId(el)}`}>{el}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
