import Container from './shared/shared/Container';
import CustomButton from './shared/shared/CustomButton';
import Logo from './shared/shared/Logo';
import NavList from './shared/shared/NavList';

const Header = () => {
  return (
    <header className=" mt-[18px] mb-[23px]">
      <Container additionalClass="flex items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-13">
          <NavList type="header" />
          <CustomButton color="dark" additionalClass="px-[14px] py-2">
            Connect
          </CustomButton>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
