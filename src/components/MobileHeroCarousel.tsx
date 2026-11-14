
"use client";

import { useState, useEffect, useRef } from "react";
import type { TouchEvent } from "react";
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
    title: "Advanced Precision",
    highlight: "Press Brake Tooling Machine",
    description:
      "Precision tooling solutions for modern CNC press brake machines. Engineered to deliver accurate bends, consistent performance, and dependable results across demanding sheet metal fabrication applications.",
    image: "/images/hero/1.avif",
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
    title: "Precision Cutting",
    highlight: "Shearing Blades",
    description:
      "High-performance industrial shearing blades manufactured for clean, accurate cutting. Designed for durability, superior edge retention, and reliable performance in demanding sheet metal cutting operations.",
    image: "/images/hero/2.avif",
    primaryCTA: {
      text: "View Shearing Blades",
      href: "/products#shear-blade",
    },
    secondaryCTA: {
      text: "Enquire Now",
      href: "/contact",
    },
  },
  {
    id: 3,
    title: "Specialized Forming",
    highlight: "Press Brake Tooling",
    description:
      "Precision-engineered tooling for accurate offset bending and specialized sheet metal forming. Developed to deliver consistent profiles, efficient operation, and reliable forming accuracy.",
    image: "/images/hero/3.avif",
    primaryCTA: {
      text: "Explore Press Brake Tools",
      href: "/products#joggle-tool-insert",
    },
    secondaryCTA: {
      text: "Get a Quote",
      href: "/contact",
    },
  },
  {
    id: 4,
    title: "Engineered for Accuracy",
    highlight: "Punches & Dies",
    description:
      "Precision-manufactured press brake punches and dies designed for consistent bending accuracy. Available in standard and customized profiles to support a wide range of industrial fabrication requirements.",
    image: "/images/hero/4.avif",
    primaryCTA: {
      text: "View Punches & Dies",
      href: "/products#press-brake-punch",
    },
    secondaryCTA: {
      text: "Request a Quote",
      href: "/contact",
    },
  },
  {
    id: 5,
    title: "Custom Engineered",
    highlight: "Press Brake Special Radius Toolings",
    description:
      "Specialized press brake radius tooling solutions developed for complex bending profiles and unique fabrication requirements. Precision-machined to support reliable forming, dimensional accuracy, and production efficiency.",
    image: "/images/hero/5.avif",
    primaryCTA: {
      text: "Explore Special Radius Tooling",
      href: "/products#special-application",
    },
    secondaryCTA: {
      text: "Discuss Requirements",
      href: "/contact",
    },
  },
  {
    id: 6,
    title: "Precision Offset Bending",
    highlight: "Press Brake Joggle Tools",
    description:
      "Advanced joggle tooling designed for precise offset bends, stepped profiles, and specialized sheet metal applications. Engineered to maintain consistency and accuracy across complex forming operations.",
    image: "/images/hero/6.avif",
    primaryCTA: {
      text: "View Joggle Tools",
      href: "/products#joggle-tool-insert",
    },
    secondaryCTA: {
      text: "Contact Our Team",
      href: "/contact",
    },
  },
];

const SLIDE_INTERVAL = 6000;

