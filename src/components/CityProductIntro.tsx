import Image from "next/image";
import Link from "next/link";
import type { City } from "@/lib/cities";
import type { Product } from "@/lib/products";
import { waLink } from "@/lib/site";

export default function CityProductIntro({ city, product }: { city: City; product: Product }) {
  const whatsappUrl = waLink(`Hi, I need ${product.name} delivered to ${city.name}.`);

  return (
    <section className="py-16">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div className="prose-body">
          <p className="text-lg">
            Autozone Tooling supplies precision {product.name.toLowerCase()} to fabricators and
            manufacturers in {city.name}. Every tool is made at our Pune facility, hardened and ground
            for accurate bending and long service life, and dispatched quickly to your location.
          </p>
          <p>{product.intro[0]}</p>
          <p>{city.industries}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener" className="btn-primary">Enquire on WhatsApp</a>
            <Link href={`/products/${product.slug}`} className="btn-outline">Full product details</Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-steel">
          <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}