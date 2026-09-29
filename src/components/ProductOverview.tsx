import Image from "next/image";
import type { Product } from "@/lib/products";
import { site, waLink } from "@/lib/site";

export default function ProductOverview({ product }: { product: Product }) {
  const whatsappUrl = waLink(`Hi, I'd like a quote for ${product.name}.`);

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="relative aspect-[4/3] overflow-hidden bg-steel">
        <Image src={product.image} alt={product.name} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" priority />
      </div>
      <div className="prose-body">
        {product.intro.map((t) => (
          <p key={t}>{t}</p>
        ))}
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener" className="btn-primary">Enquire on WhatsApp</a>
          <a href={site.phones[0].href} className="btn-outline">Call {site.phones[0].label}</a>
        </div>
      </div>
    </div>
  );
}