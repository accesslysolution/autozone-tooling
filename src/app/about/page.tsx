import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AboutIntro from "@/components/AboutIntro";
import WhyToolingMatters from "@/components/WhyToolingMatters";
import HowWeWork from "@/components/HowWeWork";
import MissionVision from "@/components/MissionVision";
import Leadership from "@/components/Leadership";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Us | Press Brake Tool Manufacturer, Pune",
  description:
    "Autozone Tooling is a Pune manufacturer of precision press brake tools and shear blades for Amada, Trumpf, LVD, Bystronic and other machines.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="Precision tooling for India's sheet metal industry"
        crumbs={[{ href: "/", label: "Home" }, { label: "About us" }]}
      />
      <AboutIntro />
      <WhyToolingMatters />
      <HowWeWork />
      <MissionVision dark={false} />
      <Leadership />
      <CtaBand title="Let's talk tooling" />
    </>
  );
}