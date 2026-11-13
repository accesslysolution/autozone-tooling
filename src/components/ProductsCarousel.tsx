
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  id: number;
  title: string;
  highlight: string;
  description: string;
  image: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Precision Bending",
    highlight: "2-V Die & Setup",
    description:
      "Precision-engineered V-die tooling designed for accurate sheet metal bending, consistent angles, and dependable fabrication performance.",
    image: "/images/products/2-V Die & Setup.avif",
    primaryCTA: {
      text: "Explore Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Request a Quote",
      href: "/contact",
    },
  },
  {
    id: 2,
    title: "Accurate Positioning",
    highlight: "Back Gauge",
    description:
      "Precision back gauge solutions supporting accurate sheet positioning, repeatable bending operations, and efficient press brake production.",
    image: "/images/products/Back Gauge.avif",
    primaryCTA: {
      text: "Explore Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Request a Quote",
      href: "/contact",
    },
  },
  {
    id: 3,
    title: "Reliable Tooling",
    highlight: "Common Punch Holders & Inserts",
    description:
      "Durable punch holders and inserts engineered for secure tool positioning, reliable operation, and consistent bending performance.",
    image: "/images/products/Common Punch Holders & Inserts.avif",
    primaryCTA: {
      text: "View Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Enquire Now",
      href: "/contact",
    },
  },
  {
    id: 4,
    title: "Complex Bending",
    highlight: "Gooseneck Punch",
    description:
      "Specialized gooseneck punches designed to provide clearance for complex profiles, return flanges, and precision sheet metal forming.",
    image: "/images/products/Gooseneck Punch.avif",
    primaryCTA: {
      text: "Explore Tooling",
      href: "/products",
    },
    secondaryCTA: {
      text: "Request a Quote",
      href: "/contact",
    },
  },
  {
    id: 5,
    title: "Precision Finishing",
    highlight: "Hemming Die",
    description:
      "High-performance hemming dies developed for accurate sheet metal folding, clean edges, and consistent finishing operations.",
    image: "/images/products/Hemming Die.avif",
    primaryCTA: {
      text: "View Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Contact Us",
      href: "/contact",
    },
  },
  {
    id: 6,
    title: "Versatile Bending",
    highlight: "Multi V Die",
    description:
      "Multi-opening V-die tooling offering flexible bending configurations for different sheet thicknesses and fabrication requirements.",
    image: "/images/products/Multi V Die (2).avif",
    primaryCTA: {
      text: "Explore Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Enquire Now",
      href: "/contact",
    },
  },
  {
    id: 7,
    title: "Flexible Tooling",
    highlight: "Multi V Die",
    description:
      "Precision-machined multi V-dies designed for versatile sheet metal bending, repeatable results, and efficient tooling setups.",
    image: "/images/products/Multi V Die.avif",
    primaryCTA: {
      text: "View Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Request a Quote",
      href: "/contact",
    },
  },
  {
    id: 8,
    title: "Custom Forming",
    highlight: "Profile Die",
    description:
      "Specialized profile dies engineered to produce accurate formed sections and support demanding industrial fabrication applications.",
    image: "/images/products/Profile Die.avif",
    primaryCTA: {
      text: "Explore Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Contact Us",
      href: "/contact",
    },
  },
  {
    id: 9,
    title: "Engineered Profiles",
    highlight: "Profile Type Die Punch",
    description:
      "Precision profile punches and dies developed for specialized bending geometries and consistent forming accuracy.",
    image: "/images/products/Profile Type Die Punch.avif",
    primaryCTA: {
      text: "View Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Enquire Now",
      href: "/contact",
    },
  },
  {
    id: 10,
    title: "Secure Tooling",
    highlight: "Punch Clamps",
    description:
      "Reliable punch clamping solutions designed for secure tool retention, accurate alignment, and efficient press brake operations.",
    image: "/images/products/Punch Clamps.avif",
    primaryCTA: {
      text: "Explore Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Request a Quote",
      href: "/contact",
    },
  },
  {
    id: 11,
    title: "Advanced Bending",
    highlight: "Rolla Die",
    description:
      "Specialized rolling die solutions designed to support controlled sheet metal forming and reduce marking in suitable bending applications.",
    image: "/images/products/Rolla Die.avif",
    primaryCTA: {
      text: "View Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Contact Us",
      href: "/contact",
    },
  },
  {
    id: 12,
    title: "Precision Forming",
    highlight: "Semi Gooseneck Punch",
    description:
      "Semi-gooseneck punches engineered to provide additional forming clearance and accurate bending for specialized sheet metal profiles.",
    image: "/images/products/Semi Gooseneck Punch.avif",
    primaryCTA: {
      text: "Explore Tooling",
      href: "/products",
    },
    secondaryCTA: {
      text: "Enquire Now",
      href: "/contact",
    },
  },
  {
    id: 13,
    title: "High Performance",
    highlight: "Shearing Blades",
    description:
      "Precision-ground industrial shearing blades engineered for clean cutting, dependable wear resistance, and consistent production performance.",
    image: "/images/products/Shearing Blades.avif",
    primaryCTA: {
      text: "View Shearing Blades",
      href: "/products",
    },
    secondaryCTA: {
      text: "Request a Quote",
      href: "/contact",
    },
  },
  {
    id: 14,
    title: "Accurate Bending",
    highlight: "Single V Die",
    description:
      "Precision-machined single V-dies developed for consistent bend angles, reliable sheet metal forming, and industrial applications.",
    image: "/images/products/Single V Die.avif",
    primaryCTA: {
      text: "Explore Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Contact Us",
      href: "/contact",
    },
  },
  {
    id: 15,
    title: "Specialized Engineering",
    highlight: "Special Die – Side View",
    description:
      "Custom-designed press brake dies with specialized profiles for complex bending requirements and precision fabrication.",
    image: "/images/products/Special Die (Side View).avif",
    primaryCTA: {
      text: "View Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Request a Quote",
      href: "/contact",
    },
  },
  {
    id: 16,
    title: "Custom Precision",
    highlight: "Special Die Punch",
    description:
      "Engineered punch and die tooling for specialized sheet metal forming applications requiring precise profiles and repeatable results.",
    image: "/images/products/Special Die Punch.avif",
    primaryCTA: {
      text: "Explore Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Enquire Now",
      href: "/contact",
    },
  },
  {
    id: 17,
    title: "Custom Tooling",
    highlight: "Special Die",
    description:
      "Precision-manufactured special dies tailored for unique bending profiles, complex geometries, and demanding fabrication requirements.",
    image: "/images/products/Special Die.avif",
    primaryCTA: {
      text: "View Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Request a Quote",
      href: "/contact",
    },
  },
  {
    id: 18,
    title: "Dependable Performance",
    highlight: "Stock Semi Gooseneck Punch",
    description:
      "Versatile semi-gooseneck tooling designed for reliable bending performance, consistent accuracy, and practical forming applications.",
    image: "/images/products/Stock Semi Gooseneck Punch.avif",
    primaryCTA: {
      text: "Explore Tooling",
      href: "/products",
    },
    secondaryCTA: {
      text: "Contact Us",
      href: "/contact",
    },
  },
  {
    id: 19,
    title: "Precision Engineered",
    highlight: "Straight Punch – 6mm",
    description:
      "Precision-machined 6mm straight punches designed for accurate sheet metal bending and consistent industrial forming performance.",
    image: "/images/products/Straight Punch - 6mm (Front View).avif",
    primaryCTA: {
      text: "View Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Enquire Now",
      href: "/contact",
    },
  },
  {
    id: 20,
    title: "Reliable Bending",
    highlight: "Straight Punch – 6mm",
    description:
      "High-quality straight punch tooling developed for dependable bending accuracy, durable operation, and precision fabrication.",
    image: "/images/products/Straight Punch - 6mm SideView).avif",
    primaryCTA: {
      text: "Explore Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Request a Quote",
      href: "/contact",
    },
  },
  {
    id: 21,
    title: "High Productivity",
    highlight: "Turret Punches",
    description:
      "Precision turret punching tools engineered for accurate sheet metal punching, consistent hole quality, and efficient production.",
    image: "/images/products/Turret Punches.avif",
    primaryCTA: {
      text: "View Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Contact Us",
      href: "/contact",
    },
  },
  {
    id: 22,
    title: "Adjustable Precision",
    highlight: "Variable V Type Inserts",
    description:
      "Versatile V-type inserts developed to support adjustable bending configurations, precision forming, and flexible tooling applications.",
    image: "/images/products/Variable V Type Inserts.avif",
    primaryCTA: {
      text: "Explore Products",
      href: "/products",
    },
    secondaryCTA: {
      text: "Request a Quote",
      href: "/contact",
    },
  },
];

