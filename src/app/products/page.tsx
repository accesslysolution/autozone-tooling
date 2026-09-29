import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ProductsIntro from "@/components/ProductsIntro";
import ProductRange from "@/components/ProductRange";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Press Brake Tool Manufacturer in Pune | Punches, Dies & More",
  description:
    "Complete press brake tooling from Autozone Tooling, Pune: punches, V dies, hemming, radius and joggle tools, and shear blades. Standard and custom.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        title="Press brake tools"
        subtitle="Complete tooling for sheet metal bending, standard and custom."
        crumbs={[{ href: "/", label: "Home" }, { label: "Products" }]}
      />
      <ProductsIntro />
      <ProductRange />
      <CtaBand
        title="Not sure which tool you need?"
        text="Send us your part details and we'll recommend the right punch and die combination."
      />
    </>
  );
}