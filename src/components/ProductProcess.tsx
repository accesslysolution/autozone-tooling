import type { Product } from "@/lib/products";

export default function ProductProcess({ product }: { product: Product }) {
  if (!product.process) return null;
  return (
    <section className="mt-16">
      <h2 className="text-3xl">How we develop a custom tool</h2>
      <ol className="mt-6 space-y-5">
        {product.process.map((s, i) => (
          <li key={s.name} className="grid grid-cols-[2.5rem_1fr] gap-4">
            <span className="font-display text-3xl font-bold text-temper">{i + 1}</span>
            <span>
              <span className="block font-semibold">{s.name}</span>
              <span className="text-sm text-oxide/75">{s.text}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}