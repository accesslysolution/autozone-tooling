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
    name: "Press Brake Punches",
    category: "Punch Tooling",
    description: "Hardened and precision-ground punches compatible with Amada, Trumpf, LVD, and standard press brakes.",
    image: "/images/hero/1.jpg", // Replace with actual product image if available
    href: "/products/punches",
  },
  {
    id: 2,
    name: "Press Brake Dies",
    category: "Die Tooling",
    description: "High-grade alloy steel V-dies and multi-V dies designed for accurate, burr-free bending.",
    image: "/images/hero/2.jpg",
    href: "/products/dies",
  },
  {
    id: 3,
    name: "Hemming Tools",
    category: "Specialized Tooling",
    description: "Engineered for tight flat hems and safe closing operations across varied sheet thicknesses.",
    image: "/images/hero/3.jpg",
    href: "/products/hemming-tools",
  },
  {
    id: 4,
    name: "Radius Forming Tools",
    category: "Specialized Tooling",
    description: "Designed for smooth, consistent radius bends with minimal springback and high durability.",
    image: "/images/hero/4.jpg",
    href: "/products/radius-tools",
  },
  {
    id: 5,
    name: "Shear Blades",
    category: "Cutting Blades",
    description: "Heavy-duty guillotine and shear blades offering superior wear resistance and clean cuts.",
    image: "/images/hero/1.jpg",
    href: "/products/shear-blades",
  },
];

export default function ProductsCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If reached the end, loop back to start, else scroll right by 320px
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      {/* Carousel Controls */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Catalog Preview</span>
          <h2 className="text-3xl font-bold font-heading text-white tracking-tight">Explore Our Precision Range</h2>
        </div>
        <div className="hidden sm:flex space-x-3">
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="p-3 rounded-full bg-slate-900 border border-slate-700 hover:bg-amber-500 hover:text-slate-950 text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
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
            className="flex-shrink-0 w-80 bg-slate-900 border border-slate-800 rounded-lg overflow-hidden group snap-start flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl"
          >
            <div className="relative h-48 w-full overflow-hidden bg-slate-950">
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

      {/* Show More Products Button */}
      <div className="text-center mt-10">
        <Link
          href="/products"
          className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 py-3.5 rounded-md shadow-lg transition-colors text-base"
        >
          Show More Products
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}