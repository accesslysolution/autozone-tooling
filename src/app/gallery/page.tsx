import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of Autozone Tooling's press brake punches, dies, hemming tools and shear blades, made in Pune.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="Our tools, straight from the workshop."
        crumbs={[{ href: "/", label: "Home" }, { label: "Gallery" }]}
      />
      <section className="py-16">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </section>
      <CtaBand title="Need something similar?" />
    </>
  );
}