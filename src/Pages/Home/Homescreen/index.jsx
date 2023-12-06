import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import VideoSection from "../VideoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <VideoSection />
      <AboutMe />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}
