
import Image from "next/image";
import Link from "next/link";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiChevronRight,
  FiCheck,
  FiCrosshair,
  FiLayers,
  FiTool,
  FiCpu,
  FiFileText,
} from "react-icons/fi";

/* ==========================================
   MOBILE DESIGN HERO
   Premium Editorial Layout
   Image Ratio: 16:9
   Visible Below 768px
========================================== */

const capabilities = [
  {
    icon: FiLayers,
    title: "Advanced CAD",
    subtitle: "3D Design & Modelling",
  },
  {
    icon: FiCrosshair,
    title: "Precision Tooling",
    subtitle: "Dies & Fixtures",
  },
  {
    icon: FiTool,
    title: "Manufacturing",
    subtitle: "Production-Ready Design",
  },
];

const designAdvantages = [
  {
    icon: FiCpu,
    title: "CAD Engineering",
    description: "Advanced digital modelling",
  },
  {
    icon: FiCrosshair,
    title: "Precision Design",
    description: "Accuracy in every detail",
  },
  {
    icon: FiFileText,
    title: "Technical Drawings",
    description: "Manufacturing documentation",
  },
  {
    icon: FiTool,
    title: "Custom Solutions",
    description: "Designed for your requirements",
  },
];

export default function DesignHeroMobile() {
  return (
    <div className="block overflow-hidden bg-[#0B141E] text-white md:hidden">

      {/* ======================================
          HERO 01
          ENGINEERING INNOVATION
      ====================================== */}

      <section className="relative bg-[#0B141E]">

        {/* BREADCRUMB */}

        <div className="border-b border-white/[0.07] px-5 py-5">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto flex max-w-lg items-center gap-2 text-[11px] font-medium text-slate-400"
          >
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
          </nav>
        </div>

        {/* ======================================
            FULL WIDTH 16:9 IMAGE
        ====================================== */}

        <div className="relative w-full overflow-hidden bg-[#101c29]">

          <div className="relative aspect-video w-full">

            <Image
              src="/images/design/hero-1.avif"
              alt="Precision engineering and industrial CAD design"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />

          </div>

          {/* IMAGE BOTTOM ACCENT */}

          <div className="absolute bottom-0 left-0 h-[3px] w-24 bg-amber-400" />

        </div>

        {/* ======================================
            HERO CONTENT
        ====================================== */}

        <div className="relative px-5 pb-12 pt-10">

          {/* SUBTLE BACKGROUND GLOW */}

          <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-400/[0.035] blur-[100px]" />

          <div className="relative mx-auto max-w-lg">

            {/* EYEBROW */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-8 bg-amber-400" />

              <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-amber-400">
                Engineering Beyond Imagination
              </span>

            </div>

            {/* MAIN HEADING */}

            <h1 className="font-display text-[clamp(2.65rem,10vw,4.2rem)] font-bold leading-[1.08] tracking-[-0.05em]">

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

            <p className="mt-6 max-w-md text-[14px] leading-[1.85] text-slate-400">
              Transforming complex engineering challenges
              into intelligent designs. From product
              development to precision tooling, we create
              CAD solutions engineered for real-world
              manufacturing.
            </p>

            {/* CTA BUTTONS */}

            <div className="mt-8 flex flex-col gap-3">

              <Link
                href="/contact"
                className="group flex min-h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-amber-400 px-5 py-3 text-[13px] font-bold text-slate-950 transition-colors hover:bg-amber-300"
              >

                Start Your Design Project

                <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

              </Link>

              <a
                href="#design-services"
                className="group flex min-h-[52px] w-full items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-[13px] font-semibold text-white transition-all hover:border-amber-400 hover:text-amber-400"
              >

                Explore Our Capabilities

                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

              </a>

            </div>

          </div>
        </div>

        {/* ======================================
            ENGINEERING CAPABILITIES
        ====================================== */}

        <div className="border-y border-white/[0.07] bg-[#101c29] px-5 py-8">

          <div className="mx-auto max-w-lg">

            <div className="mb-5 flex items-center justify-between">

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Our Core Expertise
              </span>

              <span className="h-px w-12 bg-amber-400/70" />

            </div>

            <div className="grid grid-cols-3 gap-2">

              {capabilities.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex min-h-[130px] flex-col rounded-lg border border-white/[0.08] bg-[#0B141E] p-3"
                  >

                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md border border-amber-400/20 bg-amber-400/[0.07] text-amber-400">

                      <Icon className="h-[17px] w-[17px]" />

                    </div>

                    <h3 className="text-[11px] font-bold leading-snug text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-[10px] leading-[1.5] text-slate-400">
                      {item.subtitle}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>
        </div>

      </section>

      {/* ======================================
          HERO 02
          PRECISION IN PRACTICE
      ====================================== */}

      <section className="relative bg-[#0B141E]">

        {/* SECTION TOP LABEL */}

        <div className="px-5 pb-6 pt-12">

          <div className="mx-auto flex max-w-lg items-center justify-between">

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-amber-400" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-400">
                Precision in Practice
              </span>

            </div>

            <span className="text-xs font-bold text-slate-500">
              02 / 02
            </span>

          </div>
        </div>

        {/* ======================================
            FULL WIDTH 16:9 IMAGE
        ====================================== */}

        <div className="relative w-full overflow-hidden bg-[#101c29]">

          <div className="relative aspect-video w-full">

            <Image
              src="/images/design/hero-4.avif"
              alt="Industrial precision tooling and engineering design"
              fill
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />

          </div>

          <div className="absolute bottom-0 right-0 h-[3px] w-24 bg-amber-400" />

        </div>

        {/* ======================================
            SECOND HERO CONTENT
        ====================================== */}

        <div className="relative px-5 pb-12 pt-10">

          <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-amber-400/[0.035] blur-[100px]" />

          <div className="relative mx-auto max-w-lg">

            {/* EYEBROW */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-8 bg-amber-400" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-400">
                From Concept to Manufacturing
              </span>

            </div>

            {/* HEADING */}

            <h2 className="font-display text-[clamp(2.55rem,9.5vw,4rem)] font-bold leading-[1.08] tracking-[-0.05em]">

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

            <p className="mt-6 max-w-md text-[14px] leading-[1.85] text-slate-400">
              Exceptional manufacturing begins with
              exceptional engineering. Our design solutions
              combine technical expertise, dimensional
              accuracy, and practical manufacturing knowledge.
            </p>

            {/* ======================================
                DESIGN ADVANTAGES
            ====================================== */}

            <div className="mt-9 grid grid-cols-2 gap-3">

              {designAdvantages.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-lg border border-white/[0.08] bg-[#101c29] p-4"
                  >

                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-amber-400/[0.08] text-amber-400">

                      <Icon className="h-[17px] w-[17px]" />

                    </div>

                    <h3 className="text-[12px] font-bold leading-snug text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-[10px] leading-relaxed text-slate-400">
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>

            {/* CTA */}

            <div className="mt-8">

              <a
                href="#design-software"
                className="group flex min-h-[52px] w-full items-center justify-center gap-3 rounded-lg border border-amber-400 bg-amber-400/[0.08] px-4 py-3 text-center text-[12px] font-bold text-amber-400 transition-all hover:bg-amber-400 hover:text-slate-950"
              >

                Discover Our Design Technology

                <FiArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

              </a>

            </div>

            {/* FOOTER LABEL */}

            <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6">

              <FiCheck className="h-4 w-4 text-amber-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Autozone Tooling | Engineering Excellence
              </span>

            </div>

          </div>
        </div>

      </section>

    </div>
  );
}
