import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import ProductOverview from "@/components/ProductOverview";
import ProductTypes from "@/components/ProductTypes";
import ProductAngles from "@/components/ProductAngles";
import ProductSegments from "@/components/ProductSegments";
import ProductProcess from "@/components/ProductProcess";
import ProductFeatures from "@/components/ProductFeatures";
import ProductSpecs from "@/components/ProductSpecs";
import ProductChooseHelp from "@/components/ProductChooseHelp";
import RelatedProducts from "@/components/RelatedProducts";
import ProductSidebar from "@/components/ProductSidebar";
import CtaBand from "@/components/CtaBand";
import { getProduct, products } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { title: p.seoTitle, description: p.seoDescription, images: [p.image] },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <PageBanner
        title={product.name}
        subtitle={product.summary}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { label: product.name },
        ]}
      />
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_18rem]">
        <article className="min-w-0">
          <ProductOverview product={product} />
          <ProductTypes product={product} />
          <ProductAngles product={product} />
          <ProductSegments product={product} />
          <ProductProcess product={product} />
          <ProductFeatures product={product} />
          <ProductSpecs product={product} />
          <ProductChooseHelp product={product} />
          <RelatedProducts product={product} />
        </article>
        <ProductSidebar currentSlug={product.slug} />
      </div>
      <CtaBand whatsappMessage={`Hi, I'd like a quote for ${product.name}.`} />
    </>
  );
}