
import Image from "next/image";
import Link from "next/link";

const overviewProducts = [
  {
    title: "Gooseneck Punch",
    image: "/images/products/Gooseneck Punch.avif",
  },
  {
    title: "Multi V Die",
    image: "/images/products/Multi V Die.avif",
  },
  {
    title: "Shearing Blades",
    image: "/images/products/Shearing Blades.avif",
  },
  {
    title: "Hemming Die",
    image: "/images/products/Hemming Die.avif",
  },
];

export default function HomeCompanyOverview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* LEFT - COMPANY INFORMATION */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden">
              <Image
                src="/images/logo.avif"
                alt="Autozone Tooling Logo"
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>

            <span className="text-sm font-semibold uppercase tracking-wider text-amber-500">
              Company Overview
            </span>
          </div>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Pioneering Sheet Metal Tooling Excellence from
            Bhosari MIDC, Pune
          </h2>

          <p className="text-base leading-relaxed text-slate-300">
            Operating out of the industrial core of{" "}
            <strong className="text-white">
              Bhosari MIDC, Pune
            </strong>
            , Autozone Tooling has established itself as a
            premier name in precision engineering and sheet
            metal fabrication components. We specialize in
            designing and manufacturing hardened press brake
            punches, custom dies, hemming tools, radius
            inserts, and heavy-duty shear blades.
          </p>

          <p className="text-base leading-relaxed text-slate-300">
            Our advanced workshop combines rigorous
            metallurgical testing with modern CNC grinding
            technology, ensuring that every standard and
            custom tool we produce delivers absolute
            straightness, micron-level precision, and
            long-lasting durability under intense
            shop-floor conditions.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 transition-colors hover:text-amber-400"
            >
              Discover our full story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* RIGHT - PRODUCT SHOWCASE */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {overviewProducts.map((product) => (
              <div
                key={product.title}
                className="group relative aspect-square overflow-hidden rounded-xl border border-slate-800 bg-[#f1f3f5] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 25vw"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent px-4 pb-4 pt-12">
                  <span className="text-sm font-semibold text-white">
                    {product.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* HIGHLIGHT STATS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-center rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-lg sm:p-6">
              <div className="font-display text-3xl font-bold text-amber-400">
                22+
              </div>

              <h3 className="mt-2 text-sm font-semibold text-white">
                Tooling Series
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                Standard &amp; custom profiles.
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-lg sm:p-6">
              <div className="font-display text-3xl font-bold text-amber-400">
                100%
              </div>

              <h3 className="mt-2 text-sm font-semibold text-white">
                Alloy Steel
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                42CrMo4, EN19, D2 (Indian/Imported), EN31 &amp; C45.
              </p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-amber-400"
            >
              Explore Our Complete Tooling Range
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
