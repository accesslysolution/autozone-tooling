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
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Precision Engineered",
    highlight: "Press Brake Tooling",
    description:
      "Manufactured with hardened & ground high-grade alloy steel for maximum durability and clean bends. Compatible with Amada, Trumpf, LVD, and more.",
    image: "/images/hero/5.avif",
    primaryCTA: { text: "Explore Products", href: "/products" },
    secondaryCTA: { text: "Request a Quote", href: "/contact" },
  },
  {
    id: 2,
    title: "High Performance",
    highlight: "Punches & Dies",
    description:
      "Custom and standard tooling designed to handle heavy-duty sheet metal fabrication with unmatched accuracy and longevity.",
    image: "/images/hero/6.avif",
    primaryCTA: { text: "View Catalog", href: "/products" },
    secondaryCTA: { text: "Contact Us", href: "/contact" },
  },
  {
    id: 3,
    title: "Specialized Solutions",
    highlight: "Hemming & Radius Tools",
    description:
      "Engineered specifically for specialized forming requirements, offering precision, consistency, and reduced setup times.",
    image: "/images/hero/3.avif",
    primaryCTA: { text: "Learn More", href: "/products" },
    secondaryCTA: { text: "Get in Touch", href: "/contact" },
  },
  {
    id: 4,
    title: "Heavy Duty",
    highlight: "Shear Blades",
    description:
      "Built for long-lasting cutting performance and superior wear resistance across multiple industrial sheet metal applications.",
    image: "/images/hero/4.avif",
    primaryCTA: { text: "View Shear Blades", href: "/products" },
    secondaryCTA: { text: "Enquire Now", href: "/contact" },
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative w-full h-[calc(100vh-104px)] min-h-[500px] max-h-[700px] overflow-hidden bg-slate-950 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.highlight}
                fill
                priority={index === 0}
                className="object-cover object-center transition-transform duration-700 ease-out"
                style={{ transform: isActive ? "scale(1)" : "scale(1.05)" }}
              />
              {/* Dark industrial gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40" />
            </div>

            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto h-full flex items-center px-6 sm:px-8 lg:px-12">
              <div className="max-w-2xl space-y-4 sm:space-y-6">
                <div className="inline-block bg-amber-500 text-slate-950 font-semibold px-3 py-1 text-xs sm:text-sm tracking-wider uppercase rounded-sm">
                  Autozone Tooling
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-tight">
                  {slide.title}{" "}
                  <span className="text-amber-400 block sm:inline">{slide.highlight}</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <Link
                    href={slide.primaryCTA.href}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-md transition-colors shadow-lg"
                  >
                    {slide.primaryCTA.text}
                  </Link>
                  <Link
                    href={slide.secondaryCTA.href}
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

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/60 hover:bg-amber-500 hover:text-slate-950 text-white p-3 rounded-full transition-colors border border-slate-700/50 backdrop-blur-sm hidden sm:flex items-center justify-center"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/60 hover:bg-amber-500 hover:text-slate-950 text-white p-3 rounded-full transition-colors border border-slate-700/50 backdrop-blur-sm hidden sm:flex items-center justify-center"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
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