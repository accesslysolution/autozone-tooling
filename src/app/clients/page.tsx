import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Our Clients",
  description: "Manufacturers and fabricators across India trust Autozone Tooling for press brake tools.",
  alternates: { canonical: "/clients" },
};

export default function ClientsPage() {
  return (
    <>
      <PageBanner
        title="Our clients"
        subtitle="From large OEMs to growing fabrication shops, manufacturers across India rely on our tooling."
        crumbs={[{ href: "/", label: "Home" }, { label: "Clients" }]}
      />
      <section className="py-16">
        <div className="container-x">
          <ClientLogos />
        </div>
      </section>
      <div className="bg-white">
        <Testimonials />
      </div>
      <CtaBand title="Join 230+ satisfied clients" />
    </>
  );
}