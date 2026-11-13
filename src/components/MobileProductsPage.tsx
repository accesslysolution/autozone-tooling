
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiPhone,
  FiPlus,
  FiArrowDown,
  FiLayers,
  FiTool,
} from "react-icons/fi";

/* ==========================================
   BRAND COLORS
========================================== */

const BRAND = {
  navy: "#0B141E",
  amber: "#F59E0B",
  amberDark: "#B45309",
  body: "#334155",
  muted: "#CBD5E1",
};

/* ==========================================
   TYPES
========================================== */

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
  productIds: number[];
}

/* ==========================================
   PRODUCTS
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
    image: "/images/products/Stock Semi Gooseneck Punch.avif",
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
    image:
      "/images/products/Special Die (Side View).avif",
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
    image: "/images/products/Profile Type Die Punch.avif",
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
    image: "/images/products/Variable V Type Inserts.avif",
  },
];

/* ==========================================
   CATEGORIES
========================================== */

const categories: ProductCategory[] = [
  {
    id: "press-brake-tool",
    title: "Press Brake Tool",
    subtitle: "General Tooling",
    description:
      "Precision tooling solutions for CNC press brake operations and industrial sheet metal fabrication.",
    productIds: [21],
  },
  {
    id: "press-brake-punch",
    title: "Press Brake Punch",
    subtitle: "Precision Punches",
    description:
      "Straight, gooseneck and semi-gooseneck punches for demanding bending applications.",
    productIds: [1, 2, 3, 4, 5],
  },
  {
    id: "press-brake-dies",
    title: "Press Brake Dies",
    subtitle: "Precision Dies",
    description:
      "Engineered bending dies for consistent forming accuracy.",
    productIds: [11, 12],
  },
  {
    id: "radius-tools-holder",
    title: "Radius Tools Holder",
    subtitle: "Tool Holding",
    description:
      "Tool holding solutions supporting secure positioning and alignment.",
    productIds: [17, 18],
  },
  {
    id: "radius-tools-insert",
    title: "Radius Tools Insert",
    subtitle: "Precision Inserts",
    description:
      "Specialized inserts for controlled bending profiles.",
    productIds: [22],
  },
  {
    id: "press-brake-hemming-tools",
    title: "Press Brake Hemming Tools",
    subtitle: "Hemming Solutions",
    description:
      "Precision hemming tools for clean folds and finished edges.",
    productIds: [13],
  },
  {
    id: "self-centering-2v-die",
    title: "Self Centering 2V Die",
    subtitle: "V-Die Systems",
    description:
      "2-V die configurations for accurate alignment and bending.",
    productIds: [16],
  },
  {
    id: "shear-blade",
    title: "Shear Blade",
    subtitle: "Precision Cutting",
    description:
      "Industrial shearing blades for clean, dependable cutting.",
    productIds: [20],
  },
  {
    id: "joggle-tool-insert",
    title: "Joggle Tool & Insert",
    subtitle: "Specialized Forming",
    description:
      "Specialized tooling for offset forming and custom sheet metal profiles.",
    productIds: [],
  },
  {
    id: "amada-self-centering-1v-die",
    title: "Amada Type Self Centering 1V Die",
    subtitle: "Machine-Specific Tooling",
    description:
      "Machine-specific V-die tooling for compatible press brake systems.",
    productIds: [],
  },
  {
    id: "amada-self-centering-1v-die-holder",
    title: "Amada Type Self Centering 1V Die Holder",
    subtitle: "Die Holding Systems",
    description:
      "Specialized die holding configurations for secure installation.",
    productIds: [],
  },
  {
    id: "single-v-die",
    title: "Single V Die",
    subtitle: "Single V Tooling",
    description:
      "Single V dies engineered for precise angular bending.",
    productIds: [6],
  },
  {
    id: "multi-v-die",
    title: "Multi V Die",
    subtitle: "Multi-Opening Dies",
    description:
      "Versatile multi-opening dies for flexible bending operations.",
    productIds: [7, 8],
  },
  {
    id: "special-application",
    title: "Special Application",
    subtitle: "Custom Engineering",
    description:
      "Custom-engineered punches, dies and profiles for specialized forming requirements.",
    productIds: [9, 10, 14, 15, 19],
  },
];

const featuredIds = [1, 6, 7, 13, 17, 20, 21];

const featuredProducts = featuredIds
  .map((id) => products.find((product) => product.id === id))
  .filter((product): product is Product => Boolean(product));

