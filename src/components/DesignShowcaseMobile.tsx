
import Image from "next/image";
import Link from "next/link";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCrosshair,
} from "react-icons/fi";

/* ==========================================
   MOBILE DESIGN SHOWCASE

   Premium Editorial Layout
   Image Ratio: 16:9
   Visible Below 768px

   IMAGE ORDER:
   1. hero-6 — Engineering
   2. hero-2 — CAD Design
   3. hero-5 — Innovation
   4. hero-3 — Precision Tooling
   5. hero-7 — Plastic Die & Product
   6. hero-8 — Rubber Die & Product

   TYPOGRAPHY:
   - Intentional two-line headlines
   - Centered headline alignment
   - Responsive font sizing
   - Shortened mobile headlines
   - Left-aligned descriptions
========================================== */

interface Showcase {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  features: string[];
}

const showcases: Showcase[] = [
  {
    image: "/images/design/hero-6.avif",
    alt: "Industrial product engineering and manufacturing design",
    eyebrow: "Engineering in Focus",
    title: "Digital Design.",
    highlight: "Real-World Results.",
    description:
      "Our approach connects digital engineering with production requirements, helping turn complex components and tooling concepts into detailed designs ready for manufacturing.",
    features: [
      "Production-Oriented Design",
      "Manufacturing Drawings",
      "Custom Engineering Solutions",
    ],
  },
  {
    image: "/images/design/hero-2.avif",
    alt: "Advanced industrial CAD design and precision engineering",
    eyebrow: "Advanced CAD Engineering",
    title: "Ideas Into",
    highlight: "Engineering Reality.",
    description:
      "From initial sketches to detailed three-dimensional models, we transform engineering concepts into practical, manufacturing-ready design solutions.",
    features: [
      "Advanced 3D CAD Modelling",
      "Engineering Design Development",
      "Manufacturing-Ready Models",
    ],
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
  },
  {
    image: "/images/design/hero-7.avif",
    alt: "Precision plastic injection mould die and finished industrial plastic component",
    eyebrow: "Plastic Mould Engineering",
    title: "Precision Moulds.",
    highlight: "Perfectly Formed.",
    description:
      "From precision-engineered injection mould dies to complex plastic components, our design solutions focus on dimensional accuracy, efficient moulding, and reliable manufacturing performance. We develop detailed tooling concepts that support consistent product quality and production efficiency.",
    features: [
      "Plastic Injection Mould Design",
      "Precision Core & Cavity Engineering",
      "Industrial Plastic Product Design",
    ],
  },
  {
    image: "/images/design/hero-8.avif",
    alt: "Precision rubber mould die and finished industrial rubber components",
    eyebrow: "Rubber Mould Engineering",
    title: "Built for Flexibility.",
    highlight: "Made to Perform.",
    description:
      "Our rubber mould design solutions support the development of precision-engineered rubber components for industrial applications. From complex mould cavities to functional rubber products, we focus on accurate geometry, practical tooling design, and manufacturing requirements.",
    features: [
      "Rubber Compression Mould Design",
      "Precision Rubber Component Design",
      "Custom Rubber Tooling Solutions",
    ],
  },
];

/* ==========================================
   MOBILE SHOWCASE COMPONENT
========================================== */

