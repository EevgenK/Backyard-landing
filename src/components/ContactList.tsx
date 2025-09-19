import clsx from 'clsx';

const contacts: string[] = ['telegram', 'g', 'x', 'ln'];
export interface ContactListProps {
  addClass?: string;
}
const ContactList = ({ addClass }: ContactListProps) => {
  return (
    <ul className={clsx('flex justify-end gap-3 text-xs', addClass)}>
      {contacts.map((el) => (
        <li key={el}>
          <a href="#">
            <svg
              className="scale-100 transition-scale duration-500 ease-in-out hover:scale-105 focus:scale-105"
              width="14"
              height="14"
            >
              <use href={`sprite.svg#icon-${el}`} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
