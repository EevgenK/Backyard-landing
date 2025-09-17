import LogoImg from './LogoImg';

const Logo = () => {
  return (
    <a
      href="/"
      aria-label="Home page link"
      className="flex items-center gap-2 no-underline text-inherit"
    >
      <LogoImg />
      <span className="font-[var(--third-family)] text-base text-center text-[rgba(51,51,51,0.95)]">
        Backyard
      </span>
    </a>
  );
};

export default Logo;
