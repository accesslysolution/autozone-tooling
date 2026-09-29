import type { Product } from "@/lib/products";
import SpecTable from "./SpecTable";

export default function ProductSegments({ product }: { product: Product }) {
  if (!product.segments) return null;
  return (
    <section className="mt-16">
      <h2 className="text-3xl">Sectionalised sets</h2>
      <p className="mt-3 max-w-[68ch] text-oxide/80">
        Punches come in sectionalised sets, so you can build the exact working length you need. Need a
        different combination? We&apos;ll make it for you.
      </p>
      <div className="mt-6">
        <SpecTable rows={product.segments} head={["Set length", "Segments (mm)"]} caption="Punch segment sets" />
      </div>
    </section>
  );
}