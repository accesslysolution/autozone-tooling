
import Image from "next/image";
import Link from "next/link";

const toolingCategories = [
  {
    title: "Press Brake Punches",
    description:
      "Precision-engineered straight, gooseneck, semi-gooseneck, and specialized punches for accurate sheet metal bending.",
    image:
      "/images/products/Straight Punch - 6mm (Front View).avif",
    linkText: "View Punches",
    href: "/products#punches",
  },
  {
    title: "Dies & Multi V-Dies",
    description:
      "Single V, multi V, profile, and special dies designed for versatile bending applications and consistent forming accuracy.",
    image: "/images/products/Multi V Die.avif",
    linkText: "View Dies",
    href: "/products#dies",
  },
  {
    title: "Hemming & Radius Tools",
    description:
      "Specialized hemming dies, radius tooling, and precision inserts for clean edges and complex sheet metal forming.",
    image: "/images/products/Hemming Die.avif",
    linkText: "View Special Tools",
    href: "/products#forming",
  },
  {
    title: "Shear Blades & Accessories",
    description:
      "Precision-ground industrial shearing blades and tooling accessories engineered for reliable cutting performance.",
    image: "/images/products/Shearing Blades.avif",
    linkText: "View Blades",
    href: "/products#blades",
  },
];

export default function HomeToolingCategories() {
  return (
    <section className="mx-auto max-w-7xl space-y-12 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-amber-500">
          Specialized Expertise
        </span>

        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Our Core Tooling Categories
        </h2>

        <p className="text-base text-slate-400">
          Engineered for versatility and heavy-duty industrial
          fabrication across Pune and India.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {toolingCategories.map((category) => (
          <article
            key={category.title}
            className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-[#f1f3f5]">
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-950/10 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col justify-between gap-5 p-6">
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {category.description}
                </p>
              </div>

              <Link
                href={category.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 transition-colors hover:text-amber-400"
              >
                {category.linkText}

                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
