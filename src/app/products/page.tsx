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
  href: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Press Brake R0.6 Straight 28 Degree Neck Punch",
    category: "Press Brake Punch",
    description: "Precision-engineered straight neck punch with R0.6 radius and 28-degree angle for specialized bending.",
    image: "/images/products/1.avif",
    href: "/products",
  },
  {
    id: 2,
    name: "Press Brake R0.5 Straight 30 Degree Punch",
    category: "Press Brake Punch",
    description: "High-accuracy straight punch featuring a 0.5mm radius and 30-degree profile for clean sheet metal forming.",
    image: "/images/products/2.avif",
    href: "/products",
  },
  {
    id: 3,
    name: "En8 Alloy Steel Press Brake Punch",
    category: "Press Brake Punch",
    description: "Manufactured from high-grade En8 alloy steel for exceptional durability, toughness, and wear resistance.",
    image: "/images/products/3.avif",
    href: "/products",
  },
  {
    id: 4,
    name: "Common Straight Punch Holders",
    category: "Tool Holders",
    description: "Robust and secure tool holders designed for standard straight press brake punches and quick changeovers.",
    image: "/images/products/4.avif",
    href: "/products",
  },
  {
    id: 5,
    name: "R1 Straight Punch 86deg",
    category: "Press Brake Punch",
    description: "Straight press brake punch with an R1 radius and 86-degree angle configuration for precise acute bending.",
    image: "/images/products/5.avif",
    href: "/products",
  },
  {
    id: 6,
    name: "Press Brake Special 3 Bend Block Die",
    category: "Press Brake Die",
    description: "Specialized 3-bend block die designed for complex multi-bend sheet metal forming profiles in a single stroke.",
    image: "/images/products/6.avif",
    href: "/products",
  },
  {
    id: 7,
    name: "Press Brake Single V Die",
    category: "Press Brake Die",
    description: "Standard high-accuracy single V die designed for clean, precise angle bending operations across various sheet thicknesses.",
    image: "/images/products/7.avif",
    href: "/products",
  },
  {
    id: 8,
    name: "Press Brake Special 3 Bend Die",
    category: "Press Brake Die",
    description: "Custom-engineered multi-bend die optimized for efficient production of 3-bend channels and profiles.",
    image: "/images/products/8.avif",
    href: "/products",
  },
  {
    id: 9,
    name: "Press Brake Special Door Frame Die",
    category: "Press Brake Die",
    description: "Specialized die configuration tailored specifically for precision manufacturing of metal door frames and casings.",
    image: "/images/products/9.avif",
    href: "/products",
  },
  {
    id: 10,
    name: "Multi V-Dies / 4V Dies for Press Brake Tooling",
    category: "Press Brake Die",
    description: "Versatile multi-V (4-way V) dies offering multiple opening sizes for rapid setup changes and flexibility.",
    image: "/images/products/10.avif",
    href: "/products",
  },
  {
    id: 11,
    name: "1000mm CNC Press Brake Hemming Tool",
    category: "Press Brake Tools",
    description: "1000mm precision CNC hemming tool engineered for tight flat hems and safe closing operations.",
    image: "/images/products/11.avif",
    href: "/products",
  },
  {
    id: 12,
    name: "Press Brake Machine Back Gauge",
    category: "Machine Accessories",
    description: "High-precision automated or manual back gauge system ensuring accurate positioning and repeatable sheet dimensions.",
    image: "/images/products/12.avif",
    href: "/products",
  },
  {
    id: 13,
    name: "R8 to R100 Round Type Radius Inserts",
    category: "Radius Tools",
    description: "Versatile round-type radius inserts ranging from R8 to R100 for smooth, consistent radius bends without marking sheets.",
    image: "/images/products/13.avif",
    href: "/products",
  },
  {
    id: 14,
    name: "Press Brake Die Punch",
    category: "Press Brake Tools",
    description: "Standard matched die and punch sets built for reliable daily bending operations and high wear resistance.",
    image: "/images/products/14.avif",
    href: "/products",
  },
  {
    id: 15,
    name: "835mm Special Radius Press Brake Tool",
    category: "Press Brake Tools",
    description: "Standard length 835mm specialized radius tooling designed for consistent segment bending across long workpieces.",
    image: "/images/products/15.avif",
    href: "/products",
  },
  {
    id: 16,
    name: "Press Brake Tools Stock",
    category: "Press Brake Tools",
    description: "Comprehensive inventory of ready-to-dispatch standard and custom press brake tooling solutions.",
    image: "/images/products/16.avif",
    href: "/products",
  },
  {
    id: 17,
    name: "Sheet Metal Bending Dies",
    category: "Press Tools",
    description: "High-quality bending dies built for industrial sheet metal fabrication and long tool life.",
    image: "/images/products/17.avif",
    href: "/products",
  },
  {
    id: 18,
    name: "Sheet Metal Bending Tool",
    category: "Press Tools",
    description: "Robust general-purpose bending tooling designed for accurate angle formation in diverse industrial applications.",
    image: "/images/products/18.avif",
    href: "/products",
  },
  {
    id: 19,
    name: "Press Brake Tools",
    category: "Press Brake Tools",
    description: "Complete line of industrial press brake tooling manufactured to tight tolerances for maximum reliability.",
    image: "/images/products/19.avif",
    href: "/products",
  },
  {
    id: 20,
    name: "Rolla V-Dies CNC Press Brakes",
    category: "Press Brake Tool",
    description: "Advanced Rolla V-dies for CNC press brakes ensuring scratch-free bending on sensitive and pre-painted sheets.",
    image: "/images/products/20.avif",
    href: "/products",
  },
  {
    id: 21,
    name: "Metal Shearing Blades",
    category: "Shear Blade",
    description: "Heavy-duty industrial shearing blades offering superior wear resistance and burr-free clean cuts.",
    image: "/images/products/21.avif",
    href: "/products",
  },
  {
    id: 22,
    name: "CNC Turret Punch Press",
    category: "Turret Punch Press",
    description: "High-performance CNC turret punch press tooling and machinery components for automated fabrication.",
    image: "/images/products/22.avif",
    href: "/products",
  },
];