export default function DesignShowcaseMobile() {
  return (
    <section
      id="design-showcase-mobile"
      className="block overflow-hidden bg-[#0B141E] text-white md:hidden"
    >
      {/* ======================================
          SHOWCASE SECTIONS
      ====================================== */}

      {showcases.map((item, index) => (
        <div
          key={item.image}
          className={`relative ${
            index % 2 === 0
              ? "bg-[#0B141E]"
              : "bg-[#101c29]"
          }`}
        >
          {/* ======================================
              SECTION NUMBER / LABEL
          ====================================== */}

          <div className="px-5 pb-5 pt-12">
            <div className="mx-auto flex max-w-lg items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-amber-400" />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-400">
                  Engineering Showcase
                </span>
              </div>

              <span className="text-[11px] font-bold tracking-[0.1em] text-slate-500">
                {String(index + 1).padStart(2, "0")}
                {" / "}
                {String(showcases.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* ======================================
              FULL WIDTH 16:9 IMAGE
          ====================================== */}

          <div className="relative w-full overflow-hidden bg-[#152331]">
            <div className="relative aspect-video w-full">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            {/* AMBER ACCENT */}

            <div
              className={`absolute bottom-0 h-[3px] w-24 bg-amber-400 ${
                index % 2 === 0 ? "left-0" : "right-0"
              }`}
            />
          </div>

          {/* ======================================
              CONTENT SECTION
          ====================================== */}

          <div className="relative px-5 pb-12 pt-9">
            {/* SUBTLE BACKGROUND LIGHT */}

            <div
              className={`pointer-events-none absolute top-10 h-64 w-64 rounded-full bg-amber-400/[0.035] blur-[100px] ${
                index % 2 === 0
                  ? "-left-32"
                  : "-right-32"
              }`}
            />

            <div className="relative mx-auto max-w-lg">
              {/* ======================================
                  CENTERED EYEBROW
              ====================================== */}

              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-6 shrink-0 bg-amber-400" />

                <span className="text-center text-[9px] font-bold uppercase tracking-[0.13em] text-amber-400 min-[375px]:text-[10px]">
                  {item.eyebrow}
                </span>

                <span className="h-px w-6 shrink-0 bg-amber-400" />
              </div>

              {/* ======================================
                  MOBILE HEADLINE

                  Intentionally two lines.
                  Center aligned.
                  No awkward word wrapping.
              ====================================== */}

              <div className="mx-auto w-full text-center">
                <h2 className="font-display text-[clamp(1.35rem,5.6vw,2.5rem)] font-bold leading-[1.18] tracking-[-0.04em] text-white">
                  <span className="block text-center">
                    {item.title}
                  </span>

                  <span className="mt-1.5 block text-center text-amber-400">
                    {item.highlight}
                  </span>
                </h2>

                {/* CENTERED ACCENT */}

                <div className="mx-auto mt-6 h-[2px] w-12 rounded-full bg-amber-400/70" />
              </div>

              {/* ======================================
                  DESCRIPTION
              ====================================== */}

              <p className="mt-7 max-w-md text-left text-[14px] leading-[1.85] text-slate-400">
                {item.description}
              </p>

              {/* ======================================
                  ENGINEERING FEATURES
              ====================================== */}

              <div className="mt-8 grid gap-3">
                {item.features.map((feature, featureIndex) => (
                  <div
                    key={feature}
                    className="flex min-h-[58px] items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.035] px-4 py-3"
                  >
                    {/* FEATURE ICON */}

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-amber-400/20 bg-amber-400/[0.07] text-amber-400">
                      <FiCheck className="h-4 w-4" />
                    </span>

                    {/* FEATURE NAME */}

                    <span className="flex-1 text-[13px] font-medium leading-relaxed text-slate-200">
                      {feature}
                    </span>

                    {/* FEATURE INDEX */}

                    <span className="text-[10px] font-semibold text-slate-600">
                      {String(featureIndex + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>

              {/* ======================================
                  CTA BUTTON
              ====================================== */}

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group flex min-h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-amber-400 px-5 py-3 text-center text-[13px] font-bold text-slate-950 transition-colors hover:bg-amber-300"
                >
                  Discuss Your Requirements

                  <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* ======================================
                  ENGINEERING SIGNATURE
              ====================================== */}

              <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-6">
                <FiCrosshair className="h-4 w-4 shrink-0 text-amber-400" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.11em] text-slate-400">
                  Autozone Tooling | Engineering Excellence
                </span>
              </div>
            </div>
          </div>

          {/* SECTION DIVIDER */}

          {index !== showcases.length - 1 && (
            <div className="h-px w-full bg-white/[0.06]" />
          )}
        </div>
      ))}

      {/* ======================================
          FINAL MOBILE CTA
      ====================================== */}

      <div className="relative overflow-hidden border-t border-white/10 bg-[#101c29] px-5 py-14">
        {/* AMBER BACKGROUND LIGHT */}

        <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-amber-400/[0.04] blur-[90px]" />

        <div className="relative mx-auto max-w-lg">
          {/* EYEBROW */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-amber-400" />

            <span className="text-center text-[10px] font-bold uppercase tracking-[0.13em] text-amber-400">
              Let&apos;s Build Something Better
            </span>

            <span className="h-px w-6 bg-amber-400" />
          </div>

          {/* CENTERED CTA HEADLINE */}

          <h2 className="font-display text-center text-[clamp(1.5rem,6vw,2.65rem)] font-bold leading-[1.2] tracking-[-0.04em] text-white">
            <span className="block">
              Have a Complex
            </span>

            <span className="mt-1 block text-amber-400">
              Design Challenge?
            </span>
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-12 rounded-full bg-amber-400/70" />

          {/* DESCRIPTION */}

          <p className="mt-6 max-w-md text-left text-[14px] leading-[1.8] text-slate-400">
            Let&apos;s explore the right engineering approach
            for your project. Our team is ready to help
            turn your requirements into practical,
            manufacturing-ready design solutions.
          </p>

          {/* CTA */}

          <Link
            href="/contact"
            className="group mt-8 flex min-h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-amber-400 px-5 py-3 text-[13px] font-bold text-slate-950 transition-colors hover:bg-amber-300"
          >
            Get in Touch

            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* FOOTER LABEL */}

          <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
            <FiCheck className="h-4 w-4 text-amber-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              Precision. Innovation. Engineering.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
