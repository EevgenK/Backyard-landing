import MainTitle from './MainTitle';
import Container from './shared/shared/Container';
import CustomButton from './shared/shared/CustomButton';
import LogoImg from './shared/shared/LogoImg';
import Section from './shared/shared/Section';

const Hero = () => {
  return (
    <Section id="home">
      <Container>
        <div className="relative md:flex mb-3.5 md:mb-4 items-end">
          <MainTitle>
            The yield-backed stablecoin protocol boosting DeFi liquidity
          </MainTitle>
          
          <LogoImg
            additionalClass="sm:absolute  sm:bottom-16 sm:right-28 md:relative md:bottom-auto md:right-auto w-15 h-15 md:w-110 md:h-38 lg:w-250 lg:h-69"
            shadow={true}
          />
        </div>
        <p className="font-[var(--third-family)] text-[var(--text-grey)] text-xl md:text-base lg:text-2xl  mb-[38px] md:mb-[33px] lg:mb-[79px]">
          Keep your yield working for you — we keep your liquidity accessible
        </p>
        <div className="flex gap-2 md:gap-5">
          <CustomButton
            color="dark"
            additionalClass="px-[30px]  py-[17.5px] md:px-[112px] "
          >
            Join Whitelist
          </CustomButton>
          <CustomButton
            color="light"
            mobileLabel="Learn more"
            desktopLabel="Read Docs"
            additionalClass="px-[30px]  py-[17.5px] md:px-[62px]"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
