import { Hero } from "../components/Hero";
import { FeaturedMockups } from "../components/FeaturedMockups.jsx";
import { Wrapper } from "../components/Wrapper.jsx";
import "../components/FeaturedMockups.css";

export const AboutPage = () => {
  return (
    <Wrapper>
      <Hero />
      <FeaturedMockups />
    </Wrapper>
  );
};
