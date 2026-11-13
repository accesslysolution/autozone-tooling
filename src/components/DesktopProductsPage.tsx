
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
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
  productIds: number[];
}

/* ==========================================
   PRODUCT DATA
========================================== */

const products: Product[] = [
  {
    id: 1,
    name: "Gooseneck Punch",
    description:
      "Precision-engineered gooseneck punch for complex bending profiles and return flange applications.",
    image: "/images/products/Gooseneck Punch.avif",
  },
  {
    id: 2,
    name: "Semi Gooseneck Punch",
    description:
      "High-accuracy semi-gooseneck punch designed for specialized sheet metal bending operations.",
    image: "/images/products/Semi Gooseneck Punch.avif",
  },
  {
    id: 3,
    name: "Stock Semi Gooseneck Punch",
    description:
      "Reliable semi-gooseneck tooling designed for repeatable bending accuracy.",
    image:
      "/images/products/Stock Semi Gooseneck Punch.avif",
  },
  {
    id: 4,
    name: "Straight Punch – 6mm Front View",
    description:
      "Precision-machined straight punch with a 6mm profile for accurate sheet metal forming.",
    image:
      "/images/products/Straight Punch - 6mm (Front View).avif",
  },
  {
    id: 5,
    name: "Straight Punch – 6mm Side View",
    description:
      "Durable straight punch tooling engineered for consistent industrial bending.",
    image:
      "/images/products/Straight Punch - 6mm SideView).avif",
  },
  {
    id: 6,
    name: "Single V Die",
    description:
      "Precision-machined single V die for consistent angular bending.",
    image: "/images/products/Single V Die.avif",
  },
  {
    id: 7,
    name: "Multi V Die",
    description:
      "Versatile multi-opening V die for different sheet thicknesses.",
    image: "/images/products/Multi V Die.avif",
  },
  {
    id: 8,
    name: "Multi V Die – Adjustable Setup",
    description:
      "Multi V die assembly for flexible tooling configurations.",
    image: "/images/products/Multi V Die (2).avif",
  },
  {
    id: 9,
    name: "Special Die",
    description:
      "Custom-engineered die for complex sheet metal profiles.",
    image: "/images/products/Special Die.avif",
  },
  {
    id: 10,
    name: "Special Die – Side View",
    description:
      "Specialized die geometry for custom bending applications.",
    image: "/images/products/Special Die (Side View).avif",
  },
  {
    id: 11,
    name: "Profile Die",
    description:
      "Precision profile die for specialized sheet metal sections.",
    image: "/images/products/Profile Die.avif",
  },
  {
    id: 12,
    name: "Rolla Die",
    description:
      "Rolling die tooling designed to reduce surface marking.",
    image: "/images/products/Rolla Die.avif",
  },
  {
    id: 13,
    name: "Hemming Die",
    description:
      "High-performance hemming die for clean edges and precise folding.",
    image: "/images/products/Hemming Die.avif",
  },
  {
    id: 14,
    name: "Profile Type Die Punch",
    description:
      "Specialized punch and die profile for custom bending geometries.",
    image:
      "/images/products/Profile Type Die Punch.avif",
  },
  {
    id: 15,
    name: "Special Die Punch",
    description:
      "Custom punch and die tooling for complex forming applications.",
    image: "/images/products/Special Die Punch.avif",
  },
  {
    id: 16,
    name: "2-V Die & Setup",
    description:
      "Precision V-die setup for accurate forming and alignment.",
    image: "/images/products/2-V Die & Setup.avif",
  },
  {
    id: 17,
    name: "Common Punch Holders & Inserts",
    description:
      "Durable holders and inserts for secure tooling positioning.",
    image:
      "/images/products/Common Punch Holders & Inserts.avif",
  },
  {
    id: 18,
    name: "Punch Clamps",
    description:
      "Reliable clamping solutions for secure tool retention.",
    image: "/images/products/Punch Clamps.avif",
  },
  {
    id: 19,
    name: "Back Gauge",
    description:
      "Precision back gauge for repeatable sheet positioning.",
    image: "/images/products/Back Gauge.avif",
  },
  {
    id: 20,
    name: "Industrial Shearing Blades",
    description:
      "Precision-ground blades engineered for clean industrial cutting.",
    image: "/images/products/Shearing Blades.avif",
  },
  {
    id: 21,
    name: "Turret Punches",
    description:
      "Precision turret punching tools for efficient sheet metal production.",
    image: "/images/products/Turret Punches.avif",
  },
  {
    id: 22,
    name: "Variable V Type Inserts",
    description:
      "Versatile V-type inserts for adjustable bending configurations.",
    image:
      "/images/products/Variable V Type Inserts.avif",
  },
];

/* ==========================================
   CATEGORY DATA
========================================== */

