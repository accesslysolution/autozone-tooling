import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactInfo from "@/components/ContactInfo";
import QuoteCard from "@/components/QuoteCard";
import MapEmbed from "@/components/MapEmbed";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Press Brake Tools, Pune",
  description: `Contact ${site.name}, MIDC Bhosari, Pune for press brake tools and shear blades. Call ${site.phones[0].label} or email ${site.email}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact us"
        subtitle="Send us your requirement. We'll reply with the right tool and a quotation."
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      />
      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <ContactInfo />
          <QuoteCard />
        </div>
      </section>
      <MapEmbed />
    </>
  );
}