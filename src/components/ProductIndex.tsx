import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function ProductIndex({ basePath = "/products" }: { basePath?: string }) {
  return (
    <ul className="border-t border-oxide/15">
      {products.map((p) => (
        <li key={p.slug} className="border-b border-oxide/15">
          <Link
            href={`${basePath}/${p.slug}`}
            className="group grid grid-cols-[4.5rem_1fr] items-center gap-5 py-4 sm:grid-cols-[5.5rem_1fr_auto]"
          >
            <span className="relative block aspect-square overflow-hidden bg-steel">
              <Image src={p.image} alt="" fill sizes="88px" className="object-cover" />
            </span>
            <span>
              <span className="block font-display text-2xl font-semibold group-hover:text-temper">{p.name}</span>
              <span className="mt-1 block text-sm text-gauge">{p.summary}</span>
            </span>
            <span className="hidden text-sm font-semibold text-temper group-hover:underline sm:block">
              View details
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}