import { useModal } from '../utils/hooks/useModal';
import BurgerBtn from './BurgerBtn';
import Container from './shared/shared/Container';
import CustomButton from './shared/shared/CustomButton';
import Logo from './shared/shared/Logo';
import NavList from './shared/shared/NavList';

const Header = () => {
  const { openModal } = useModal();
  return (
    <header className=" mt-[18px] mb-[23px]">
      <Container additionalClass="flex items-center justify-between lg:justify-start lg:gap-110">
        <Logo />
        <nav className="sm:hidden md:flex items-center gap-13">
          <NavList type="header" />
          <CustomButton color="dark" additionalClass="px-[14px] py-2 lg:hidden">
            Connect
          </CustomButton>
        </nav>
        <BurgerBtn icon="icon-burger" action={openModal} />
      </Container>
    </header>
  );
};

export default Header;
