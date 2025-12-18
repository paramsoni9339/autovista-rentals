import CTASection from "../sections/CTASection";
import HeroSection from "../sections/HeroSection";
import ServiceSection from "../sections/ServiceSection";
// import all sections imports here
import EventTypeSection from "./../sections/EventTypeSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <EventTypeSection />

      {/* captivating CTA:3D EXP  */}
      <CTASection />
      
    </div>
  );
};

export default HomePage;
