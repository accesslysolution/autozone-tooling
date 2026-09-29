import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import CityIntro from "@/components/CityIntro";
import ProductRange from "@/components/ProductRange";
import CtaBand from "@/components/CtaBand";
import { cities, getCity } from "@/lib/cities";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  return {
    title: `Press Brake Tool Supplier in ${c.name}`,
    description: `Hardened and ground press brake punches, dies and shear blades supplied to ${c.name} from our Pune factory. Standard sizes from stock, custom tools to order.`,
    alternates: { canonical: `/locations/${c.slug}` },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  return (
    <>
      <PageBanner
        title={`Press brake tools in ${city.name}`}
        subtitle={`Precision tooling from Pune, delivered to ${city.name}.`}
        crumbs={[{ href: "/", label: "Home" }, { href: "/products", label: "Products" }, { label: city.name }]}
      />
      <CityIntro city={city} />
      <ProductRange title={`Products we supply to ${city.name}`} basePath={`/locations/${city.slug}`} />
      <CtaBand
        title={`Get a quote for delivery in ${city.name}`}
        whatsappMessage={`Hi, I need press brake tooling delivered to ${city.name}.`}
      />
    </>
  );
}