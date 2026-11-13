
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="bg-gradient-to-r from-amber-600 to-amber-500 py-20 text-slate-950">
      <div className="mx-auto max-w-7xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Need Custom Press Brake Tooling or Shear Blades?
        </h2>

        <p className="mx-auto max-w-2xl text-lg font-medium text-slate-900">
          Share your bending requirements, technical
          drawings, or machine specifications with our
          engineering team for a quick quote.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="rounded-md bg-slate-950 px-8 py-3.5 font-semibold text-white shadow-xl transition-all duration-200 hover:bg-slate-900"
          >
            Request a Custom Quote
          </Link>

          <Link
            href="/products"
            className="rounded-md border border-slate-950/20 bg-white/20 px-8 py-3.5 font-semibold text-slate-950 backdrop-blur-sm transition-all hover:bg-white/30"
          >
            Explore Full Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
