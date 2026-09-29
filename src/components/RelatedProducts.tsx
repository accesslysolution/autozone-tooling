import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { getProduct } from "@/lib/products";

export default function RelatedProducts({ product }: { product: Product }) {
  const related = product.related.map(getProduct).filter((x): x is Product => Boolean(x));
  if (related.length === 0) return null;
  return (
    <section className="mt-16">
      <h2 className="text-3xl">Often ordered with</h2>
      <ul className="mt-6 grid gap-6 sm:grid-cols-3">
        {related.map((r) => (
          <li key={r.slug}>
            <Link href={`/products/${r.slug}`} className="group block">
              <span className="relative block aspect-[4/3] overflow-hidden bg-steel">
                <Image src={r.image} alt="" fill sizes="(min-width: 640px) 25vw, 100vw" className="object-cover" />
              </span>
              <span className="mt-3 block font-display text-xl font-semibold group-hover:text-temper">
                {r.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}