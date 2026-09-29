import Link from "next/link";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function ProductSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <aside className="lg:sticky lg:top-32 lg:self-start">
      <nav aria-label="All products" className="border border-oxide/15 bg-white">
        <p className="border-b border-oxide/15 px-5 py-3 font-display text-xl font-semibold">All products</p>
        <ul className="py-2">
          {products.map((x) => {
            const current = x.slug === currentSlug;
            return (
              <li key={x.slug}>
                <Link
                  href={`/products/${x.slug}`}
                  aria-current={current ? "page" : undefined}
                  className={`block px-5 py-2 text-sm ${
                    current ? "border-l-2 border-temper bg-steel/50 font-semibold" : "hover:bg-steel/40"
                  }`}
                >
                  {x.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-6 bg-oxide p-5 text-white">
        <p className="font-display text-xl font-semibold">Need it fast?</p>
        <p className="mt-2 text-sm text-steel/80">Standard sizes ship from stock. Call us to check availability.</p>
        <a href={site.phones[0].href} className="btn-straw mt-4 w-full">{site.phones[0].label}</a>
      </div>
    </aside>
  );
}