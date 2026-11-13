
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
}

interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  background: string;
  accent: string;
  products: Product[];
}

const products: Product[] = [
  // ==========================================
  // PRESS BRAKE PUNCHES
  // ==========================================
  {
    id: 1,
    name: "Gooseneck Punch",
    category: "Press Brake Punches",
    description:
      "Precision-engineered gooseneck punch for complex bending profiles and return flange applications.",
    image: "/images/products/Gooseneck Punch.avif",
  },
  {
    id: 2,
    name: "Semi Gooseneck Punch",
    category: "Press Brake Punches",
    description:
      "High-accuracy semi-gooseneck punch designed for specialized sheet metal bending operations.",
    image: "/images/products/Semi Gooseneck Punch.avif",
  },
  {
    id: 3,
    name: "Stock Semi Gooseneck Punch",
    category: "Press Brake Punches",
    description:
      "Reliable semi-gooseneck tooling designed for repeatable bending accuracy and industrial performance.",
    image:
      "/images/products/Stock Semi Gooseneck Punch.avif",
  },
  {
    id: 4,
    name: "Straight Punch – 6mm Front View",
    category: "Press Brake Punches",
    description:
      "Precision-machined straight punch with a 6mm profile for accurate sheet metal forming.",
    image:
      "/images/products/Straight Punch - 6mm (Front View).avif",
  },
  {
    id: 5,
    name: "Straight Punch – 6mm Side View",
    category: "Press Brake Punches",
    description:
      "Durable straight punch tooling engineered for consistent industrial bending performance.",
    image:
      "/images/products/Straight Punch - 6mm SideView).avif",
  },

  // ==========================================
  // PRESS BRAKE DIES
  // ==========================================
  {
    id: 6,
    name: "Single V Die",
    category: "Press Brake Dies",
    description:
      "Precision-machined single V die designed for consistent angular bending and reliable sheet metal forming.",
    image: "/images/products/Single V Die.avif",
  },
  {
    id: 7,
    name: "Multi V Die",
    category: "Press Brake Dies",
    description:
      "Versatile multi-opening V die for different sheet thicknesses and flexible bending applications.",
    image: "/images/products/Multi V Die.avif",
  },
  {
    id: 8,
    name: "Multi V Die – Adjustable Setup",
    category: "Press Brake Dies",
    description:
      "Multi V die assembly designed for flexible tooling configurations and efficient press brake operations.",
    image: "/images/products/Multi V Die (2).avif",
  },
  {
    id: 9,
    name: "Special Die",
    category: "Press Brake Dies",
    description:
      "Custom-engineered special die for complex sheet metal profiles and demanding fabrication requirements.",
    image: "/images/products/Special Die.avif",
  },
  {
    id: 10,
    name: "Special Die – Side View",
    category: "Press Brake Dies",
    description:
      "Specialized die geometry designed for accurate custom bending and forming applications.",
    image:
      "/images/products/Special Die (Side View).avif",
  },
  {
    id: 11,
    name: "Profile Die",
    category: "Press Brake Dies",
    description:
      "Precision profile die developed for forming specialized industrial sheet metal sections.",
    image: "/images/products/Profile Die.avif",
  },
  {
    id: 12,
    name: "Rolla Die",
    category: "Press Brake Dies",
    description:
      "Advanced rolling die tooling designed to reduce surface marking during suitable bending operations.",
    image: "/images/products/Rolla Die.avif",
  },

  // ==========================================
  // HEMMING & SPECIALIZED FORMING
  // ==========================================
  {
    id: 13,
    name: "Hemming Die",
    category: "Hemming & Specialized Forming",
    description:
      "High-performance hemming die engineered for clean edges and precise sheet metal folding.",
    image: "/images/products/Hemming Die.avif",
  },
  {
    id: 14,
    name: "Profile Type Die Punch",
    category: "Hemming & Specialized Forming",
    description:
      "Specialized punch and die profile for accurate custom bending geometries.",
    image:
      "/images/products/Profile Type Die Punch.avif",
  },
  {
    id: 15,
    name: "Special Die Punch",
    category: "Hemming & Specialized Forming",
    description:
      "Custom punch and die tooling designed for complex sheet metal forming applications.",
    image: "/images/products/Special Die Punch.avif",
  },
  {
    id: 16,
    name: "2-V Die & Setup",
    category: "Hemming & Specialized Forming",
    description:
      "Precision V-die setup designed for accurate forming, alignment, and consistent bending operations.",
    image: "/images/products/2-V Die & Setup.avif",
  },

  // ==========================================
  // HOLDERS & ACCESSORIES
  // ==========================================
  {
    id: 17,
    name: "Common Punch Holders & Inserts",
    category: "Tool Holders & Accessories",
    description:
      "Durable punch holders and inserts for secure tooling positioning and efficient machine setups.",
    image:
      "/images/products/Common Punch Holders & Inserts.avif",
  },
  {
    id: 18,
    name: "Punch Clamps",
    category: "Tool Holders & Accessories",
    description:
      "Reliable punch clamping solutions for secure tool retention and accurate alignment.",
    image: "/images/products/Punch Clamps.avif",
  },
  {
    id: 19,
    name: "Back Gauge",
    category: "Tool Holders & Accessories",
    description:
      "Precision back gauge component for repeatable sheet positioning during press brake operations.",
    image: "/images/products/Back Gauge.avif",
  },

  // ==========================================
  // SHEARING BLADES
  // ==========================================
  {
    id: 20,
    name: "Industrial Shearing Blades",
    category: "Shearing Blades",
    description:
      "Precision-ground industrial shearing blades engineered for clean cutting and dependable wear resistance.",
    image: "/images/products/Shearing Blades.avif",
  },

  // ==========================================
  // TURRET PUNCHING
  // ==========================================
  {
    id: 21,
    name: "Turret Punches",
    category: "Turret Punching Tools",
    description:
      "Precision turret punching tools for accurate sheet metal punching and efficient industrial production.",
    image: "/images/products/Turret Punches.avif",
  },
  {
    id: 22,
    name: "Variable V Type Inserts",
    category: "Turret Punching Tools",
    description:
      "Versatile V-type inserts for adjustable bending configurations and precision forming applications.",
    image:
      "/images/products/Variable V Type Inserts.avif",
  },
];

