
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  amber: "#FBBF24",
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
   PRODUCT DATA
   39 PRODUCTS
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

  /* ==========================================
     PRESS BRAKE PRODUCT RANGE
  ========================================== */

  {
    id: 23,
    name: "Press Brake Tooling Storage Rack",
    description:
      "Organized industrial press brake tooling storage system designed for safe handling, identification and efficient access to bending tools.",
    image: "/images/products/press-brake-2.avif",
  },
  {
    id: 24,
    name: "Press Brake Punch Storage System",
    description:
      "Heavy-duty tooling rack for organized storage of precision press brake punches and forming tools.",
    image: "/images/products/press brake-1.avif",
  },
  {
    id: 25,
    name: "Press Brake Die Product Range",
    description:
      "Precision-engineered press brake die configurations supporting multiple bending profiles and industrial sheet metal applications.",
    image:
      "/images/products/Press Brake Die Product Showcase.avif",
  },
  {
    id: 26,
    name: "Press Brake Tooling Range",
    description:
      "Overview of precision press brake tooling configurations for different forming requirements and bending applications.",
    image:
      "/images/products/Press Brake Tooling Catalog Infographic.avif",
  },
  {
    id: 27,
    name: "R0.8 Straight Punch – 85°",
    description:
      "Precision straight press brake punch featuring an R0.8 tip radius and 85-degree profile for accurate sheet metal bending.",
    image:
      "/images/products/R0.8 Straight Punch Technical Showcase.avif",
  },
  {
    id: 28,
    name: "Single V Die – 6 to 100mm",
    description:
      "Single V-die tooling with V-opening configurations from 6mm to 100mm and specified angular profiles from 30° to 86°.",
    image:
      "/images/products/Press Brake Single V-Die Infographic.avif",
  },
  {
    id: 29,
    name: "R0.8 Gooseneck Punch – 85°",
    description:
      "Precision gooseneck press brake punch with an R0.8 tip radius and 85-degree profile, suitable for specialized bending and return flange operations.",
    image:
      "/images/products/Gooseneck Press Brake Punch Infographic.avif",
  },
  {
    id: 30,
    name: "Joggle Press Brake Tooling",
    description:
      "Specialized joggle tooling for creating offset bends and stepped sheet metal profiles with controlled forming geometry.",
    image:
      "/images/products/Joggle Tooling for Press Brakes.avif",
  },
  {
    id: 31,
    name: "Amada Type Self-Centering Die",
    description:
      "Self-centering press brake die configuration designed for precise alignment and consistent forming operations on compatible tooling systems.",
    image:
      "/images/products/Amada Self-Centering Die Infographic.avif",
  },
  {
    id: 32,
    name: "Press Brake Punch Specifications",
    description:
      "Technical overview of press brake punch profiles, tooling geometry and specifications for precision bending applications.",
    image:
      "/images/products/Press Brake Punch Specifications Infographic.avif",
  },
  {
    id: 33,
    name: "R0.8 Semi-Gooseneck Punch – 85°",
    description:
      "Semi-gooseneck press brake punch with an R0.8 tip radius and 85-degree profile for controlled bending of specialized sheet metal components.",
    image:
      "/images/products/Semi-Gooseneck Press Brake Punch.avif",
  },
  {
    id: 34,
    name: "R0.8 Acute Angle Punch",
    description:
      "Precision acute-angle press brake punch with an R0.8 tip radius for specialized angular bending operations.",
    image:
      "/images/products/Acute Angle Press Brake Punch Poster.avif",
  },

  /* ==========================================
     NEW PRODUCT IMAGES
  ========================================== */

  {
    id: 35,
    name: "Double Sided Punch Clamp",
    description:
      "Precision-engineered double-sided punch clamp designed for secure press brake punch retention, reliable alignment and efficient tooling operations.",
    image:
      "/images/products/Industrial Punch Clamp Product Shot.avif",
  },
  {
    id: 36,
    name: "Single Side Punch Clamp",
    description:
      "Industrial single-side punch clamp featuring a red locking lever for secure tool clamping and convenient handling during press brake operations.",
    image:
      "/images/products/Industrial Punch Clamp with Red Locking Lever.avif",
  },
  {
    id: 37,
    name: "Precision Hemming Dies in Parallel",
    description:
      "Precision-machined hemming dies arranged in parallel, engineered for consistent folding, accurate alignment and clean sheet metal edges.",
    image:
      "/images/products/Precision Hemming Dies in Parallel.avif",
  },
  {
    id: 38,
    name: "Three Hemming Die Assemblies",
    description:
      "Three specialized hemming punch and die assemblies illustrating different tooling profiles for precision sheet metal folding applications.",
    image:
      "/images/products/Three Hemming Die Assemblies.avif",
  },
  {
    id: 39,
    name: "Precision Metal Components Design Services",
    description:
      "Precision metal component design solutions for industrial applications, including engineered brackets, housings, mounting components and custom manufactured parts.",
    image:
      "/images/products/Precision Metal Components Design Services.avif",
  },
];