const productMap = new Map(
  products.map((product) => [product.id, product])
);

/* ==========================================
   PRODUCT TILE
========================================== */

function ProductTile({
  product,
  onView,
}: {
  product: Product;
  onView: (product: Product) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onView(product)}
      className="group flex min-w-0 flex-col overflow-hidden rounded-[18px] border border-[#e6e9ed] bg-white text-left shadow-[0_4px_20px_rgba(15,23,42,0.035)] transition-transform active:scale-[0.98]"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-[#f2f4f6]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
        />

        <div
          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-sm"
          style={{ color: BRAND.navy }}
        >
          <FiPlus size={14} />
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col items-center px-3 pb-4 pt-3 text-center">
        <span
          className="text-[9px] font-bold uppercase tracking-[0.14em]"
          style={{ color: BRAND.amberDark }}
        >
          AT / {String(product.id).padStart(2, "0")}
        </span>

        <h3
          className="mt-2 text-[12px] font-bold leading-[1.45]"
          style={{ color: BRAND.navy }}
        >
          {product.name}
        </h3>

        <span
          className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[10px] font-bold"
          style={{ color: BRAND.amberDark }}
        >
          View Product
          <FiArrowUpRight size={13} />
        </span>
      </div>
    </button>
  );
}

/* ==========================================
   CATEGORY SECTION
========================================== */

