import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductChooseHelp({ product }: { product: Product }) {
  if (!product.chooseList) return null;
  return (
    <section className="mt-16 bg-steel/60 p-8">
      <h2 className="text-3xl">Not sure which one to choose?</h2>
      <p className="mt-3 text-oxide/80">Send us these details and we&apos;ll recommend the right tool:</p>
      <ul className="mt-4 list-disc space-y-1 pl-5">
        {product.chooseList.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <Link href="/contact" className="btn-primary mt-6">Send your requirement</Link>
    </section>
  );
}