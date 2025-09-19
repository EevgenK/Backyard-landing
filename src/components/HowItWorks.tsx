import AnimList from './AnimList';
import Carousel from './shared/shared/Carousel';
import Container from './shared/shared/Container';
import SecondTitle from './shared/shared/SecondTitle';
import Section from './shared/shared/Section';

const HowItWorks = () => {
  return (
    <Section id="about">
      <Container>
        <SecondTitle>What is Backyard?</SecondTitle>
        <div className="block lg:hidden w-full">
          <Carousel />
        </div>
        <div className=" hidden lg:flex w-full">
          <AnimList />
        </div>
      </Container>
    </Section>
  );
};

export default HowItWorks;