const categories: ProductCategory[] = [
  {
    id: "press-brake-tool",
    title: "Press Brake Tool",
    subtitle: "01 / GENERAL TOOLING",
    description:
      "Precision tooling solutions for reliable CNC press brake operations and industrial sheet metal fabrication.",
    background: "bg-[#f4f7fb]",
    accent: "bg-blue-600",
    productIds: [21],
  },
  {
    id: "press-brake-punch",
    title: "Press Brake Punch",
    subtitle: "02 / PRECISION PUNCHES",
    description:
      "Straight, gooseneck and semi-gooseneck punches for demanding bending applications.",
    background: "bg-[#edf4f7]",
    accent: "bg-cyan-700",
    productIds: [1, 2, 3, 4, 5],
  },
  {
    id: "press-brake-dies",
    title: "Press Brake Dies",
    subtitle: "03 / PRECISION DIES",
    description:
      "Engineered bending dies designed for consistent forming accuracy and demanding fabrication requirements.",
    background: "bg-[#f7f4ed]",
    accent: "bg-amber-600",
    productIds: [11, 12],
  },
  {
    id: "radius-tools-holder",
    title: "Radius Tools Holder",
    subtitle: "04 / TOOL HOLDING",
    description:
      "Tool holding solutions supporting secure positioning, alignment and specialized bending setups.",
    background: "bg-[#f1f3f8]",
    accent: "bg-indigo-600",
    productIds: [17, 18],
  },
  {
    id: "radius-tools-insert",
    title: "Radius Tools Insert",
    subtitle: "05 / PRECISION INSERTS",
    description:
      "Specialized inserts for controlled bending profiles and adaptable tooling configurations.",
    background: "bg-[#f1f7f3]",
    accent: "bg-emerald-700",
    productIds: [22],
  },
  {
    id: "press-brake-hemming-tools",
    title: "Press Brake Hemming Tools",
    subtitle: "06 / HEMMING SOLUTIONS",
    description:
      "Precision hemming tools designed for folded edges, clean finishes and reliable sheet metal forming.",
    background: "bg-[#f5f1f8]",
    accent: "bg-violet-700",
    productIds: [13],
  },
  {
    id: "self-centering-2v-die",
    title: "Self Centering 2V Die",
    subtitle: "07 / V-DIE SYSTEMS",
    description:
      "Explore 2-V die configurations for accurate alignment and consistent bending operations.",
    background: "bg-[#f5f7ed]",
    accent: "bg-lime-700",
    productIds: [16],
  },
  {
    id: "shear-blade",
    title: "Shear Blade",
    subtitle: "08 / PRECISION CUTTING",
    description:
      "Industrial shearing blades engineered for clean cuts and dependable performance.",
    background: "bg-[#eef6f5]",
    accent: "bg-teal-700",
    productIds: [20],
  },
  {
    id: "joggle-tool-insert",
    title: "Joggle Tool & Insert",
    subtitle: "09 / SPECIALIZED FORMING",
    description:
      "Specialized tooling for offset forming and custom sheet metal profiles.",
    background: "bg-[#f8f3ef]",
    accent: "bg-orange-700",
    productIds: [],
  },
  {
    id: "amada-self-centering-1v-die",
    title: "Amada Type Self Centering 1V Die",
    subtitle: "10 / MACHINE-SPECIFIC TOOLING",
    description:
      "Machine-specific V-die tooling solutions for compatible press brake systems.",
    background: "bg-[#f0f4fa]",
    accent: "bg-sky-700",
    productIds: [],
  },
  {
    id: "amada-self-centering-1v-die-holder",
    title: "Amada Type Self Centering 1V Die Holder",
    subtitle: "11 / DIE HOLDING SYSTEMS",
    description:
      "Specialized die holding configurations for secure tooling installation and alignment.",
    background: "bg-[#f5f3f9]",
    accent: "bg-purple-700",
    productIds: [],
  },
  {
    id: "single-v-die",
    title: "Single V Die",
    subtitle: "12 / SINGLE V TOOLING",
    description:
      "Single V dies engineered for accurate angular bending and consistent production results.",
    background: "bg-[#f1f7f3]",
    accent: "bg-green-700",
    productIds: [6],
  },
  {
    id: "multi-v-die",
    title: "Multi V Die",
    subtitle: "13 / MULTI-OPENING DIES",
    description:
      "Versatile multi-opening dies for flexible bending operations and varying material thicknesses.",
    background: "bg-[#f7f5ed]",
    accent: "bg-yellow-700",
    productIds: [7, 8],
  },
  {
    id: "special-application",
    title: "Special Application",
    subtitle: "14 / CUSTOM ENGINEERING",
    description:
      "Custom-engineered punches, dies and profiles for specialized industrial forming requirements.",
    background: "bg-[#f3f5f8]",
    accent: "bg-slate-700",
    productIds: [9, 10, 14, 15, 19],
  },
];

/* ==========================================
   PRODUCT CARD
========================================== */

