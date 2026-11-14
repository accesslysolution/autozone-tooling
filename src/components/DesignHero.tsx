
import Image from "next/image";
import Link from "next/link";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiChevronRight,
  FiCrosshair,
  FiCheck,
} from "react-icons/fi";

/* ==========================================
   DESKTOP / TABLET DESIGN HERO
   Visible at 768px and above
========================================== */

export default function DesignHero() {
  return (
    <div className="hidden md:block">
      {/* ==========================================
          HERO 01 — ENGINEERING INNOVATION
      ========================================== */}

      <section className="relative isolate flex min-h-[760px] w-full items-center overflow-hidden bg-[#0B141E] text-white lg:min-h-screen">
        {/* BACKGROUND IMAGE */}

        <Image
          src="/images/design/hero-1.avif"
          alt="Precision engineering, industrial tooling and CAD design"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* CINEMATIC OVERLAYS */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B141E]/95 via-[#0B141E]/75 to-[#0B141E]/15" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B141E]/70 via-transparent to-[#0B141E]/25" />

        {/* SUBTLE AMBER LIGHT */}

        <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-amber-400/[0.06] blur-[120px]" />

        {/* CONTENT */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-14 sm:px-6 md:py-24 lg:px-8">
          {/* BREADCRUMB */}

          <div className="mb-16 flex items-center gap-2 text-xs font-medium text-slate-300 lg:mb-20">
            <Link
              href="/"
              className="transition-colors hover:text-amber-400"
            >
              Home
            </Link>

            <FiChevronRight className="h-3 w-3" />

            <span className="text-amber-400">
              Design Services
            </span>
          </div>

          <div className="max-w-3xl">
            {/* EYEBROW */}

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-amber-400" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-400">
                Engineering Beyond Imagination
              </span>
            </div>

            {/* HEADING */}

            <h1 className="font-display text-[clamp(3.2rem,7vw,7rem)] font-bold leading-[1.03] tracking-[-0.055em] text-white">
              Every Great
              <br />
              Creation
              <br />
              <span className="text-amber-400">
                Begins With
              </span>
              <br />
              Precision.
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-8 max-w-xl text-base leading-[1.9] text-slate-200 md:text-lg">
              Transforming complex engineering challenges
              into intelligent designs. From product
              development to precision tooling, we create
              CAD solutions engineered for real-world
              manufacturing.
            </p>

            {/* CTA BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-amber-400 px-7 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-amber-300"
              >
                Start Your Design Project

                <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="#design-services"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-white/30 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-amber-400 hover:text-amber-400"
              >
                Explore Our Capabilities

                <FiArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* CAPABILITY HIGHLIGHTS */}

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/20 pt-7">
              {[
                "Advanced CAD",
                "Precision Tooling",
                "Manufacturing Design",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-200"
                >
                  <FiCrosshair className="h-4 w-4 text-amber-400" />

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM DECORATION */}

        <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-4 lg:flex">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-300">
            Explore Engineering Excellence
          </span>

          <div className="h-px w-14 bg-amber-400" />
        </div>
      </section>

      {/* ==========================================
          HERO 02 — PRECISION IN PRACTICE
      ========================================== */}

      <section className="relative isolate flex min-h-[650px] w-full items-center overflow-hidden bg-[#101c29] text-white lg:min-h-[780px]">
        {/* BACKGROUND IMAGE */}

        <Image
          src="/images/design/hero-4.avif"
          alt="Industrial precision tooling and advanced engineering design"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* RIGHT-TO-LEFT GRADIENT */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#0B141E]/95 via-[#0B141E]/70 to-[#0B141E]/10" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B141E]/60 via-transparent to-[#0B141E]/20" />

        {/* AMBER LIGHT ACCENT */}

        <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-amber-400/[0.05] blur-[120px]" />

        {/* CONTENT — RIGHT ALIGNED */}

        <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-end px-5 py-24 sm:px-6 lg:px-8">
          <div className="w-full max-w-[610px]">
            {/* EYEBROW */}

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-amber-400" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-400">
                From Concept to Manufacturing
              </span>
            </div>

            {/* HEADING */}

            <h2 className="font-display text-[clamp(2.9rem,5.5vw,5.8rem)] font-bold leading-[1.07] tracking-[-0.05em]">
              Designed
              <br />
              With Purpose.
              <br />
              <span className="text-amber-400">
                Engineered
              </span>
              <br />
              To Perform.
            </h2>

            {/* DESCRIPTION */}

            <p className="mt-8 max-w-lg text-base leading-[1.9] text-slate-200 md:text-lg">
              Exceptional manufacturing begins with
              exceptional engineering. Our design
              solutions combine technical expertise,
              dimensional accuracy, and practical
              manufacturing knowledge.
            </p>

            {/* DESIGN ADVANTAGES */}

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                "Production-Ready CAD Models",
                "Precision Die & Fixture Design",
                "Detailed Technical Drawings",
                "Custom Engineering Solutions",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400">
                    <FiCheck className="h-3.5 w-3.5" />
                  </span>

                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-10">
              <a
                href="#design-software"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-amber-400 bg-amber-400/10 px-7 py-3 text-sm font-bold text-amber-400 backdrop-blur-sm transition-all hover:bg-amber-400 hover:text-slate-950"
              >
                Discover Our Design Technology

                <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM DECORATION */}

        <div className="absolute bottom-8 left-8 z-10 hidden items-center gap-4 lg:flex">
          <div className="h-px w-14 bg-amber-400" />

          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-300">
            Precision in Every Detail
          </span>
        </div>
      </section>
    </div>
  );
}