export default function ProductsPage() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Extract unique categories for filtering
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  // Filtered products for the catalog grid
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Auto-scroll effect for the featured carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft: currentScrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (currentScrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-24">
      {/* Page Header Banner */}
      <section className="bg-slate-900 border-b border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <span>Autozone Tooling Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Precision Press Brake &amp; Sheet Metal Tools
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
            Explore our comprehensive range of high-performance punches, dies, shearing blades, and custom CNC tooling engineered for industrial excellence.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* Featured Products Carousel Section */}
        <section className="relative w-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Featured Range</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
                Highlighted Tooling
              </h2>
            </div>
            <div className="hidden sm:flex space-x-3">
              <button
                onClick={handleScrollLeft}
                aria-label="Scroll left"
                className="p-3 rounded-full bg-slate-900 border border-slate-700 hover:bg-amber-500 hover:text-slate-950 text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleScrollRight}
                aria-label="Scroll right"
                className="p-3 rounded-full bg-slate-900 border border-slate-700 hover:bg-amber-500 hover:text-slate-950 text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sliding Track */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory focus:outline-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-80 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group snap-start flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-slate-950">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-400 text-xs font-semibold px-2.5 py-1 rounded border border-slate-700">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <Link
                    href={product.href}
                    className="inline-flex items-center text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    View Specifications
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Full Product Catalog Grid Section with Category Filters */}
        <section className="space-y-8 pt-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Full Directory</span>
              <h2 className="text-3xl font-bold font-heading text-white tracking-tight">
                All Products &amp; Components ({products.length})
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-amber-500 text-slate-950 font-semibold shadow-md"
                      : "bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-slate-950">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-400 text-xs font-semibold px-2.5 py-1 rounded border border-slate-700">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between">
                    <Link
                      href={product.href}
                      className="inline-flex items-center text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
                    >
                      View Specifications
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      href="/contact"
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded transition-colors"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-slate-900/50 border border-slate-800 rounded-xl">
              <p className="text-slate-400 text-lg">No products found in this category.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}