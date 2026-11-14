
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Gooseneck Punch",
    image: "/images/products/Gooseneck Punch.avif",
  },
  {
    name: "Multi V Die",
    image: "/images/products/Multi V Die.avif",
  },
  {
    name: "Shearing Blades",
    image: "/images/products/Shearing Blades.avif",
  },
  {
    name: "Hemming Die",
    image: "/images/products/Hemming Die.avif",
  },
];

export default function MobileHomeCompanyOverview() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex(
        (prev) => (prev + 1) % products.length
      );
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const activeProduct = products[activeIndex];

  return (
    <section
      aria-labelledby="mobile-company-heading"
      className="relative overflow-hidden bg-[#090d13] font-sans text-[#f4f1eb]"
    >
      {/* ==========================================
          INTRO / EDITORIAL HEADING
      ========================================== */}

      <div className="relative mx-auto max-w-lg px-6 pb-10 pt-16">
        {/* TOP EYEBROW */}
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-amber-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-400">
              The Company
            </span>
          </div>

          <span className="text-[10px] font-medium tracking-wider text-[#707985]">
            01 / AUTOZONE
          </span>
        </div>

        {/* MAIN HEADING */}
        <h2
          id="mobile-company-heading"
          className="text-[clamp(2.8rem,11vw,4.4rem)] font-semibold leading-[1.04] tracking-[-0.06em]"
        >
          Precision is
          <br />
          <span className="font-semibold tracking-[-0.04em] text-amber-400">
            our signature.
          </span>
        </h2>

        <p className="mt-7 max-w-[310px] text-[14px] leading-[1.9] text-[#9da5b0]">
          Engineering excellence from the industrial heart
          of Bhosari MIDC, Pune.
        </p>

        {/* DECORATIVE RULE */}
        <div className="mt-10 flex items-center gap-3">
          <span className="h-px w-12 bg-amber-400" />
          <span className="h-px flex-1 bg-[#29303a]" />
        </div>
      </div>

      {/* ==========================================
          CINEMATIC PRODUCT SHOWCASE
      ========================================== */}

      <div className="relative bg-[#141a22]">
        <div className="relative mx-auto max-w-lg px-4 pb-4 pt-4">
          {/* PRODUCT IMAGE STAGE */}
          <div className="relative aspect-[1.05/1] overflow-hidden bg-[#e8e9e8]">
            {products.map((product, index) => (
              <div
                key={product.name}
                aria-hidden={activeIndex !== index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  activeIndex === index
                    ? "z-10 scale-100 opacity-100"
                    : "pointer-events-none z-0 scale-[1.04] opacity-0"
                }`}
              >
                <Image
                  src={product.image}
                  alt={
                    activeIndex === index
                      ? product.name
                      : ""
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-contain p-5"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* CORNER DETAILS */}
            <div className="absolute left-4 top-4 z-20 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#374151]">
                Autozone / Tooling
              </span>
            </div>

            <div className="absolute bottom-4 right-4 z-20 text-[10px] font-semibold tracking-widest text-[#64748b]">
              {String(activeIndex + 1).padStart(2, "0")}
              {" / "}
              {String(products.length).padStart(2, "0")}
            </div>
          </div>

          {/* PRODUCT NAME / INDICATORS */}
          <div className="flex items-center justify-between gap-4 px-1 pb-3 pt-5">
            <div>
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-amber-400">
                Precision Engineered
              </p>

              <h3
                aria-live="polite"
                className="text-[19px] font-semibold tracking-tight text-white"
              >
                {activeProduct.name}
              </h3>
            </div>

            <div
              className="flex shrink-0 gap-1.5"
              aria-label="Select product"
            >
              {products.map((product, index) => (
                <button
                  key={product.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${product.name}`}
                  aria-pressed={activeIndex === index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-7 bg-amber-400"
                      : "w-3 bg-[#4b5563]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          COMPANY STORY
      ========================================== */}

      <div className="mx-auto max-w-lg px-6 pb-14 pt-14">
        {/* SECTION LABEL */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-6 bg-amber-400" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-400">
            Who We Are
          </span>
        </div>

        {/* STORY HEADING */}
        <h3 className="text-[clamp(1.8rem,7.5vw,2.5rem)] font-semibold leading-[1.2] tracking-[-0.04em]">
          Built for those
          <br />
          who demand{" "}
          <span className="font-semibold text-amber-400">
            more.
          </span>
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-6 text-[14px] leading-[1.95] text-[#a4acb7]">
          Autozone Tooling specializes in the design
          and manufacture of hardened press brake
          punches, precision dies, hemming tools,
          radius inserts, and industrial shear blades.
        </p>

        <p className="mt-4 text-[14px] leading-[1.95] text-[#89939f]">
          Combining advanced metallurgical processes
          with modern CNC grinding technology, we
          deliver tooling engineered for accuracy,
          durability, and consistent performance
          in demanding industrial environments.
        </p>

        {/* ==========================================
            MINIMAL STATS
        ========================================== */}

        <div className="mt-10 grid grid-cols-2 border-y border-[#29303a] py-7">
          {/* TOOLING SERIES */}
          <div className="border-r border-[#29303a] pr-5">
            <p className="text-[37px] font-semibold leading-none tracking-[-0.05em] text-white">
              22<span className="text-amber-400">+</span>
            </p>

            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#9da5b0]">
              Tooling Series
            </p>
          </div>

          {/* ALLOY STEEL */}
          <div className="pl-6">
            <p className="text-[37px] font-semibold leading-none tracking-[-0.05em] text-white">
              100<span className="text-amber-400">%</span>
            </p>

            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#9da5b0]">
              Alloy Steel
            </p>

            {/* UPDATED MATERIAL GRADES */}
            <p className="mt-2 text-[10px] leading-[1.7] text-[#89939f]">
              42CrMo4, EN19, D2 (Indian/Imported),
              EN31 &amp; C45
            </p>
          </div>
        </div>

        {/* ==========================================
            CTA
        ========================================== */}

        <div className="mt-9 flex flex-col gap-5">
          <Link
            href="/about"
            className="group flex min-h-12 items-center justify-between border-b border-amber-400/70 pb-3 text-[14px] font-semibold text-[#e9e5dd] transition-colors hover:text-amber-400"
          >
            Discover Our Expertise

            <svg
              className="h-5 w-5 text-amber-400 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </Link>

          <Link
            href="/products"
            className="group flex min-h-12 items-center justify-between text-[13px] font-medium text-[#89939f] transition-colors hover:text-white"
          >
            Explore Our Tooling Collection

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
                strokeWidth={1.5}
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
