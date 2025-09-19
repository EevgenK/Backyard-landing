import ContactList from './ContactList';
import Container from './shared/shared/Container';
import NavList from './shared/shared/NavList';

const Footer = () => {
  return (
    <footer id="footer">
      <Container
        additionalClass="
            grid grid-cols-2
            justify-between
            md:auto-cols-max
            md:items-center 
            lg:flex
             gap-3
          "
      >
        <p className="text-xs font-normal sm:order-1 lg:order-1 ">
          &copy; 2025 Backyard
        </p>
        <ul className="flex flex-col gap-[2px] order-4 items-end text-[var(--text-grey)] md:flex-row md:gap-2 md:order-2">
          <li>Terms</li>
          <li>Privacy Policy</li>
        </ul>
        <nav className="flex justify-center sm:justify-start order-3">
          <NavList type="footer" />
        </nav>

        <ContactList addClass="order-2 md:order-4 md:col-span-3 " />
      </Container>
    </footer>
  );
};

export default Footer;