// ==========================================
// CATEGORY CONFIGURATION
// ==========================================

const categoryConfig = [
  {
    id: "punches",
    title: "Press Brake Punches",
    subtitle: "01 / PRECISION PUNCHING",
    description:
      "Explore our range of straight, gooseneck, and semi-gooseneck punches engineered for precise bending, complex profiles, and consistent performance.",
    category: "Press Brake Punches",
    background: "bg-[#f4f7fb]",
    accent: "bg-blue-600",
  },
  {
    id: "dies",
    title: "Press Brake Dies",
    subtitle: "02 / INDUSTRIAL BENDING",
    description:
      "From single V dies to specialized multi V and profile dies, our tooling solutions support demanding fabrication requirements.",
    category: "Press Brake Dies",
    background: "bg-[#edf4f7]",
    accent: "bg-cyan-700",
  },
  {
    id: "forming",
    title: "Hemming & Specialized Forming Tools",
    subtitle: "03 / CUSTOM FORMING",
    description:
      "Advanced hemming and specialized tooling designed for clean finishes, complex geometries, and accurate sheet metal forming.",
    category: "Hemming & Specialized Forming",
    background: "bg-[#f7f4ed]",
    accent: "bg-amber-600",
  },
  {
    id: "accessories",
    title: "Tool Holders & Machine Accessories",
    subtitle: "04 / MACHINE ACCESSORIES",
    description:
      "Reliable clamping, positioning, and tooling support components for efficient and secure press brake operations.",
    category: "Tool Holders & Accessories",
    background: "bg-[#f1f3f8]",
    accent: "bg-indigo-600",
  },
  {
    id: "blades",
    title: "Industrial Shearing Blades",
    subtitle: "05 / PRECISION CUTTING",
    description:
      "Industrial-grade shearing blades engineered for clean cuts, dependable wear resistance, and long-lasting performance.",
    category: "Shearing Blades",
    background: "bg-[#f1f7f3]",
    accent: "bg-emerald-700",
  },
  {
    id: "turret",
    title: "Turret Punching & Precision Inserts",
    subtitle: "06 / SPECIALIZED TOOLING",
    description:
      "Precision turret punching tools and specialized inserts supporting accurate and efficient sheet metal production.",
    category: "Turret Punching Tools",
    background: "bg-[#f5f1f8]",
    accent: "bg-violet-700",
  },
];

const categories: ProductCategory[] =
  categoryConfig.map((config) => ({
    id: config.id,
    title: config.title,
    subtitle: config.subtitle,
    description: config.description,
    background: config.background,
    accent: config.accent,
    products: products.filter(
      (product) => product.category === config.category
    ),
  }));

// ==========================================
// PRODUCT CARD
// ==========================================

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl">
      {/* PRODUCT IMAGE */}
      <div className="relative aspect-square overflow-hidden bg-[#f8fafc]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
        />

        {/* CATEGORY LABEL */}
        <div className="absolute left-4 top-4 rounded-md border border-slate-200 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm">
          {product.category}
        </div>
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-amber-700">
          {product.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 transition-colors hover:text-amber-600"
          >
            Enquire Now

            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
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

          <span className="text-xs font-medium text-slate-400">
            Product {String(product.id).padStart(2, "0")}
          </span>
        </div>
      </div>
    </article>
  );
}