/* ==========================================
   UPDATED PRODUCT CATEGORIES
   11 CATEGORIES
========================================== */

const categories: ProductCategory[] = [
  {
    id: "press-brake-tool",
    title: "Press Brake Tool",
    subtitle: "General Tooling",
    description:
      "Explore precision press brake tooling systems, tooling ranges and organized storage solutions for industrial sheet metal fabrication.",
    productIds: [23, 24, 26],
  },
  {
    id: "press-brake-punch",
    title: "Press Brake Punch",
    subtitle: "Precision Punches",
    description:
      "Explore straight, gooseneck, semi-gooseneck and acute-angle punches engineered for accurate bending and complex forming applications.",
    productIds: [27, 29, 33, 34, 32, 1, 2, 3, 4, 5],
  },
  {
    id: "press-brake-dies",
    title: "Press Brake Dies",
    subtitle: "Precision Dies",
    description:
      "Discover our complete range of press brake dies, including Single V Dies, Multi V Dies, profile dies and rolling dies for accurate sheet metal forming.",
    productIds: [25, 28, 6, 7, 8, 11, 12],
  },
  {
    id: "radius-tools-holder-inserts",
    title: "Radius Tools Holders & Inserts",
    subtitle: "Tool Holding & Inserts",
    description:
      "Precision radius tool holders and specialized inserts designed for secure positioning, accurate alignment and adaptable bending configurations.",
    productIds: [17, 22],
  },
  {
    id: "punch-clamps",
    title: "Punch Clamps",
    subtitle: "Precision Clamping",
    description:
      "Explore double-sided and single-side punch clamps engineered for secure tooling retention, efficient setup and reliable press brake operations.",
    productIds: [35, 36, 18],
  },
  {
    id: "press-brake-hemming-tools",
    title: "Press Brake Hemming Tools",
    subtitle: "Hemming Solutions",
    description:
      "Explore precision hemming dies, punch and die assemblies, and specialized tooling for clean folded edges and reliable sheet metal forming.",
    productIds: [37, 38, 13],
  },
  {
    id: "self-centering-2v-die",
    title: "Self Centering 2V Die",
    subtitle: "V-Die Systems",
    description:
      "Explore self-centering 2-V die configurations designed for accurate tooling alignment and consistent bending operations.",
    productIds: [16],
  },
  {
    id: "shear-blade",
    title: "Shear Blade",
    subtitle: "Precision Cutting",
    description:
      "Industrial shearing blades engineered for clean cuts, dimensional accuracy and dependable cutting performance.",
    productIds: [20],
  },
  {
    id: "joggle-tool-insert",
    title: "Joggle Tool & Insert",
    subtitle: "Specialized Forming",
    description:
      "Specialized press brake tooling for offset forming, stepped profiles and custom sheet metal bending applications.",
    productIds: [30],
  },
  {
    id: "amada-self-centering-1v-die",
    title: "Amada Type Self Centering 1V Die",
    subtitle: "Machine-Specific Tooling",
    description:
      "Self-centering V-die tooling configurations designed for accurate positioning and compatible press brake systems.",
    productIds: [31],
  },
  {
    id: "special-application",
    title: "Special Application",
    subtitle: "Custom Engineering",
    description:
      "Explore custom-engineered dies, specialized punches, precision metal component design and auxiliary tooling for industrial manufacturing applications.",
    productIds: [39, 9, 10, 14, 15, 19, 21],
  },
];

/* ==========================================
   PRODUCT LOOKUP
========================================== */

const productMap = new Map<number, Product>(
  products.map((product) => [product.id, product])
);

const getCategoryProducts = (
  category: ProductCategory
): Product[] =>
  category.productIds
    .map((id) => productMap.get(id))
    .filter((product): product is Product => Boolean(product));

/* ==========================================
   FEATURED PRODUCTS
========================================== */

const featuredIds = [
  35,
  36,
  37,
  38,
  27,
  29,
  25,
  28,
  39,
  30,
  31,
  20,
];

