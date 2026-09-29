import type { Product } from "@/lib/products";

export default function ProductTypes({ product }: { product: Product }) {
  if (!product.types) return null;
  return (
    <section className="mt-16">
      <h2 className="text-3xl">{product.typesHeading}</h2>
      <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {product.types.map((t) => (
          <div key={t.name} className="border-t-2 border-oxide pt-3">
            <dt className="font-semibold">{t.name}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-oxide/75">{t.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}