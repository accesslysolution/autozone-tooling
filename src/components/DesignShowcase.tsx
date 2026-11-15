
import Image from "next/image";
import Link from "next/link";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCrosshair,
} from "react-icons/fi";

/* ==========================================
   FULLSCREEN SHOWCASE DATA

   1. hero-6 — LEFT
   2. hero-2 — RIGHT
   3. hero-5 — LEFT
   4. hero-3 — LEFT
   5. hero-7 — RIGHT (PLASTIC)
   6. hero-8 — LEFT (RUBBER)
========================================== */

const showcases = [
  {
    image: "/images/design/hero-6.avif",
    alt: "Industrial product engineering and manufacturing design",
    eyebrow: "Engineering in Focus",
    title: "From Digital Design",
    highlight: "to Real-World Results.",
    description:
      "Our approach connects digital engineering with production requirements, helping turn complex components and tooling concepts into detailed designs ready for manufacturing.",
    features: [
      "Production-Oriented Design",
      "Manufacturing Drawings",
      "Custom Engineering Solutions",
    ],
    reverse: false,
  },
  {
    image: "/images/design/hero-2.avif",
    alt: "Advanced industrial CAD design and precision engineering",
    eyebrow: "Advanced CAD Engineering",
    title: "Where Ideas Become",
    highlight: "Engineering Reality.",
    description:
      "From initial sketches to detailed three-dimensional models, we transform engineering concepts into practical, manufacturing-ready design solutions.",
    features: [
      "Advanced 3D CAD Modelling",
      "Engineering Design Development",
      "Manufacturing-Ready Models",
    ],
    reverse: true,
  },
  {
    image: "/images/design/hero-5.avif",
    alt: "Modern engineering design and technical CAD visualization",
    eyebrow: "Intelligent Design Solutions",
    title: "Innovation Meets",
    highlight: "Industrial Precision.",
    description:
      "Combining modern CAD capabilities with practical engineering knowledge, we create design solutions that support efficient production and complex manufacturing requirements.",
    features: [
      "Product Engineering",
      "2D to 3D Conversion",
      "Technical Documentation",
    ],
    reverse: false,
  },
  {
    image: "/images/design/hero-3.avif",
    alt: "Precision tooling and industrial mechanical design",
    eyebrow: "Precision Tooling Solutions",
    title: "Every Detail.",
    highlight: "Engineered to Matter.",
    description:
      "Precision is built into every stage of our design process. We develop detailed tooling solutions with a focus on dimensional accuracy, functionality, and manufacturing performance.",
    features: [
      "Precision Die Design",
      "Fixture Engineering",
      "Custom Tooling Development",
    ],
    reverse: false,
  },

  /* ==========================================
     PLASTIC INJECTION MOULD & PRODUCT
  ========================================== */

  {
    image: "/images/design/hero-7.avif",
    alt: "Precision plastic injection mould die and finished injection moulded industrial plastic component",
    eyebrow: "Plastic Mould Engineering",
    title: "Precision Moulds.",
    highlight: "Perfectly Formed Products.",
    description:
      "From precision-engineered injection mould dies to complex plastic components, our design solutions focus on dimensional accuracy, efficient moulding, and reliable manufacturing performance. We develop detailed tooling concepts that support consistent product quality and production efficiency.",
    features: [
      "Plastic Injection Mould Design",
      "Precision Core & Cavity Engineering",
      "Industrial Plastic Product Design",
    ],
    reverse: true,
  },

  /* ==========================================
     RUBBER MOULD & PRODUCT
  ========================================== */

  {
    image: "/images/design/hero-8.avif",
    alt: "Precision rubber mould die and finished industrial rubber components",
    eyebrow: "Rubber Mould Engineering",
    title: "Engineered for Flexibility.",
    highlight: "Designed for Performance.",
    description:
      "Our rubber mould design solutions support the development of precision-engineered rubber components for industrial applications. From complex mould cavities to functional rubber products, we focus on accurate geometry, practical tooling design, and manufacturing requirements.",
    features: [
      "Rubber Compression Mould Design",
      "Precision Rubber Component Design",
      "Custom Rubber Tooling Solutions",
    ],
    reverse: false,
  },
];

