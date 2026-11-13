
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Category =
  | "Bending Tools"
  | "Punches"
  | "Dies"
  | "Accessories"
  | "Cutting Tools";

interface Product {
  id: number;
  title: string;
  name: string;
  description: string;
  image: string;
  category: Category;
}

const products: Product[] = [
  {
    id: 1,
    title: "Precision Bending",
    name: "2-V Die & Setup",
    category: "Dies",
    description:
      "Precision-engineered V-die tooling designed for accurate sheet metal bending, consistent angles, and dependable fabrication performance.",
    image: "/images/products/2-V Die & Setup.avif",
  },
  {
    id: 2,
    title: "Accurate Positioning",
    name: "Back Gauge",
    category: "Accessories",
    description:
      "Precision back gauge solutions supporting accurate sheet positioning, repeatable bending operations, and efficient press brake production.",
    image: "/images/products/Back Gauge.avif",
  },
  {
    id: 3,
    title: "Reliable Tooling",
    name: "Common Punch Holders & Inserts",
    category: "Accessories",
    description:
      "Durable punch holders and inserts engineered for secure tool positioning, reliable operation, and consistent bending performance.",
    image: "/images/products/Common Punch Holders & Inserts.avif",
  },
  {
    id: 4,
    title: "Complex Bending",
    name: "Gooseneck Punch",
    category: "Punches",
    description:
      "Specialized gooseneck punches designed to provide clearance for complex profiles, return flanges, and precision sheet metal forming.",
    image: "/images/products/Gooseneck Punch.avif",
  },
  {
    id: 5,
    title: "Precision Finishing",
    name: "Hemming Die",
    category: "Bending Tools",
    description:
      "High-performance hemming dies developed for accurate sheet metal folding, clean edges, and consistent finishing operations.",
    image: "/images/products/Hemming Die.avif",
  },
  {
    id: 6,
    title: "Versatile Bending",
    name: "Multi V Die",
    category: "Dies",
    description:
      "Multi-opening V-die tooling offering flexible bending configurations for different sheet thicknesses and fabrication requirements.",
    image: "/images/products/Multi V Die (2).avif",
  },
  {
    id: 7,
    title: "Flexible Tooling",
    name: "Multi V Die",
    category: "Dies",
    description:
      "Precision-machined multi V-dies designed for versatile sheet metal bending, repeatable results, and efficient tooling setups.",
    image: "/images/products/Multi V Die.avif",
  },
  {
    id: 8,
    title: "Custom Forming",
    name: "Profile Die",
    category: "Dies",
    description:
      "Specialized profile dies engineered to produce accurate formed sections and support demanding industrial fabrication applications.",
    image: "/images/products/Profile Die.avif",
  },
  {
    id: 9,
    title: "Engineered Profiles",
    name: "Profile Type Die Punch",
    category: "Punches",
    description:
      "Precision profile punches and dies developed for specialized bending geometries and consistent forming accuracy.",
    image: "/images/products/Profile Type Die Punch.avif",
  },
  {
    id: 10,
    title: "Secure Tooling",
    name: "Punch Clamps",
    category: "Accessories",
    description:
      "Reliable punch clamping solutions designed for secure tool retention, accurate alignment, and efficient press brake operations.",
    image: "/images/products/Punch Clamps.avif",
  },
  {
    id: 11,
    title: "Advanced Bending",
    name: "Rolla Die",
    category: "Bending Tools",
    description:
      "Specialized rolling die solutions designed to support controlled sheet metal forming and reduce marking in suitable bending applications.",
    image: "/images/products/Rolla Die.avif",
  },
  {
    id: 12,
    title: "Precision Forming",
    name: "Semi Gooseneck Punch",
    category: "Punches",
    description:
      "Semi-gooseneck punches engineered to provide additional forming clearance and accurate bending for specialized sheet metal profiles.",
    image: "/images/products/Semi Gooseneck Punch.avif",
  },
  {
    id: 13,
    title: "High Performance",
    name: "Shearing Blades",
    category: "Cutting Tools",
    description:
      "Precision-ground industrial shearing blades engineered for clean cutting, dependable wear resistance, and consistent production performance.",
    image: "/images/products/Shearing Blades.avif",
  },
  {
    id: 14,
    title: "Accurate Bending",
    name: "Single V Die",
    category: "Dies",
    description:
      "Precision-machined single V-dies developed for consistent bend angles, reliable sheet metal forming, and industrial applications.",
    image: "/images/products/Single V Die.avif",
  },
  {
    id: 15,
    title: "Specialized Engineering",
    name: "Special Die – Side View",
    category: "Dies",
    description:
      "Custom-designed press brake dies with specialized profiles for complex bending requirements and precision fabrication.",
    image: "/images/products/Special Die (Side View).avif",
  },
  {
    id: 16,
    title: "Custom Precision",
    name: "Special Die Punch",
    category: "Punches",
    description:
      "Engineered punch and die tooling for specialized sheet metal forming applications requiring precise profiles and repeatable results.",
    image: "/images/products/Special Die Punch.avif",
  },
  {
    id: 17,
    title: "Custom Tooling",
    name: "Special Die",
    category: "Dies",
    description:
      "Precision-manufactured special dies tailored for unique bending profiles, complex geometries, and demanding fabrication requirements.",
    image: "/images/products/Special Die.avif",
  },
  {
    id: 18,
    title: "Dependable Performance",
    name: "Stock Semi Gooseneck Punch",
    category: "Punches",
    description:
      "Versatile semi-gooseneck tooling designed for reliable bending performance, consistent accuracy, and practical forming applications.",
    image: "/images/products/Stock Semi Gooseneck Punch.avif",
  },
  {
    id: 19,
    title: "Precision Engineered",
    name: "Straight Punch – 6mm",
    category: "Punches",
    description:
      "Precision-machined 6mm straight punches designed for accurate sheet metal bending and consistent industrial forming performance.",
    image: "/images/products/Straight Punch - 6mm (Front View).avif",
  },
  {
    id: 20,
    title: "Reliable Bending",
    name: "Straight Punch – 6mm",
    category: "Punches",
    description:
      "High-quality straight punch tooling developed for dependable bending accuracy, durable operation, and precision fabrication.",
    image: "/images/products/Straight Punch - 6mm SideView).avif",
  },
  {
    id: 21,
    title: "High Productivity",
    name: "Turret Punches",
    category: "Punches",
    description:
      "Precision turret punching tools engineered for accurate sheet metal punching, consistent hole quality, and efficient production.",
    image: "/images/products/Turret Punches.avif",
  },
  {
    id: 22,
    title: "Adjustable Precision",
    name: "Variable V Type Inserts",
    category: "Accessories",
    description:
      "Versatile V-type inserts developed to support adjustable bending configurations, precision forming, and flexible tooling applications.",
    image: "/images/products/Variable V Type Inserts.avif",
  },
];