const featuredProducts = featuredIds
  .map((id) => productMap.get(id))
  .filter((product): product is Product => Boolean(product));

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
      aria-label={`View details for ${product.name}`}
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

        <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#0B141E] shadow-sm">
          <FiPlus size={17} />
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col items-center px-3 pb-5 pt-4 text-center">
        <h3
          className="text-[15px] font-bold leading-[1.45]"
          style={{ color: BRAND.navy }}
        >
          {product.name}
        </h3>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-bold text-amber-400">
          View Product
          <FiArrowUpRight size={16} />
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
  const categoryProducts =
    getCategoryProducts(category);

  const primaryProduct = categoryProducts[0];
  const otherProducts = categoryProducts.slice(1);
  const isDark = index % 4 === 1;

  return (
    <section
      id={`mobile-${category.id}`}
      className={`scroll-mt-32 overflow-hidden py-12 ${
        isDark ? "bg-[#101923]" : "bg-[#f7f8fa]"
      }`}
    >
      <div className="px-5">
        {/* CATEGORY HEADING */}

        <div className="flex flex-col items-center text-center">
          <span className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-amber-400">
            {category.subtitle}
          </span>

          <h2
            className={`font-heading text-[36px] font-bold leading-[1.12] tracking-[-0.035em] ${
              isDark
                ? "text-amber-400"
                : "text-[#0B141E]"
            }`}
          >
            {category.title}
          </h2>

          <p
            className="mx-auto mt-5 max-w-[340px] text-[15px] leading-[1.8]"
            style={{
              color: isDark
                ? BRAND.muted
                : BRAND.body,
            }}
          >
            {category.description}
          </p>

          <div className="mt-7 h-[3px] w-12 rounded-full bg-amber-400" />
        </div>

        {/* MAIN PRODUCT SPOTLIGHT */}

        {primaryProduct ? (
          <div className="mt-9">
            <button
              type="button"
              onClick={() => onView(primaryProduct)}
              aria-label={`View details for ${primaryProduct.name}`}
              className="group block w-full overflow-hidden rounded-[22px] bg-white text-left shadow-[0_14px_40px_rgba(0,0,0,0.08)] transition-transform active:scale-[0.99]"
            >
              <div className="relative aspect-square bg-[#eef1f4]">
                <Image
                  src={primaryProduct.image}
                  alt={primaryProduct.name}
                  fill
                  sizes="100vw"
                  className="object-contain p-7 transition-transform duration-500 group-hover:scale-105"
                />

                <span
                  className="absolute left-4 top-4 rounded-full border border-slate-200 bg-white/95 px-3 py-2 text-[12px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: BRAND.navy }}
                >
                  Product Spotlight
                </span>

                <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-[#0B141E] shadow-md">
                  <FiArrowUpRight size={20} />
                </span>
              </div>

              <div className="px-5 pb-7 pt-6 text-center">
                <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-amber-400">
                  Precision Engineered
                </p>

                <h3
                  className="mt-3 font-heading text-[25px] font-bold leading-tight"
                  style={{ color: BRAND.navy }}
                >
                  {primaryProduct.name}
                </h3>

                <p
                  className="mx-auto mt-4 max-w-sm text-[15px] leading-[1.8]"
                  style={{ color: BRAND.body }}
                >
                  {primaryProduct.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-amber-400">
                  Explore Product
                  <FiArrowRight size={18} />
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
              className={`mt-8 flex flex-col items-center border-t pt-7 text-center ${
                isDark
                  ? "border-slate-700"
                  : "border-slate-200"
              }`}
            >
              <p
                className="text-[15px] leading-relaxed"
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
                className={`mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-[14px] font-bold ${
                  isDark
                    ? "bg-amber-400 text-[#0B141E]"
                    : "bg-[#0B141E] text-white"
                }`}
              >
                Enquire About This Category
                <FiArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        ) : (
          /* CATEGORY WITHOUT PRODUCT IMAGES */

          <div
            className={`mt-9 overflow-hidden rounded-[22px] border p-7 text-center ${
              isDark
                ? "border-slate-700 bg-slate-800/60"
                : "border-slate-200 bg-white"
            }`}
          >
            <div
              className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${
                isDark
                  ? "bg-slate-700"
                  : "bg-amber-400/10"
              }`}
              style={{ color: BRAND.amber }}
            >
              <FiTool size={28} />
            </div>

            <h3
              className={`mt-6 font-heading text-[26px] font-bold leading-tight ${
                isDark
                  ? "text-amber-400"
                  : "text-[#0B141E]"
              }`}
            >
              Custom Tooling
              <br />
              Solutions
            </h3>

            <p
              className="mx-auto mt-4 max-w-[310px] text-[15px] leading-[1.8]"
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
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-[14px] font-bold text-[#0B141E]"
            >
              Discuss Your Requirements
              <FiArrowUpRight size={17} />
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

  const [mounted, setMounted] = useState(false);

  const featuredRef = useRef<HTMLDivElement>(null);

  const closeButtonRef =
    useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ==========================================
     FEATURED CAROUSEL NAVIGATION
  ========================================== */

  const scrollFeatured = (direction: number) => {
    featuredRef.current?.scrollBy({
      left: direction * 270,
      behavior: "smooth",
    });
  };

  /* ==========================================
     LOCK SCROLL AND ESCAPE KEY
  ========================================== */

  useEffect(() => {
    if (!selectedProduct) return;

    const previousOverflow =
      document.body.style.overflow;

    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      previouslyFocused?.focus();
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

        <div className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-full bg-amber-400/10 blur-[90px]" />

        <div className="relative flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-amber-400" />

            <span
              className="text-[12px] font-bold uppercase tracking-[0.12em]"
              style={{ color: BRAND.muted }}
            >
              Autozone Tooling / Product Range
            </span>
          </div>

          <h1 className="mt-8 font-heading text-[48px] font-bold leading-[1.02] tracking-[-0.045em] text-white">
            ENGINEERED
            <br />
            <span className="text-amber-400">
              TO PERFORM.
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-[350px] text-[16px] leading-[1.8]"
            style={{ color: BRAND.muted }}
          >
            Industrial-grade precision tooling for
            demanding sheet metal fabrication.
          </p>

          {/* HERO PRODUCT IMAGE */}

          <div className="relative mt-9 w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#e9edf1]">
            <div className="relative aspect-square">
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
              className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.08em]"
              style={{ color: BRAND.navy }}
            >
              Precision Press Brake Tooling
            </div>
          </div>

          <a
            href="#mobile-catalogue"
            className="mt-9 inline-flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.1em] text-amber-400"
          >
            Explore Our Collection
            <FiArrowDown size={18} />
          </a>
        </div>
      </section>

      {/* ==========================================
          FEATURED PRODUCTS GALLERY
      ========================================== */}

      <section className="bg-white py-14">
        <div className="px-5 text-center">
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-amber-400">
            Selected Products
          </span>

          <h2
            className="mt-4 font-heading text-[36px] font-bold leading-tight tracking-tight"
            style={{ color: BRAND.navy }}
          >
            Featured
            <br />
            <span className="text-amber-400">
              Engineering.
            </span>
          </h2>

          <p
            className="mx-auto mt-4 max-w-[330px] text-[15px] leading-[1.8]"
            style={{ color: BRAND.body }}
          >
            Explore a selection from our industrial tooling
            catalogue.
          </p>
        </div>

        {/* FEATURED PRODUCT CAROUSEL */}

        <div
          ref={featuredRef}
          className="mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none]"
        >
          {featuredProducts.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() =>
                setSelectedProduct(product)
              }
              aria-label={`View details for ${product.name}`}
              className="w-[260px] shrink-0 snap-center overflow-hidden rounded-[20px] border border-slate-200 bg-[#f5f6f8] text-left"
            >
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="260px"
                  className="object-contain p-5"
                />
              </div>

              <div className="flex min-h-[100px] items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-5">
                <span
                  className="text-[16px] font-bold leading-snug"
                  style={{ color: BRAND.navy }}
                >
                  {product.name}
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B141E] text-amber-400">
                  <FiArrowUpRight size={18} />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* CAROUSEL CONTROLS */}

        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollFeatured(-1)}
            aria-label="Scroll featured products left"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200"
            style={{ color: BRAND.navy }}
          >
            <FiChevronLeft size={23} />
          </button>

          <span className="px-3 text-[13px] font-semibold uppercase tracking-wider text-amber-400">
            Swipe to Explore
          </span>

          <button
            type="button"
            onClick={() => scrollFeatured(1)}
            aria-label="Scroll featured products right"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200"
            style={{ color: BRAND.navy }}
          >
            <FiChevronRight size={23} />
          </button>
        </div>
      </section>

      {/* ==========================================
          CATALOGUE INTRODUCTION
      ========================================== */}

      <section
        id="mobile-catalogue"
        className="scroll-mt-32 bg-[#f7f8fa] px-5 pb-12 pt-14 text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B141E] text-amber-400">
          <FiLayers size={27} />
        </div>

        <span className="mt-7 block text-[13px] font-bold uppercase tracking-[0.14em] text-amber-400">
          Complete Product Catalogue
        </span>

        <h2
          className="mt-4 font-heading text-[40px] font-bold leading-[1.08] tracking-[-0.035em]"
          style={{ color: BRAND.navy }}
        >
          BUILT FOR
          <br />
          <span className="text-amber-400">
            EVERY BEND.
          </span>
        </h2>

        <p
          className="mx-auto mt-6 max-w-[340px] text-[16px] leading-[1.8]"
          style={{ color: BRAND.body }}
        >
          Discover our complete range of precision tooling,
          organized by application and engineering requirements.
        </p>

        <div className="mx-auto mt-8 h-[3px] w-12 rounded-full bg-amber-400" />
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
        <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-amber-400/10 blur-[80px]" />

        <div className="relative flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/25 bg-amber-400/10 text-amber-400">
            <FiTool size={29} />
          </div>

          <span className="mt-7 text-[13px] font-bold uppercase tracking-[0.14em] text-amber-400">
            Custom Tooling Solutions
          </span>

          <h2 className="mt-5 font-heading text-[40px] font-bold leading-[1.1] tracking-tight text-white">
            YOUR DESIGN.
            <br />
            <span className="text-amber-400">
              OUR PRECISION.
            </span>
          </h2>

          <p
            className="mx-auto mt-6 max-w-[340px] text-[16px] leading-[1.8]"
            style={{ color: BRAND.muted }}
          >
            Share your machine specifications, technical
            drawings or custom bending requirements with
            our engineering team.
          </p>

          <Link
            href="/contact"
            className="mt-9 flex min-h-13 w-full items-center justify-center gap-3 rounded-xl bg-amber-400 px-6 py-4 text-[16px] font-bold text-[#0B141E]"
          >
            Request Custom Tooling
            <FiArrowUpRight size={20} />
          </Link>

          <a
            href="tel:+919011452458"
            className="mt-3 flex min-h-13 w-full items-center justify-center gap-3 rounded-xl border border-slate-700 px-6 py-4 text-[15px] font-semibold text-white"
          >
            <FiPhone size={18} />
            Speak With Our Team
          </a>
        </div>
      </section>

      {/* ==========================================
          PRODUCT DETAILS MODAL
          BELOW 104px NAVBAR
      ========================================== */}

      {mounted &&
        selectedProduct &&
        createPortal(
          <div
            className="fixed inset-x-0 bottom-0 top-[104px] z-[100] flex items-end bg-black/75 md:hidden"
            onClick={() =>
              setSelectedProduct(null)
            }
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={selectedProduct.name}
              className="max-h-full w-full overflow-y-auto overscroll-contain rounded-t-[28px] bg-white pb-[max(24px,env(safe-area-inset-bottom))]"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              {/* STICKY MODAL HEADER */}

              <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-slate-100 bg-white px-5 py-4">
                <span className="min-w-0 text-[12px] font-bold uppercase tracking-[0.1em] text-amber-400">
                  Autozone Tooling / Product Details
                </span>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() =>
                    setSelectedProduct(null)
                  }
                  aria-label="Close product details"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100"
                  style={{ color: BRAND.navy }}
                >
                  <FiX size={23} />
                </button>
              </div>

              {/* MODAL CONTENT */}

              <div className="px-5 pt-5 text-center">
                <div className="relative aspect-square overflow-hidden rounded-[20px] bg-[#f1f3f5]">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    sizes="100vw"
                    className="object-contain p-6"
                  />
                </div>

                <h3
                  className="mt-7 font-heading text-[31px] font-bold leading-tight"
                  style={{ color: BRAND.navy }}
                >
                  {selectedProduct.name}
                </h3>

                <p
                  className="mx-auto mt-5 max-w-sm text-[16px] leading-[1.8]"
                  style={{ color: BRAND.body }}
                >
                  {selectedProduct.description}
                </p>

                <div className="mt-8 space-y-3">
                  <Link
                    href={`/contact?product=${encodeURIComponent(
                      selectedProduct.name
                    )}`}
                    onClick={() =>
                      setSelectedProduct(null)
                    }
                    className="flex min-h-13 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-4 text-center text-[15px] font-bold text-[#0B141E]"
                  >
                    Enquire About This Product
                    <FiArrowRight size={18} />
                  </Link>

                  <a
                    href="tel:+919011452458"
                    className="flex min-h-13 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-[15px] font-semibold"
                    style={{ color: BRAND.navy }}
                  >
                    <FiPhone size={18} />
                    Call Our Engineering Team
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
