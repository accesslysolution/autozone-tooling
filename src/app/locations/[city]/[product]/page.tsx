import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import CityProductIntro from "@/components/CityProductIntro";
import CityWhyUs from "@/components/CityWhyUs";
import CtaBand from "@/components/CtaBand";
import { cities, getCity } from "@/lib/cities";
import { getProduct, products } from "@/lib/products";

type Props = { params: Promise<{ city: string; product: string }> };

export function generateStaticParams() {
  return cities.flatMap((c) => products.map((p) => ({ city: c.slug, product: p.slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, product } = await params;
  const c = getCity(city);
  const p = getProduct(product);
  if (!c || !p) return {};
  return {
    title: `${p.name} Manufacturer & Supplier in ${c.name}`,
    description: `Buy hardened and ground ${p.name.toLowerCase()} in ${c.name} from Autozone Tooling, Pune. Fast dispatch, custom sizes and technical support.`,
    alternates: { canonical: `/locations/${c.slug}/${p.slug}` },
  };
}

export default async function CityProductPage({ params }: Props) {
  const { city: citySlug, product: productSlug } = await params;
  const city = getCity(citySlug);
  const product = getProduct(productSlug);
  if (!city || !product) notFound();

  return (
    <>
      <PageBanner
        title={`${product.name} supplier in ${city.name}`}
        crumbs={[
          { href: "/", label: "Home" },
          { href: `/locations/${city.slug}`, label: city.name },
          { label: product.name },
        ]}
      />
      <CityProductIntro city={city} product={product} />
      <CityWhyUs city={city} product={product} />
      <CtaBand
        title={`Get a quote for delivery in ${city.name}`}
        whatsappMessage={`Hi, I need ${product.name} delivered to ${city.name}.`}
      />
    </>
  );
}