export default function ProductsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      className="relative overflow-hidden border-b border-slate-800 bg-slate-950 text-white"
      aria-label="Autozone Tooling Product Showcase"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget as Node | null
          )
        ) {
          setIsPaused(false);
        }
      }}
    >
      {/* DECORATIVE BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-slate-700/20 blur-3xl" />

        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900" />
      </div>

      {/* MAIN CAROUSEL */}
      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 pb-24 pt-16 sm:px-8 lg:min-h-[650px] lg:px-12 lg:pb-20 lg:pt-16">
        <div className="relative w-full">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;

            return (
              <div
                key={slide.id}
                aria-hidden={!isActive}
                inert={!isActive}
                className={`grid w-full grid-cols-1 items-center gap-10 transition-opacity duration-700 ease-in-out lg:grid-cols-2 lg:gap-14 ${
                  isActive
                    ? "relative z-10 opacity-100"
                    : "pointer-events-none absolute inset-0 z-0 opacity-0"
                }`}
              >
                {/* LEFT SIDE - TEXT CONTENT */}
                <div className="order-1 space-y-6">
                  {/* BRAND BADGE */}
                  <div className="inline-flex items-center gap-3">
                    <span className="h-px w-8 bg-amber-500" />

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 sm:text-sm">
                      Autozone Tooling
                    </span>
                  </div>

                  {/* HEADLINE */}
                  <div className="space-y-4">
                    <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                      {slide.title}

                      <span className="mt-2 block text-amber-400">
                        {slide.highlight}
                      </span>
                    </h1>

                    <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
                      {slide.description}
                    </p>
                  </div>

                  {/* CTA BUTTONS */}
                  <div className="flex flex-wrap gap-3 pt-3 sm:gap-4">
                    <Link
                      href={slide.primaryCTA.href}
                      tabIndex={isActive ? 0 : -1}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 sm:text-base"
                    >
                      {slide.primaryCTA.text}

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

                    <Link
                      href={slide.secondaryCTA.href}
                      tabIndex={isActive ? 0 : -1}
                      className="inline-flex items-center justify-center rounded-md border border-slate-600 bg-slate-800/70 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-amber-500 hover:bg-slate-800 sm:text-base"
                    >
                      {slide.secondaryCTA.text}
                    </Link>
                  </div>

                  {/* PRODUCT COUNTER */}
                  <div className="flex items-center gap-4 pt-5">
                    <span className="font-display text-2xl font-bold text-amber-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-10 bg-slate-600" />

                    <span className="text-sm font-medium tracking-wider text-slate-500">
                      {String(slides.length).padStart(2, "0")}
                    </span>

                    <span className="ml-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Product Showcase
                    </span>
                  </div>
                </div>

                {/* RIGHT SIDE - PRODUCT IMAGE */}
                <div className="relative order-2 w-full">
                  {/* SOFT BACKGROUND GLOW */}
                  <div
                    className="pointer-events-none absolute -inset-5 rounded-3xl bg-amber-500/5 blur-2xl"
                    aria-hidden="true"
                  />

                  {/* PRODUCT IMAGE CONTAINER */}
                  <div className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-[#f1f3f5] shadow-2xl">
                    <div className="relative aspect-[4/3] w-full sm:aspect-square lg:aspect-[5/4]">
                      <Image
                        src={slide.image}
                        alt={slide.highlight}
                        fill
                        priority={index === 0}
                        loading={index === 0 ? undefined : "lazy"}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain p-5 transition-transform duration-700 group-hover:scale-105 sm:p-8"
                      />
                    </div>

                    {/* PRODUCT LABEL */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7">
                      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-400 sm:text-xs">
                        Precision Industrial Tooling
                      </span>

                      <h2 className="font-display text-lg font-bold text-white sm:text-2xl">
                        {slide.highlight}
                      </h2>
                    </div>

                    {/* IMAGE TOP LABEL */}
                    <div className="absolute left-4 top-4 rounded-md border border-slate-200 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-sm sm:left-6 sm:top-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800 sm:text-xs">
                        Autozone Tooling
                      </span>
                    </div>
                  </div>

                  {/* FLOATING FEATURE TAG */}
                  <div className="absolute -bottom-4 right-4 flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 shadow-xl sm:right-8">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-white">
                        Precision Engineered
                      </p>

                      <p className="text-[10px] text-slate-400">
                        Industrial Tooling Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CAROUSEL CONTROLS */}
      <div className="absolute bottom-6 left-0 right-0 z-20 sm:bottom-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          {/* SLIDE INDICATORS */}
          <div className="flex max-w-[70%] flex-wrap items-center gap-1.5 sm:gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.highlight}`}
                aria-current={
                  index === currentSlide ? "true" : undefined
                }
                title={slide.highlight}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-7 bg-amber-500"
                    : "w-2 bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* PREVIOUS AND NEXT BUTTONS */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950 sm:h-12 sm:w-12"
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
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950 sm:h-12 sm:w-12"
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
      </div>

      {/* BOTTOM ACCENT */}
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