const categories = [
  "All Products",
  "Bending Tools",
  "Punches",
  "Dies",
  "Accessories",
  "Cutting Tools",
] as const;

type FilterCategory = (typeof categories)[number];

const INITIAL_COUNT = 6;

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M5 12h14m-6-6 6 6-6 6"
      />
    </svg>
  );
}

export default function MobileHomeProductsShowcase() {
  const [category, setCategory] =
    useState<FilterCategory>("All Products");

  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === "All Products" ||
        product.category === category;

      const matchesSearch =
        !query ||
        `${product.name} ${product.title} ${product.category} ${product.description}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, INITIAL_COUNT);

  const handleCategoryChange = (next: FilterCategory) => {
    setCategory(next);
    setShowAll(false);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setShowAll(false);
  };

  const enquiryHref = selectedProduct
    ? `/contact?product=${encodeURIComponent(selectedProduct.name)}`
    : "/contact";

  return (
    <section
      aria-labelledby="mobile-products-heading"
      className="relative overflow-hidden border-y border-slate-800 bg-slate-950 font-sans text-white"
    >
      <div className="mx-auto max-w-lg pb-14 pt-14">
        {/* HEADER */}
        <div className="px-5">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-amber-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-400">
              Our Products
            </span>
          </div>

          <h2
            id="mobile-products-heading"
            className="text-[clamp(2.15rem,9vw,3rem)] font-semibold leading-[1.1] tracking-[-0.045em]"
          >
            Find the right
            <br />
            <span className="text-amber-400">
              tooling solution.
            </span>
          </h2>

          <p className="mt-4 max-w-sm text-[13px] leading-[1.85] text-slate-400">
            Explore our precision-engineered products.
            Browse by category or search for the exact
            tooling you need.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mt-8 px-5">
          <label
            htmlFor="mobile-product-search"
            className="sr-only"
          >
            Search products
          </label>

          <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4 transition-colors focus-within:border-amber-400">
            <svg
              className="h-5 w-5 shrink-0 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                cx="10.8"
                cy="10.8"
                r="6.8"
                strokeWidth="1.8"
              />
              <path
                d="m16 16 4.5 4.5"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            <input
              id="mobile-product-search"
              type="search"
              value={search}
              onChange={(event) =>
                handleSearchChange(event.target.value)
              }
              placeholder="Search punches, dies, blades..."
              className="min-w-0 flex-1 bg-transparent text-[13px] text-white outline-none placeholder:text-slate-500"
            />

            {search && (
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                aria-label="Clear search"
                className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="1.8"
                    d="M6 6l12 12M18 6 6 18"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* HORIZONTAL CATEGORY FILTERS */}
        <div className="mt-5">
          <div className="flex gap-2 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((item) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    handleCategoryChange(item)
                  }
                  aria-pressed={active}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-[11px] font-semibold transition-colors ${
                    active
                      ? "border-amber-500 bg-amber-500 text-slate-950"
                      : "border-slate-700 bg-slate-900 text-slate-300 active:border-amber-400"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* RESULTS HEADER */}
        <div className="mt-7 flex items-center justify-between px-5">
          <div>
            <h3 className="text-[15px] font-semibold text-white">
              {category === "All Products"
                ? "Explore Products"
                : category}
            </h3>

            <p
              className="mt-1 text-[11px] text-slate-500"
              aria-live="polite"
            >
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1
                ? "product"
                : "products"}{" "}
              available to explore
            </p>
          </div>

          <span className="rounded-md border border-slate-700 px-2.5 py-1.5 text-[10px] font-medium text-slate-400">
            AUTOZONE
          </span>
        </div>

        {/* PRODUCT GRID */}
        {visibleProducts.length > 0 ? (
          <div className="mt-5 grid grid-cols-2 gap-3 px-5">
            {visibleProducts.map((product) => (
              <button
                key={product.id}
                type="button"
                onClick={() =>
                  setSelectedProduct(product)
                }
                aria-label={`View details for ${product.name}`}
                className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 text-left transition-colors active:border-amber-500"
              >
                {/* IMAGE */}
                <div className="relative aspect-[1/1] w-full overflow-hidden bg-[#f1f3f5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 45vw, 220px"
                    className="object-contain p-3 transition-transform duration-300 group-active:scale-105"
                  />

                  <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-sm">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M7 17 17 7M8 7h9v9"
                      />
                    </svg>
                  </span>
                </div>

                {/* CARD CONTENT */}
                <div className="flex flex-1 flex-col p-3">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-amber-400">
                    {product.category}
                  </span>

                  <h4 className="mt-2 min-h-[36px] text-[12px] font-semibold leading-[1.5] text-white">
                    {product.name}
                  </h4>

                  <div className="mt-auto flex items-center justify-between border-t border-slate-800 pt-3">
                    <span className="text-[10px] font-medium text-slate-400">
                      View Details
                    </span>

                    <ArrowIcon className="h-3.5 w-3.5 text-amber-400" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="mx-5 mt-5 rounded-xl border border-slate-800 bg-slate-900 px-5 py-10 text-center">
            <p className="text-sm font-semibold text-white">
              No matching products found
            </p>

            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Try another product name or select a
              different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All Products");
                setShowAll(false);
              }}
              className="mt-5 rounded-lg bg-amber-500 px-5 py-3 text-xs font-semibold text-slate-950"
            >
              Show All Products
            </button>
          </div>
        )}

        {/* SHOW MORE */}
        {filteredProducts.length > INITIAL_COUNT && (
          <div className="mt-7 px-5">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 text-[12px] font-semibold text-white transition-colors active:border-amber-400"
            >
              {showAll
                ? "Show Fewer Products"
                : `Show All ${filteredProducts.length} Products`}

              <svg
                className={`h-4 w-4 text-amber-400 transition-transform ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
          </div>
        )}

        {/* BOTTOM CTA */}
        <div className="mx-5 mt-10 rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
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
                  strokeWidth={1.6}
                  d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
                />
              </svg>
            </span>

            <div>
              <h3 className="text-[15px] font-semibold text-white">
                Need custom tooling?
              </h3>

              <p className="mt-1 text-[11px] text-slate-400">
                Talk to our engineering team.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 text-[12px] font-semibold text-slate-950 transition-colors active:bg-amber-400"
          >
            Request a Custom Quote
            <ArrowIcon />
          </Link>
        </div>

        {/* FULL CATALOGUE LINK */}
        <div className="mt-6 px-5 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-amber-400"
          >
            Visit Complete Product Catalogue
            <ArrowIcon />
          </Link>
        </div>
      </div>

      {/* PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProduct(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-product-dialog-title"
            className="max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl border-t border-slate-700 bg-slate-950 pb-[max(24px,env(safe-area-inset-bottom))]"
          >
            {/* MODAL TOP BAR */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-slate-950 px-5 py-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-amber-400">
                Product Details
              </span>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close product details"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-white"
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
                    strokeWidth={1.8}
                    d="M6 6l12 12M18 6 6 18"
                  />
                </svg>
              </button>
            </div>

            {/* PRODUCT IMAGE */}
            <div className="relative mx-5 mt-5 aspect-[1.3/1] overflow-hidden rounded-xl bg-[#f1f3f5]">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-contain p-5"
              />
            </div>

            {/* PRODUCT DETAILS */}
            <div className="px-5 pt-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400">
                {selectedProduct.category}
              </span>

              <h3
                id="mobile-product-dialog-title"
                className="mt-2 text-[25px] font-semibold leading-tight tracking-tight text-white"
              >
                {selectedProduct.name}
              </h3>

              <p className="mt-2 text-[12px] font-medium text-slate-400">
                {selectedProduct.title}
              </p>

              <p className="mt-5 text-[13px] leading-[1.9] text-slate-300">
                {selectedProduct.description}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <Link
                  href={enquiryHref}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-3 text-center text-[12px] font-semibold text-slate-950"
                >
                  Request Quote
                  <ArrowIcon />
                </Link>

                <Link
                  href="/products"
                  className="flex min-h-12 items-center justify-center rounded-lg border border-slate-600 bg-slate-900 px-3 text-center text-[12px] font-semibold text-white"
                >
                  View Catalogue
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
