
"use client";

import { useState, useEffect } from "react";
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
  // ==========================================
  // 1. PRESS BRAKE TOOLING MACHINE
  // ==========================================
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

  // ==========================================
  // 2. SHEARING BLADES
  // ==========================================
  {
    id: 2,
    title: "Precision Cutting",
    highlight: "Shearing Blades",
    description:
      "High-performance industrial shearing blades manufactured for clean, accurate cutting. Designed for durability, superior edge retention, and reliable performance in demanding sheet metal cutting operations.",
    image: "/images/hero/2.avif",
    primaryCTA: {
      text: "View Shearing Blades",
      href: "/products",
    },
    secondaryCTA: {
      text: "Enquire Now",
      href: "/contact",
    },
  },

  // ==========================================
  // 3. PRESS BRAKE JOGGLE TOOL
  // ==========================================
  {
    id: 3,
    title: "Specialized Forming",
    highlight: "Press Brake Tooling",
    description:
      "Precision-engineered tooling for accurate offset bending and specialized sheet metal forming. Developed to deliver consistent profiles, efficient operation, and reliable forming accuracy.",
    image: "/images/hero/3.avif",
    primaryCTA: {
      text: "Explore Tools",
      href: "/products",
    },
    secondaryCTA: {
      text: "Get a Quote",
      href: "/contact",
    },
  },

  // ==========================================
  // 4. PUNCHES AND DIES
  // ==========================================
  {
    id: 4,
    title: "Engineered for Accuracy",
    highlight: "Punches & Dies",
    description:
      "Precision-manufactured press brake punches and dies designed for consistent bending accuracy. Available in standard and customized profiles to support a wide range of industrial fabrication requirements.",
    image: "/images/hero/4.avif",
    primaryCTA: {
      text: "View Punches & Dies",
      href: "/products",
    },
    secondaryCTA: {
      text: "Request a Quote",
      href: "/contact",
    },
  },

  // ==========================================
  // 5. PRESS BRAKE SPECIAL TOOLINGS
  // ==========================================
  {
    id: 5,
    title: "Custom Engineered",
    highlight: "Press Brake Special Toolings",
    description:
      "Specialized press brake tooling solutions developed for complex bending profiles and unique fabrication requirements. Precision-machined to support reliable forming, dimensional accuracy, and production efficiency.",
    image: "/images/hero/5.avif",
    primaryCTA: {
      text: "Explore Special Tooling",
      href: "/products",
    },
    secondaryCTA: {
      text: "Discuss Requirements",
      href: "/contact",
    },
  },

  // ==========================================
  // 6. PRESS BRAKE JOGGLE TOOLS
  // ==========================================
  {
    id: 6,
    title: "Precision Offset Bending",
    highlight: "Press Brake Joggle Tools",
    description:
      "Advanced joggle tooling designed for precise offset bends, stepped profiles, and specialized sheet metal applications. Engineered to maintain consistency and accuracy across complex forming operations.",
    image: "/images/hero/6.avif",
    primaryCTA: {
      text: "View Joggle Tools",
      href: "/products",
    },
    secondaryCTA: {
      text: "Contact Our Team",
      href: "/contact",
    },
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % slides.length
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Next slide
  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % slides.length
    );
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      className="relative w-full h-[calc(100vh-104px)] min-h-[500px] max-h-[700px] overflow-hidden bg-slate-950 text-white"
      aria-label="Autozone Tooling product highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ===================================== */}
      {/* HERO SLIDES                           */}
      {/* ===================================== */}

      {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive
                ? "opacity-100 z-10 pointer-events-auto"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.highlight}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center transition-transform duration-700 ease-out"
                style={{
                  transform: isActive
                    ? "scale(1)"
                    : "scale(1.05)",
                }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40" />
            </div>

            {/* ===================================== */}
            {/* HERO CONTENT                          */}
            {/* ===================================== */}

            <div className="relative max-w-7xl mx-auto h-full flex items-center px-6 sm:px-8 lg:px-12">
              <div className="max-w-2xl space-y-4 sm:space-y-6">

                {/* Brand Badge */}
                <div className="inline-block bg-amber-500 text-slate-950 font-semibold px-3 py-1 text-xs sm:text-sm tracking-wider uppercase rounded-sm">
                  Autozone Tooling
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-tight">
                  {slide.title}{" "}
                  <span className="text-amber-400 block sm:inline">
                    {slide.highlight}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">

                  <Link
                    href={slide.primaryCTA.href}
                    tabIndex={isActive ? 0 : -1}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-md transition-colors shadow-lg"
                  >
                    {slide.primaryCTA.text}
                  </Link>

                  <Link
                    href={slide.secondaryCTA.href}
                    tabIndex={isActive ? 0 : -1}
                    className="bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-600 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-md transition-colors backdrop-blur-sm"
                  >
                    {slide.secondaryCTA.text}
                  </Link>

                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* ===================================== */}
      {/* NAVIGATION ARROWS                     */}
      {/* ===================================== */}

      {/* Previous Arrow */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/60 hover:bg-amber-500 hover:text-slate-950 text-white p-3 rounded-full transition-colors border border-slate-700/50 backdrop-blur-sm hidden sm:flex items-center justify-center"
      >
        <svg
          className="w-6 h-6"
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

      {/* Next Arrow */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/60 hover:bg-amber-500 hover:text-slate-950 text-white p-3 rounded-full transition-colors border border-slate-700/50 backdrop-blur-sm hidden sm:flex items-center justify-center"
      >
        <svg
          className="w-6 h-6"
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

      {/* ===================================== */}
      {/* SLIDE INDICATORS                      */}
      {/* ===================================== */}

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}: ${slide.highlight}`}
            aria-current={
              index === currentSlide ? "true" : undefined
            }
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-3 bg-amber-500"
                : "w-3 h-3 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