export default function MobileHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const activeSlide = slides[currentSlide];

  // ==========================================
  // AUTO SLIDE
  // ==========================================

  useEffect(() => {
    if (isPaused || isDragging) return;

    const timer = window.setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % slides.length
      );
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(timer);
  }, [isPaused, isDragging, currentSlide]);

  // ==========================================
  // NAVIGATION
  // ==========================================

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % slides.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // ==========================================
  // TOUCH SWIPE
  // ==========================================

  const handleTouchStart = (
    event: TouchEvent<HTMLElement>
  ) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;

    setIsDragging(true);
  };

  const handleTouchEnd = (
    event: TouchEvent<HTMLElement>
  ) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      setIsDragging(false);
      return;
    }

    const deltaX =
      event.changedTouches[0].clientX -
      touchStartX.current;

    const deltaY =
      event.changedTouches[0].clientY -
      touchStartY.current;

    // Navigate only for intentional horizontal swipes.
    if (
      Math.abs(deltaX) > 50 &&
      Math.abs(deltaX) > Math.abs(deltaY)
    ) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;

    setIsDragging(false);
  };

  const handleTouchCancel = () => {
    touchStartX.current = null;
    touchStartY.current = null;

    setIsDragging(false);
  };

  return (
    <section
      aria-label="Autozone Tooling mobile product highlights"
      aria-roledescription="carousel"
      className="relative w-full overflow-hidden bg-slate-950 text-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
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
      {/* ==========================================
          TOP BRAND STRIP
      ========================================== */}

      <div className="border-b border-slate-800 bg-slate-950 px-5 py-4">
        <div className="mx-auto flex max-w-lg items-center">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
              Autozone Tooling
            </span>
          </div>
        </div>
      </div>

      {/* ==========================================
          16:9 PRODUCT IMAGE WITH ARROWS
      ========================================== */}

      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive
                  ? "z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.highlight}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-contain"
              />
            </div>
          );
        })}

        {/* SUBTLE IMAGE GRADIENT */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-slate-950/30 to-transparent" />

        {/* ==========================================
            PREVIOUS ARROW - LEFT SIDE OF IMAGE
        ========================================== */}

        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/65 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950 active:scale-95"
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

        {/* ==========================================
            NEXT ARROW - RIGHT SIDE OF IMAGE
        ========================================== */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/65 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950 active:scale-95"
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

        {/* IMAGE LABEL */}
        <div className="pointer-events-none absolute bottom-3 left-4 z-20">
          <span className="rounded-sm border border-white/20 bg-slate-950/75 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
            Precision Engineering
          </span>
        </div>
      </div>

      {/* ==========================================
          SLIDE CONTENT
      ========================================== */}

      <div className="relative bg-slate-950 px-5 pb-6 pt-7">
        {/* DECORATIVE ACCENT */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-amber-500/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-lg">
          {/* SECTION LABEL */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-7 bg-amber-500" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
              Industrial Tooling Solutions
            </span>
          </div>

          {/* ==========================================
              HEADINGS AND DESCRIPTION
          ========================================== */}

          <div
            key={activeSlide.id}
            className="space-y-2"
            aria-live="off"
          >
            <h1 className="font-heading text-[clamp(1.8rem,7.5vw,2.5rem)] font-extrabold leading-[1.12] tracking-tight text-white">
              {activeSlide.title}
            </h1>

            <p className="font-heading text-[clamp(1.55rem,6.5vw,2.15rem)] font-bold leading-[1.18] tracking-tight text-amber-400">
              {activeSlide.highlight}
            </p>

            <p className="line-clamp-3 min-h-[4.5rem] pt-3 text-[13px] leading-6 text-slate-300 min-[390px]:text-sm">
              {activeSlide.description}
            </p>
          </div>

          {/* ==========================================
              CTA BUTTONS
          ========================================== */}

          <div className="mt-7 grid grid-cols-2 gap-3">
            {/* PRIMARY CTA */}
            <Link
              href={activeSlide.primaryCTA.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-3 py-3 text-center text-xs font-bold leading-snug text-slate-950 shadow-lg shadow-amber-500/10 transition-colors hover:bg-amber-400 active:bg-amber-400 min-[390px]:text-sm"
            >
              <span>{activeSlide.primaryCTA.text}</span>

              <svg
                className="h-4 w-4 shrink-0"
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

            {/* SECONDARY CTA */}
            <Link
              href={activeSlide.secondaryCTA.href}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-600 bg-slate-800 px-3 py-3 text-center text-xs font-semibold leading-snug text-white transition-colors hover:bg-slate-700 active:bg-slate-700 min-[390px]:text-sm"
            >
              {activeSlide.secondaryCTA.text}
            </Link>
          </div>

          {/* ==========================================
              SLIDE INDICATORS ONLY
          ========================================== */}

          <div className="mt-6 flex items-center justify-center border-t border-slate-800 pt-5">
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}: ${slide.highlight}`}
                  aria-current={
                    currentSlide === index
                      ? "true"
                      : undefined
                  }
                  className="flex h-10 items-center justify-center"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "w-7 bg-amber-500"
                        : "w-2 bg-slate-600 hover:bg-slate-400"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          BOTTOM ACCENT LINE
      ========================================== */}

      <div className="h-[3px] w-full bg-slate-800">
        <div
          className="h-full bg-amber-500 transition-all duration-500"
          style={{
            width: `${
              ((currentSlide + 1) / slides.length) * 100
            }%`,
          }}
        />
      </div>
    </section>
  );
}