// ==========================================
// PRODUCTS PAGE
// ==========================================

export default function ProductsPage() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const featuredProducts = [
    products[0],
    products[5],
    products[6],
    products[12],
    products[16],
    products[19],
    products[20],
  ];

  // FEATURED CAROUSEL AUTO SCROLL
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const container = scrollRef.current;

      if (!container) return;

      const { scrollLeft, scrollWidth, clientWidth } =
        container;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: 340,
          behavior: "smooth",
        });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -340,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 340,
      behavior: "smooth",
    });
  };

  const scrollToCategory = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 font-sans">
      {/* ==========================================
          1. PAGE HEADER
      ========================================== */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        {/* DECORATIVE GLOW */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Autozone Tooling Product Catalog
            </div>

            <h1 className="font-heading text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Precision Tooling
              <span className="mt-2 block text-amber-400">
                Built for Performance.
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
              Explore our complete range of precision-engineered
              press brake punches, bending dies, hemming tools,
              shearing blades, and industrial tooling accessories.
            </p>

            {/* HEADER STATS */}
            <div className="flex flex-wrap gap-8 border-t border-slate-800 pt-7">
              <div>
                <p className="font-heading text-3xl font-bold text-white">
                  22
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                  Products
                </p>
              </div>

              <div>
                <p className="font-heading text-3xl font-bold text-white">
                  06
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                  Categories
                </p>
              </div>

              <div>
                <p className="font-heading text-3xl font-bold text-white">
                  CNC
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                  Precision Tooling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. FEATURED PRODUCTS
      ========================================== */}
      <section className="border-b border-slate-800 bg-slate-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADER */}
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                Featured Range
              </span>

              <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Featured Industrial Tooling
              </h2>

              <p className="mt-4 max-w-2xl text-base text-slate-400">
                Discover selected tooling solutions from our
                precision engineering portfolio.
              </p>
            </div>

            {/* CAROUSEL CONTROLS */}
            <div className="hidden shrink-0 gap-3 sm:flex">
              <button
                type="button"
                onClick={scrollLeft}
                aria-label="Previous products"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-white transition-all hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={scrollRight}
                aria-label="Next products"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-white transition-all hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* FEATURED CAROUSEL */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="w-[280px] shrink-0 snap-start sm:w-[330px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          3. CATEGORY NAVIGATION
      ========================================== */}
      <section className="border-b border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              Browse Our Catalog
            </span>

            <h2 className="mt-2 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
              Explore by Category
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => scrollToCategory(category.id)}
                className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:bg-amber-50"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${category.accent}`}
                />

                {category.title}

                <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-bold text-slate-600">
                  {category.products.length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          4. CATEGORIZED PRODUCT SECTIONS
      ========================================== */}
      {categories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`${category.background} scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
        >
          <div className="mx-auto max-w-7xl">
            {/* CATEGORY HEADER */}
            <div className="mb-12 flex flex-col justify-between gap-6 border-b border-slate-300/70 pb-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                {/* CATEGORY LABEL */}
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={`h-1 w-10 rounded-full ${category.accent}`}
                  />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 sm:text-sm">
                    {category.subtitle}
                  </span>
                </div>

                {/* LARGE CATEGORY HEADING */}
                <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  {category.title}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  {category.description}
                </p>
              </div>

              {/* CATEGORY COUNT */}
              <div className="flex shrink-0 items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <span className="font-heading text-2xl font-bold text-slate-900">
                    {String(category.products.length).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Products
                  </p>

                  <p className="text-xs text-slate-500">
                    Category {String(categoryIndex + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

            {/* CATEGORY FOOTER */}
            <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-slate-300/70 pt-7 sm:flex-row sm:items-center">
              <p className="text-sm text-slate-600">
                Need a custom configuration or specialized
                tooling for your machine?
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800"
              >
                Request Custom Tooling

                <svg
                  className="h-4 w-4"
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
          </div>
        </section>
      ))}

      {/* ==========================================
          5. CUSTOM TOOLING CTA
      ========================================== */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl space-y-7 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Custom Engineering Solutions
            </span>

            <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Need Tooling Built to
              <span className="block text-amber-400">
                Your Specifications?
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Share your technical drawings, machine
              specifications, or custom bending requirements
              with our engineering team for a tailored tooling
              solution.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-3">
              <Link
                href="/contact"
                className="rounded-lg bg-amber-500 px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:bg-amber-400"
              >
                Request a Quote
              </Link>

              <Link
                href="/about"
                className="rounded-lg border border-slate-700 bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-amber-500"
              >
                About Autozone Tooling
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
