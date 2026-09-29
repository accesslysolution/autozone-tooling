import type { Product } from "@/lib/products";

export default function ProductAngles({ product }: { product: Product }) {
  if (!product.angles) return null;
  return (
    <section className="mt-16">
      <h2 className="text-3xl">Available angles and profiles</h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {product.angles.map((a) => (
          <li key={a} className="border border-oxide/20 bg-white px-3 py-1.5 font-display text-lg font-semibold">
            {a}
          </li>
        ))}
      </ul>
    </section>
  );
}