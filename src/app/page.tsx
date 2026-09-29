import HomeHero from "@/components/HomeHero";
import HomeAbout from "@/components/HomeAbout";
import HomeProducts from "@/components/HomeProducts";
import StatsStrip from "@/components/StatsStrip";
import WhyChooseUs from "@/components/WhyChooseUs";
import MissionVision from "@/components/MissionVision";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import HomeClients from "@/components/HomeClients";
import CtaBand from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeProducts />
      <StatsStrip />
      <WhyChooseUs />
      <MissionVision />
      <Industries />
      <Testimonials />
      <HomeClients />
      <CtaBand />
    </>
  );
}