function ProductCard({
  product,
  category,
}: {
  product: Product;
  category: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden bg-[#f8fafc]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 max-w-[85%] rounded-md border border-slate-200 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm">
          {category}
        </div>
      </div>

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
            <span aria-hidden="true">→</span>
          </Link>

          <span className="text-xs font-medium text-slate-400">
            Product {String(product.id).padStart(2, "0")}
          </span>
        </div>
      </div>
    </article>
  );
}

/* ==========================================
   DESKTOP PRODUCTS PAGE
========================================== */

export default function DesktopProductsPage() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const featuredIds = [1, 6, 7, 13, 17, 20, 21];

  const featuredProducts = featuredIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));

  /* ==========================================
     FEATURED CAROUSEL AUTOPLAY
  ========================================== */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const container = scrollRef.current;

      if (!container) return;

      const { scrollLeft, scrollWidth, clientWidth } =
        container;

      if (
        scrollLeft + clientWidth >= scrollWidth - 10
      ) {
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

  const scrollFeatured = (direction: number) => {
    scrollRef.current?.scrollBy({
      left: direction * 340,
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
    <div className="min-h-screen bg-slate-950 font-sans">
      {/* ==========================================
          PAGE HEADER
      ========================================== */}

      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl space-y-7">
            <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Autozone Tooling Product Catalog
            </span>

            <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Precision Tooling
              <span className="block text-amber-400">
                Built for Performance.
              </span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              Explore precision-engineered press brake
              punches, bending dies, hemming tools,
              shear blades and specialized tooling solutions.
            </p>

            <div className="flex flex-wrap gap-10 border-t border-slate-800 pt-7">
              <div>
                <p className="text-3xl font-bold">
                  {products.length}
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                  Product Images
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">
                  {categories.length}
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                  Product Categories
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">
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
          FEATURED PRODUCTS
      ========================================== */}

      <section className="border-b border-slate-800 bg-slate-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                Featured Range
              </span>

              <h2 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">
                Featured Industrial Tooling
              </h2>
            </div>

            <div className="hidden gap-3 sm:flex">
              <button
                type="button"
                onClick={() => scrollFeatured(-1)}
                aria-label="Previous products"
                className="rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-white hover:bg-amber-500 hover:text-slate-950"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollFeatured(1)}
                aria-label="Next products"
                className="rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-white hover:bg-amber-500 hover:text-slate-950"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5"
            style={{ scrollbarWidth: "none" }}
          >
            {featuredProducts.map((product) => {
              const category = categories.find((item) =>
                item.productIds.includes(product.id)
              );

              return (
                <div
                  key={product.id}
                  className="w-[280px] shrink-0 snap-start sm:w-[330px]"
                >
                  <ProductCard
                    product={product}
                    category={
                      category?.title ?? "Industrial Tooling"
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          CATEGORY NAVIGATION
      ========================================== */}

      <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Browse Our Catalog
          </span>

          <h2 className="mt-3 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
            Explore by Category
          </h2>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  scrollToCategory(category.id)
                }
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-left text-sm font-semibold text-slate-800 transition-all hover:border-amber-400 hover:bg-amber-50"
              >
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ${category.accent}`}
                />

                <span className="flex-1">
                  {category.title}
                </span>

                <span className="text-slate-400">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PRODUCT CATEGORIES
      ========================================== */}

      {categories.map((category, index) => {
        const categoryProducts = category.productIds
          .map((id) =>
            products.find((product) => product.id === id)
          )
          .filter(
            (product): product is Product =>
              Boolean(product)
          );

        return (
          <section
            key={category.id}
            id={category.id}
            className={`${category.background} scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
          >
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 flex flex-col justify-between gap-6 border-b border-slate-300/70 pb-8 lg:flex-row lg:items-end">
                <div className="max-w-4xl">
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className={`h-1 w-10 rounded-full ${category.accent}`}
                    />

                    <span className="text-sm font-bold uppercase tracking-widest text-slate-600">
                      {category.subtitle}
                    </span>
                  </div>

                  <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                    {category.title}
                  </h2>

                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                    {category.description}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <span className="text-2xl font-bold text-slate-900">
                      {String(
                        categoryProducts.length
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Product Images
                    </p>

                    <p className="text-xs text-slate-500">
                      Category{" "}
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              </div>

              {categoryProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {categoryProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      category={category.title}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Enquire About {category.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
                    Product imagery and detailed specifications
                    are not currently listed in this catalog.
                    Contact our team to discuss your tooling
                    requirements and available configurations.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  >
                    Contact Our Engineering Team →
                  </Link>
                </div>
              )}

              <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-slate-300/70 pt-7 sm:flex-row sm:items-center">
                <p className="text-sm text-slate-600">
                  Need a custom configuration for your
                  machine?
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Request Custom Tooling →
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* ==========================================
          FINAL CTA
      ========================================== */}

      <section className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-7 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-400">
            Custom Engineering Solutions
          </span>

          <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Need Tooling Built to
            <span className="block text-amber-400">
              Your Specifications?
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
            Share your technical drawings, machine
            specifications or custom bending requirements
            with our engineering team for a tailored
            tooling solution.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <Link
              href="/contact"
              className="rounded-lg bg-amber-500 px-8 py-4 text-sm font-bold text-slate-950 hover:bg-amber-400"
            >
              Request a Quote
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-slate-700 bg-slate-900 px-8 py-4 text-sm font-semibold text-white hover:border-amber-500"
            >
              About Autozone Tooling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
