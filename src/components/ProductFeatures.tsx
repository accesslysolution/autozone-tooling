import type { Product } from "@/lib/products";
import BulletList from "./BulletList";

export default function ProductFeatures({ product }: { product: Product }) {
  return (
    <section className="mt-16 grid gap-12 md:grid-cols-2">
      <div>
        <h2 className="text-3xl">Features</h2>
        <BulletList items={product.features} />
      </div>
      {product.bestFor && (
        <div>
          <h2 className="text-3xl">Best for</h2>
          <BulletList items={product.bestFor} color="temper" />
        </div>
      )}
    </section>
  );
}