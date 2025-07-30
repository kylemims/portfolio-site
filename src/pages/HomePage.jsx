import { Hero } from "../components/Hero.jsx";
import { FeaturedMockups } from "../components/FeaturedMockups.jsx";
import { Wrapper } from "../components/Wrapper.jsx";
import "../components/FeaturedMockups.css";
import { ProfileSection } from "../components/ProfileSection.jsx";
export const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
      <ProfileSection />
      <FeaturedMockups />
    </Wrapper>
  );
};