function CategorySection({
  category,
  index,
  onView,
}: {
  category: ProductCategory;
  index: number;
  onView: (product: Product) => void;
}) {
  const categoryProducts = category.productIds
    .map((id) => productMap.get(id))
    .filter((product): product is Product => Boolean(product));

  const primaryProduct = categoryProducts[0];
  const otherProducts = categoryProducts.slice(1);

  const isDark = index % 4 === 1;

  return (
    <section
      id={`mobile-${category.id}`}
      className={`scroll-mt-32 overflow-hidden py-12 ${
        isDark
          ? "bg-[#101923]"
          : "bg-[#f7f8fa]"
      }`}
    >
      <div className="px-5">
        {/* CATEGORY HEADING */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-3">
            <span
              className="text-[11px] font-bold tracking-[0.16em]"
              style={{
                color: isDark
                  ? BRAND.amber
                  : BRAND.amberDark,
              }}
            >
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(categories.length).padStart(2, "0")}
            </span>

            <span
              className={`h-px w-9 ${
                isDark ? "bg-slate-600" : "bg-slate-300"
              }`}
            />

            <span
              className="text-[10px] font-semibold uppercase tracking-[0.14em]"
              style={{
                color: isDark
                  ? BRAND.amber
                  : BRAND.amberDark,
              }}
            >
              {category.subtitle}
            </span>
          </div>

          <h2
            className="font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.035em]"
            style={{
              color: isDark
                ? BRAND.amber
                : BRAND.navy,
            }}
          >
            {category.title}
          </h2>

          <p
            className="mx-auto mt-4 max-w-[330px] text-[13px] leading-[1.8]"
            style={{
              color: isDark
                ? BRAND.muted
                : BRAND.body,
            }}
          >
            {category.description}
          </p>

          <div className="mt-6 h-[3px] w-12 rounded-full bg-amber-500" />
        </div>

        {/* MAIN PRODUCT SPOTLIGHT */}
        {primaryProduct ? (
          <div className="mt-8">
            <button
              type="button"
              onClick={() => onView(primaryProduct)}
              className="group block w-full overflow-hidden rounded-[22px] bg-white text-left shadow-[0_14px_40px_rgba(0,0,0,0.08)] transition-transform active:scale-[0.99]"
            >
              <div className="relative aspect-[5/4] bg-[#eef1f4]">
                <Image
                  src={primaryProduct.image}
                  alt={primaryProduct.name}
                  fill
                  sizes="100vw"
                  className="object-contain p-7 transition-transform duration-500 group-hover:scale-105"
                />

                <span
                  className="absolute left-4 top-4 rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: BRAND.navy }}
                >
                  Product Spotlight
                </span>

                <span
                  className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full shadow-md"
                  style={{
                    backgroundColor: BRAND.amber,
                    color: BRAND.navy,
                  }}
                >
                  <FiArrowUpRight size={20} />
                </span>
              </div>

              <div className="px-5 pb-6 pt-5 text-center">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: BRAND.amberDark }}
                >
                  Precision Engineered
                </p>

                <h3
                  className="mt-2 font-heading text-[23px] font-bold leading-tight"
                  style={{ color: BRAND.navy }}
                >
                  {primaryProduct.name}
                </h3>

                <p
                  className="mx-auto mt-3 max-w-sm text-[12px] leading-[1.75]"
                  style={{ color: BRAND.body }}
                >
                  {primaryProduct.description}
                </p>

                <span
                  className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold"
                  style={{ color: BRAND.amberDark }}
                >
                  Explore Product
                  <FiArrowRight size={15} />
                </span>
              </div>
            </button>

            {/* ADDITIONAL PRODUCTS */}
            {otherProducts.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-3">
                {otherProducts.map((product) => (
                  <ProductTile
                    key={product.id}
                    product={product}
                    onView={onView}
                  />
                ))}
              </div>
            )}

            {/* CATEGORY ENQUIRY */}
            <div
              className={`mt-7 flex flex-col items-center border-t pt-6 text-center ${
                isDark
                  ? "border-slate-700"
                  : "border-slate-200"
              }`}
            >
              <p
                className="text-[12px]"
                style={{
                  color: isDark
                    ? BRAND.muted
                    : BRAND.body,
                }}
              >
                Looking for a custom configuration?
              </p>

              <Link
                href={`/contact?category=${encodeURIComponent(
                  category.title
                )}`}
                className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-[11px] font-bold"
                style={{
                  backgroundColor: isDark
                    ? BRAND.amber
                    : BRAND.navy,
                  color: isDark
                    ? BRAND.navy
                    : "#FFFFFF",
                }}
              >
                Enquire About This Category
                <FiArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        ) : (
          /* CATEGORY WITHOUT PRODUCT IMAGES */
          <div
            className={`mt-8 overflow-hidden rounded-[22px] border p-7 text-center ${
              isDark
                ? "border-slate-700 bg-slate-800/60"
                : "border-slate-200 bg-white"
            }`}
          >
            <div
              className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${
                isDark ? "bg-slate-700" : "bg-amber-50"
              }`}
              style={{
                color: isDark
                  ? BRAND.amber
                  : BRAND.amberDark,
              }}
            >
              <FiTool size={28} />
            </div>

            <h3
              className="mt-6 font-heading text-[23px] font-bold"
              style={{
                color: isDark
                  ? BRAND.amber
                  : BRAND.navy,
              }}
            >
              Custom Tooling
              <br />
              Solutions
            </h3>

            <p
              className="mx-auto mt-3 max-w-[290px] text-[12px] leading-[1.85]"
              style={{
                color: isDark
                  ? BRAND.muted
                  : BRAND.body,
              }}
            >
              Product images for this category are not yet
              listed. Speak with our engineering team about
              available designs and configurations.
            </p>

            <Link
              href={`/contact?category=${encodeURIComponent(
                category.title
              )}`}
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[12px] font-bold"
              style={{
                backgroundColor: BRAND.amber,
                color: BRAND.navy,
              }}
            >
              Discuss Your Requirements
              <FiArrowUpRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

/* ==========================================
   MOBILE PRODUCTS PAGE
========================================== */

export default function MobileProductsPage() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const featuredRef = useRef<HTMLDivElement>(null);

  const scrollFeatured = (direction: number) => {
    featuredRef.current?.scrollBy({
      left: direction * 270,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!selectedProduct) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f7f8fa] font-sans">
      {/* ==========================================
          INDUSTRIAL HERO
      ========================================== */}

      <section
        className="relative overflow-hidden px-5 pb-12 pt-14 text-white"
        style={{ backgroundColor: BRAND.navy }}
      >
        {/* BACKGROUND DETAIL */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div className="absolute left-1/4 top-0 h-full w-px bg-white" />
          <div className="absolute right-1/4 top-0 h-full w-px bg-white" />
          <div className="absolute left-0 top-1/3 h-px w-full bg-white" />
        </div>

        <div className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-[90px]" />

        <div className="relative flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: BRAND.amber }}
            />

            <span
              className="text-[10px] font-bold uppercase tracking-[0.17em]"
              style={{ color: BRAND.muted }}
            >
              Autozone Tooling / Product Range
            </span>
          </div>

          <h1 className="mt-8 font-heading text-[48px] font-bold leading-[0.99] tracking-[-0.045em] text-white">
            ENGINEERED
            <br />
            <span style={{ color: BRAND.amber }}>
              TO PERFORM.
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-[340px] text-[13px] leading-[1.85]"
            style={{ color: BRAND.muted }}
          >
            Industrial-grade precision tooling for
            demanding sheet metal fabrication.
          </p>

          {/* HERO PRODUCT IMAGE */}
          <div className="relative mt-9 w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#e9edf1]">
            <div className="relative aspect-[5/4]">
              <Image
                src="/images/products/Gooseneck Punch.avif"
                alt="Autozone Tooling precision gooseneck punch"
                fill
                priority
                sizes="100vw"
                className="object-contain p-6"
              />
            </div>

            <div
              className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ color: BRAND.navy }}
            >
              Precision Press Brake Tooling
            </div>
          </div>

          <div className="mt-8 grid w-full grid-cols-3 divide-x divide-slate-700 border-y border-slate-700 py-5">
            <div className="text-center">
              <p
                className="font-heading text-[26px] font-bold"
                style={{ color: BRAND.amber }}
              >
                {products.length}
              </p>
              <p
                className="mt-1 text-[9px] uppercase tracking-wider"
                style={{ color: BRAND.muted }}
              >
                Product Images
              </p>
            </div>

            <div className="text-center">
              <p
                className="font-heading text-[26px] font-bold"
                style={{ color: BRAND.amber }}
              >
                {categories.length}
              </p>
              <p
                className="mt-1 text-[9px] uppercase tracking-wider"
                style={{ color: BRAND.muted }}
              >
                Categories
              </p>
            </div>

            <div className="text-center">
              <p
                className="font-heading text-[26px] font-bold"
                style={{ color: BRAND.amber }}
              >
                CNC
              </p>
              <p
                className="mt-1 text-[9px] uppercase tracking-wider"
                style={{ color: BRAND.muted }}
              >
                Tooling
              </p>
            </div>
          </div>

          <a
            href="#mobile-catalogue"
            className="mt-8 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em]"
            style={{ color: BRAND.amber }}
          >
            Explore Our Collection
            <FiArrowDown size={16} />
          </a>
        </div>
      </section>

      {/* ==========================================
          FEATURED PRODUCTS GALLERY
      ========================================== */}

      <section className="bg-white py-12">
        <div className="px-5 text-center">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: BRAND.amberDark }}
          >
            Selected Products
          </span>

          <h2
            className="mt-3 font-heading text-[32px] font-bold leading-tight tracking-tight"
            style={{ color: BRAND.navy }}
          >
            Featured
            <br />
            <span style={{ color: BRAND.amberDark }}>
              Engineering.
            </span>
          </h2>

          <p
            className="mx-auto mt-3 max-w-[300px] text-[12px] leading-[1.8]"
            style={{ color: BRAND.body }}
          >
            Explore a selection from our industrial tooling
            catalogue.
          </p>
        </div>

        <div
          ref={featuredRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none]"
        >
          {featuredProducts.map((product, index) => (
            <button
              key={product.id}
              type="button"
              onClick={() => setSelectedProduct(product)}
              className="w-[250px] shrink-0 snap-center overflow-hidden rounded-[20px] border border-slate-200 bg-[#f5f6f8] text-left"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="250px"
                  className="object-contain p-5"
                />

                <span
                  className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[9px] font-bold"
                  style={{ color: BRAND.amberDark }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-4">
                <span
                  className="text-[13px] font-bold leading-snug"
                  style={{ color: BRAND.navy }}
                >
                  {product.name}
                </span>

                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: BRAND.navy,
                    color: BRAND.amber,
                  }}
                >
                  <FiArrowUpRight size={15} />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollFeatured(-1)}
            aria-label="Scroll featured products left"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200"
            style={{ color: BRAND.navy }}
          >
            <FiChevronLeft size={20} />
          </button>

          <span
            className="px-3 text-[10px] font-semibold uppercase tracking-wider"
            style={{ color: BRAND.amberDark }}
          >
            Swipe to Explore
          </span>

          <button
            type="button"
            onClick={() => scrollFeatured(1)}
            aria-label="Scroll featured products right"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200"
            style={{ color: BRAND.navy }}
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* ==========================================
          CATALOGUE INTRODUCTION
      ========================================== */}

      <section
        id="mobile-catalogue"
        className="scroll-mt-32 bg-[#f7f8fa] px-5 pb-11 pt-14 text-center"
      >
        <div
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: BRAND.navy,
            color: BRAND.amber,
          }}
        >
          <FiLayers size={23} />
        </div>

        <span
          className="mt-6 block text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{ color: BRAND.amberDark }}
        >
          Complete Product Catalogue
        </span>

        <h2
          className="mt-3 font-heading text-[38px] font-bold leading-[1.04] tracking-[-0.035em]"
          style={{ color: BRAND.navy }}
        >
          BUILT FOR
          <br />
          <span style={{ color: BRAND.amberDark }}>
            EVERY BEND.
          </span>
        </h2>

        <p
          className="mx-auto mt-5 max-w-[320px] text-[13px] leading-[1.85]"
          style={{ color: BRAND.body }}
        >
          Discover our complete range of precision tooling,
          organized by application and engineering requirements.
        </p>

        <div
          className="mx-auto mt-7 h-[3px] w-12 rounded-full"
          style={{ backgroundColor: BRAND.amber }}
        />
      </section>

      {/* ==========================================
          CATEGORY-WISE PRODUCTS
      ========================================== */}

      {categories.map((category, index) => (
        <CategorySection
          key={category.id}
          category={category}
          index={index}
          onView={setSelectedProduct}
        />
      ))}

      {/* ==========================================
          ENGINEERING CTA
      ========================================== */}

      <section
        className="relative overflow-hidden px-5 py-16 text-white"
        style={{ backgroundColor: BRAND.navy }}
      >
        <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-amber-500/10 blur-[80px]" />

        <div className="relative flex flex-col items-center text-center">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/25 bg-amber-500/10"
            style={{ color: BRAND.amber }}
          >
            <FiTool size={25} />
          </div>

          <span
            className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: BRAND.amber }}
          >
            Custom Tooling Solutions
          </span>

          <h2 className="mt-4 font-heading text-[38px] font-bold leading-[1.08] tracking-tight text-white">
            YOUR DESIGN.
            <br />
            <span style={{ color: BRAND.amber }}>
              OUR PRECISION.
            </span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-[330px] text-[13px] leading-[1.85]"
            style={{ color: BRAND.muted }}
          >
            Share your machine specifications, technical
            drawings or custom bending requirements with
            our engineering team.
          </p>

          <Link
            href="/contact"
            className="mt-8 flex min-h-13 w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-[13px] font-bold"
            style={{
              backgroundColor: BRAND.amber,
              color: BRAND.navy,
            }}
          >
            Request Custom Tooling
            <FiArrowUpRight size={18} />
          </Link>

          <a
            href="tel:+919011452458"
            className="mt-3 flex min-h-13 w-full items-center justify-center gap-3 rounded-xl border border-slate-700 px-6 py-4 text-[12px] font-semibold text-white"
          >
            <FiPhone size={16} />
            Speak With Our Team
          </a>
        </div>
      </section>

      {/* ==========================================
          PRODUCT DETAILS MODAL
      ========================================== */}

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-end bg-black/75"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedProduct.name}
            className="max-h-[92dvh] w-full overflow-y-auto rounded-t-[28px] bg-white pb-[max(24px,env(safe-area-inset-bottom))]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: BRAND.amberDark }}
              >
                Autozone Tooling / Product Details
              </span>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close product details"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100"
                style={{ color: BRAND.navy }}
              >
                <FiX size={19} />
              </button>
            </div>

            <div className="px-5 pt-5 text-center">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[20px] bg-[#f1f3f5]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  sizes="100vw"
                  className="object-contain p-6"
                />
              </div>

              <p
                className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: BRAND.amberDark }}
              >
                Product No.{" "}
                {String(selectedProduct.id).padStart(2, "0")}
              </p>

              <h3
                className="mt-3 font-heading text-[29px] font-bold leading-tight"
                style={{ color: BRAND.navy }}
              >
                {selectedProduct.name}
              </h3>

              <p
                className="mx-auto mt-4 max-w-sm text-[13px] leading-[1.85]"
                style={{ color: BRAND.body }}
              >
                {selectedProduct.description}
              </p>

              <div className="mt-7 space-y-3">
                <Link
                  href={`/contact?product=${encodeURIComponent(
                    selectedProduct.name
                  )}`}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-[12px] font-bold"
                  style={{
                    backgroundColor: BRAND.amber,
                    color: BRAND.navy,
                  }}
                >
                  Enquire About This Product
                  <FiArrowRight size={16} />
                </Link>

                <a
                  href="tel:+919011452458"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 text-[12px] font-semibold"
                  style={{ color: BRAND.navy }}
                >
                  <FiPhone size={15} />
                  Call Our Engineering Team
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