/* ==========================================
   FULLSCREEN DESIGN SHOWCASE
   DESKTOP / TABLET ONLY
========================================== */

export default function DesignShowcase() {
  return (
    <section
      id="design-showcase"
      className="relative hidden bg-[#0B141E] text-white md:block"
    >
      {/* ======================================
          FULLSCREEN IMAGE SECTIONS
      ====================================== */}

      {showcases.map((item, index) => (
        <div
          key={item.image}
          className="relative isolate flex min-h-[760px] w-full items-center overflow-hidden bg-[#0B141E] lg:min-h-screen"
        >
          {/* FULLSCREEN BACKGROUND IMAGE */}

          <Image
            src={item.image}
            alt={item.alt}
            fill
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* DIRECTIONAL DARK GRADIENT */}

          <div
            className={`pointer-events-none absolute inset-0 ${
              item.reverse
                ? "bg-gradient-to-l from-[#0B141E]/95 via-[#0B141E]/75 to-[#0B141E]/15"
                : "bg-gradient-to-r from-[#0B141E]/95 via-[#0B141E]/75 to-[#0B141E]/15"
            }`}
          />

          {/* VERTICAL CINEMATIC GRADIENT */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B141E]/65 via-transparent to-[#0B141E]/25" />

          {/* SUBTLE AMBER LIGHT */}

          <div
            className={`pointer-events-none absolute top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-amber-400/[0.05] blur-[120px] ${
              item.reverse ? "-right-40" : "-left-40"
            }`}
          />

          {/* CONTENT */}

          <div
            className={`relative z-10 mx-auto flex w-full max-w-7xl px-5 py-24 sm:px-6 md:py-28 lg:px-8 ${
              item.reverse ? "justify-end" : "justify-start"
            }`}
          >
            <div className="w-full max-w-[660px]">

              {/* EYEBROW */}

              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-amber-400" />

                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-400">
                  {item.eyebrow}
                </span>
              </div>

              {/* HEADING */}

              <h3 className="font-display text-[clamp(2.8rem,5.5vw,5.8rem)] font-bold leading-[1.06] tracking-[-0.05em] text-white">
                {item.title}
                <br />
                <span className="text-amber-400">
                  {item.highlight}
                </span>
              </h3>

              {/* DESCRIPTION */}

              <p className="mt-8 max-w-xl text-base leading-[1.9] text-slate-200 md:text-lg">
                {item.description}
              </p>

              {/* FEATURES */}

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {item.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400">
                      <FiCheck className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-sm font-medium text-slate-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA BUTTON */}

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-amber-400 px-7 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-300"
                >
                  Discuss Your Requirements

                  <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* CAPABILITY HIGHLIGHT */}

              <div className="mt-12 flex items-center gap-3 border-t border-white/20 pt-7">
                <FiCrosshair className="h-4 w-4 text-amber-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
                  Autozone Tooling | Engineering Excellence
                </span>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION INDICATOR */}

          <div
            className={`absolute bottom-8 z-10 hidden items-center gap-4 lg:flex ${
              item.reverse ? "left-8" : "right-8"
            }`}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-300">
              Engineering Showcase
            </span>

            <span className="h-px w-12 bg-amber-400" />

            <span className="text-xs font-bold text-amber-400">
              {String(index + 1).padStart(2, "0")}
              {" / "}
              {String(showcases.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      ))}

      {/* ======================================
          BOTTOM CTA
      ====================================== */}

      <div className="border-t border-white/10 bg-[#101c29]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              Have a Complex Design Challenge?
            </h3>

            <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-400">
              Let&apos;s explore the right engineering
              approach for your project.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-300"
          >
            Get in Touch

            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
