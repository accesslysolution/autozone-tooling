
import HeroCarousel from "@/components/HeroCarousel";
import ProductsCarousel from "@/components/ProductsCarousel";
import ClientsSection from "@/components/ClientsSection";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Hardened & Ground Steel",
    description:
      "Manufactured using premium alloy steels with induction hardening for maximum wear resistance.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "High Precision Accuracy",
    description:
      "Strict quality control ensures exact angular precision and consistent sheet metal bending results.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Global Machine Compatibility",
    description:
      "Compatible with Amada, Trumpf, LVD, Bystronic, and standard press brake tooling systems.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
];

const toolingCategories = [
  {
    title: "Press Brake Punches",
    description:
      "Precision-engineered straight, gooseneck, semi-gooseneck, and specialized punches for accurate sheet metal bending.",
    image:
      "/images/products/Straight Punch - 6mm (Front View).avif",
    linkText: "View Punches",
  },
  {
    title: "Dies & Multi V-Dies",
    description:
      "Single V, multi V, profile, and special dies designed for versatile bending applications and consistent forming accuracy.",
    image: "/images/products/Multi V Die.avif",
    linkText: "View Dies",
  },
  {
    title: "Hemming & Radius Tools",
    description:
      "Specialized hemming dies, radius tooling, and precision inserts for clean edges and complex sheet metal forming.",
    image: "/images/products/Hemming Die.avif",
    linkText: "View Special Tools",
  },
  {
    title: "Shear Blades & Accessories",
    description:
      "Precision-ground industrial shearing blades and tooling accessories engineered for reliable cutting performance.",
    image: "/images/products/Shearing Blades.avif",
    linkText: "View Blades",
  },
];

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

const advantages = [
  {
    title: "Advanced Metallurgy",
    description:
      "Using certified alloy steels treated with precision induction and vacuum hardening to withstand extreme tonnage.",
  },
  {
    title: "Custom Engineering",
    description:
      "Capability to manufacture complex multi-bend dies, door frame profiles, and custom radii from your drawings.",
  },
  {
    title: "Rigorous Inspection",
    description:
      "Strict multi-point quality checks ensuring absolute straightness and exact angular tolerances across full lengths.",
  },
  {
    title: "Reliable Support",
    description:
      "Dedicated technical consultation for tool selection, springback mitigation, and rapid quotation turnaround.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-slate-950 font-sans text-white">
      {/* ==========================================
          1. HERO CAROUSEL
      ========================================== */}
      <HeroCarousel />

      {/* ==========================================
          2. TRUST & FEATURES BAR
      ========================================== */}
      <section className="border-y border-slate-800 bg-slate-900 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-4"
              >
                <div className="shrink-0 rounded-lg bg-amber-500/10 p-3 text-amber-400">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          3. COMPANY OVERVIEW
      ========================================== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT SIDE - COMPANY INFORMATION */}
          <div className="space-y-6">
            {/* COMPANY LABEL */}
            <div className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo.png"
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

            {/* HEADING */}
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Pioneering Sheet Metal Tooling Excellence from
              Bhosari MIDC, Pune
            </h2>

            {/* DESCRIPTION */}
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

            {/* CTA */}
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

          {/* RIGHT SIDE - PRODUCT SHOWCASE */}
          <div className="space-y-4">
            {/* PRODUCT IMAGE GRID */}
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

            {/* COMPANY HIGHLIGHT STATS */}
            <div className="grid grid-cols-2 gap-4">
              {/* TOOLING SERIES */}
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

              {/* MATERIAL QUALITY */}
              <div className="flex flex-col justify-center rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-lg sm:p-6">
                <div className="font-display text-3xl font-bold text-amber-400">
                  100%
                </div>

                <h3 className="mt-2 text-sm font-semibold text-white">
                  Alloy Steel
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  EN8, EN31 &amp; H13 grades.
                </p>
              </div>
            </div>

            {/* PRODUCT SHOWCASE LINK */}
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

      {/* ==========================================
          4. PRODUCTS SHOWCASE
      ========================================== */}
      <section className="border-y border-slate-800 bg-slate-900/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductsCarousel />
        </div>
      </section>

      {/* ==========================================
          5. CORE TOOLING CATEGORIES
      ========================================== */}
      <section className="mx-auto max-w-7xl space-y-12 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Specialized Expertise
          </span>

          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Core Tooling Categories
          </h2>

          <p className="text-base text-slate-400">
            Engineered for versatility and heavy-duty
            industrial fabrication across Pune and India.
          </p>
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {toolingCategories.map((category) => (
            <article
              key={category.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl"
            >
              {/* PRODUCT IMAGE */}
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

              {/* CATEGORY INFORMATION */}
              <div className="flex flex-1 flex-col justify-between gap-5 p-6">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {category.description}
                  </p>
                </div>

                {/* CATEGORY LINK */}
                <Link
                  href="/products"
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

      {/* ==========================================
          6. WHY CHOOSE US
      ========================================== */}
      <section className="border-y border-slate-800 bg-slate-900/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* SECTION HEADER */}
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-500">
              The Autozone Advantage
            </span>

            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Fabrication Shops Choose Us
            </h2>

            <p className="text-base text-slate-400">
              We combine metallurgical expertise with
              responsive customer support to keep your
              operations running smoothly.
            </p>
          </div>

          {/* ADVANTAGE CARDS */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 font-bold text-amber-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12l4 4L19 6"
                    />
                  </svg>
                </div>

                <h3 className="font-display text-lg font-bold text-white">
                  {advantage.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-400">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          7. OUR VALUED CLIENTS
      ========================================== */}
      <ClientsSection />

      {/* ==========================================
          8. MISSION & VISION
      ========================================== */}
      <section className="mx-auto max-w-7xl space-y-12 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Our Driving Principles
          </span>

          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Mission &amp; Vision
          </h2>
        </div>

        {/* MISSION & VISION CARDS */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* MISSION */}
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl sm:p-10">
            <h3 className="font-display text-2xl font-bold text-amber-400">
              Our Mission
            </h3>

            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              To empower sheet metal fabrication workshops
              and heavy industries across India with
              precision-engineered, highly durable, and
              reliable press brake tooling and shear blades
              that maximize operational efficiency, minimize
              downtime, and ensure flawless bending accuracy.
            </p>
          </div>

          {/* VISION */}
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl sm:p-10">
            <h3 className="font-display text-2xl font-bold text-amber-400">
              Our Vision
            </h3>

            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              To become the most trusted, innovative, and
              preferred manufacturer of specialized industrial
              tooling solutions globally, recognized for
              uncompromising metallurgical quality, advanced
              engineering craftsmanship, and long-term
              customer partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          9. CALL TO ACTION
      ========================================== */}
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
    </main>
  );
}
