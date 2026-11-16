
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCpu,
  FiCrosshair,
  FiFileText,
  FiGrid,
  FiLayers,
  FiPenTool,
  FiSettings,
  FiTool,
  FiZap,
} from "react-icons/fi";

/* ==========================================
   DESKTOP COMPONENTS
========================================== */

import DesignHero from "@/components/DesignHero";
import DesignShowcase from "@/components/DesignShowcase";

/* ==========================================
   MOBILE COMPONENTS
========================================== */

import DesignHeroMobile from "@/components/DesignHeroMobile";
import DesignShowcaseMobile from "@/components/DesignShowcaseMobile";

/* ==========================================
   SEO METADATA
========================================== */

export const metadata: Metadata = {
  title: "Design Services | Autozone Tooling",
  description:
    "Professional product design, die design, fixture design, mould design, electrode design, 2D to 3D conversion, manufacturing drawings, and laser cutting drawing services at Autozone Tooling, Pune.",
};

/* ==========================================
   IMAGE DIRECTORY
========================================== */

const IMAGE_BASE = "/images/design";

/* ==========================================
   TYPES
========================================== */

interface FixtureGalleryImage {
  name: string;
  image: string;
}

interface DesignService {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: typeof FiLayers;
  image: string;
  tags: string[];
  gallery?: FixtureGalleryImage[];
}

/* ==========================================
   DESIGN SERVICES
   IDs MATCH NAVBAR DROPDOWN LINKS
========================================== */

const services: DesignService[] = [
  {
    id: "product-design",
    title: "Product Design",
    category: "Product Engineering",
    description:
      "Comprehensive product design solutions focused on functionality, manufacturability, precision, and performance.",
    icon: FiLayers,
    image: `${IMAGE_BASE}/product design.avif`,
    tags: ["3D Modelling", "Product Development"],
  },
  {
    id: "die-design",
    title: "Die Design",
    category: "Tooling Engineering",
    description:
      "Precision die design solutions developed for sheet metal forming, bending, and industrial manufacturing applications.",
    icon: FiTool,
    image: `${IMAGE_BASE}/Precision Stamping Die Assembly.avif`,
    tags: ["Press Tooling", "Die Engineering"],
  },

  /* ========================================
     FIXTURE DESIGN - FOUR IMAGE GALLERY
  ======================================== */

  {
    id: "fixture-design",
    title: "Fixture Design",
    category: "Manufacturing Solutions",
    description:
      "Custom fixture design solutions for precision checking, CNC machining, welding, and industrial workholding applications.",
    icon: FiCrosshair,

    image: `${IMAGE_BASE}/Industrial Precision Checking Fixture CF-078.avif`,

    gallery: [
      {
        name: "CNC Machining Fixture",
        image: `${IMAGE_BASE}/Precision CNC Machining Fixture with Clamped Workpieces.avif`,
      },
      {
        name: "Workholding Fixture",
        image: `${IMAGE_BASE}/Precision Industrial Workholding Fixture.avif`,
      },
      {
        name: "Checking Fixture",
        image: `${IMAGE_BASE}/Industrial Precision Checking Fixture CF-078.avif`,
      },
      {
        name: "Welding Fixture",
        image: `${IMAGE_BASE}/Precision Welding Fixture Assembly.avif`,
      },
    ],

    tags: [
      "Checking Fixtures",
      "Welding Fixtures",
      "Machining Fixtures",
      "Workholding Fixtures",
    ],
  },
{
  id: "mould-design",
  title: "Mould Design",
  category: "Precision Engineering",
  description:
    "Detailed mould design solutions developed around component geometry, tooling requirements, and production efficiency.",
  icon: FiGrid,
  image: `${IMAGE_BASE}/Precision Steel Injection Mold Set.avif`,
  tags: ["Mould Development", "CAD Design"],
},

{
  id: "electrode-design",
  title: "Electrode Design",
  category: "EDM Engineering",
  description:
    "Accurate electrode design for EDM applications, supporting complex geometries and precision manufacturing requirements.",
  icon: FiZap,
  image: `${IMAGE_BASE}/Precision Copper Electrode Assembly.avif`,
  tags: ["EDM Electrodes", "Complex Profiles"],
},

  {
    id: "2d-to-3d-design",
    title: "2D to 3D Design",
    category: "CAD Conversion",
    description:
      "Transformation of existing 2D engineering drawings into detailed 3D CAD models for visualization and manufacturing.",
    icon: FiCpu,
    image: `${IMAGE_BASE}/Mechanical CAD Drawing Workstation.avif`,
    tags: ["CAD Conversion", "3D Modelling"],
  },
  {
    id: "manufacturing-drawings",
    title: "Manufacturing Drawings",
    category: "Technical Documentation",
    description:
      "Production-ready engineering drawings with dimensions, tolerances, and technical details to support manufacturing.",
    icon: FiFileText,
    image: `${IMAGE_BASE}/Mechanical CAD Drawing Workstation.avif`,
    tags: ["Technical Drawings", "Production"],
  },
  {
    id: "laser-cutting-drawings",
    title: "Laser Cutting Drawings",
    category: "Sheet Metal Engineering",
    description:
      "Accurate 2D profiles and cutting layouts prepared for laser cutting and sheet metal fabrication processes.",
    icon: FiPenTool,
    image: `${IMAGE_BASE}/CAD Pattern.avif`,
    tags: ["Cutting Profiles", "Sheet Metal"],
  },
  {
    id: "2d-drawing-creation",
    title: "2D Drawing Creation",
    category: "Drafting Services",
    description:
      "Professional 2D CAD drafting for components, assemblies, fabrication details, and engineering documentation.",
    icon: FiSettings,
    image: `${IMAGE_BASE}/CAD Pattern.avif`,
    tags: ["CAD Drafting", "Engineering"],
  },
];

/* ==========================================
   SOFTWARE EXPERTISE
========================================== */

const softwares = [
  {
    name: "CATIA",
    type: "3D CAD & Product Design",
    description:
      "Advanced product modelling, complex geometry, and mechanical design.",
    image: `${IMAGE_BASE}/Precision Press Assembly.avif`,
  },
  {
    name: "AutoCAD",
    type: "2D Drafting & Documentation",
    description:
      "Technical drafting, manufacturing drawings, and precision layouts.",
    image: `${IMAGE_BASE}/Mechanical CAD Drawing Workstation.avif`,
  },
  {
    name: "SOLIDWORKS",
    type: "Mechanical 3D Design",
    description:
      "Parametric 3D modelling, mechanical components, and assemblies.",
    image: `${IMAGE_BASE}/V-Groove Die Engineering Render.avif`,
  },
  {
    name: "Navisworks",
    type: "3D Model Coordination",
    description:
      "Model review, visualization, and design coordination.",
    image: `${IMAGE_BASE}/Industrial BIM Clash Detection Visualization.avif`,
  },
  {
    name: "Lectra",
    type: "Specialized CAD Solutions",
    description:
      "Specialized design, pattern development, and CAD workflows.",
    image: `${IMAGE_BASE}/CAD Pattern.avif`,
  },
];

/* ==========================================
   ENGINEERING PROCESS
========================================== */

const process = [
  {
    title: "Requirement Analysis",
    description:
      "Understanding your component specifications, drawings, and design objectives.",
  },
  {
    title: "Concept Development",
    description:
      "Developing suitable engineering concepts and design approaches.",
  },
  {
    title: "CAD Design",
    description:
      "Creating detailed 2D drawings, 3D models, and engineering assemblies.",
  },
  {
    title: "Design Review",
    description:
      "Reviewing dimensions, functionality, and manufacturing requirements.",
  },
  {
    title: "Final Deliverables",
    description:
      "Preparing finalized design models and manufacturing documentation.",
  },
];

/* ==========================================
   CAPABILITIES
========================================== */

const capabilities = [
  "Product Engineering",
  "Tooling & Die Design",
  "2D / 3D CAD Modelling",
  "Manufacturing Documentation",
];

/* ==========================================
   ENGINEERING ADVANTAGES
========================================== */

const benefits = [
  "Precision-Focused Design",
  "Manufacturing-Oriented Approach",
  "2D & 3D CAD Capabilities",
  "Custom Engineering Solutions",
];

/* ==========================================
   DESIGN SERVICES PAGE
========================================== */

export default function DesignServicesPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B141E] text-white">

      {/* ======================================
          RESPONSIVE HERO SECTIONS
      ====================================== */}

      {/* Desktop / Tablet Hero */}

      <div className="hidden md:block">
        <DesignHero />
      </div>

      {/* Mobile Hero */}

      <div className="md:hidden">
        <DesignHeroMobile />
      </div>

      {/* ======================================
          CAPABILITY STRIP
      ====================================== */}

      <section className="border-b border-white/10 bg-[#101c29]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 px-5 sm:px-6 md:grid-cols-4 md:divide-y-0 lg:px-8">
          {capabilities.map((item) => (
            <div
              key={item}
              className="flex min-h-[105px] items-center gap-3 px-4 py-6 sm:px-6"
            >
              <span className="h-7 w-1 shrink-0 rounded-full bg-amber-400" />

              <p className="text-sm font-semibold leading-snug text-white">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================
          DESIGN SERVICES
      ====================================== */}

      <section
        id="design-services"
        className="scroll-mt-28 py-16 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* SECTION HEADING */}

          <div className="mb-12 flex flex-col justify-between gap-7 md:mb-16 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-amber-400" />

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
                  What We Design
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Our Design
                <br />
                <span className="text-amber-400">
                  Capabilities.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-[1.9] text-slate-400 md:text-base">
              Engineering-focused design services for
              components, tooling systems, fabrication,
              and industrial manufacturing requirements.
            </p>
          </div>

          {/* ======================================
              SERVICE CARDS
              EACH CARD HAS AN ANCHOR ID
          ====================================== */}

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="group flex h-full scroll-mt-32 flex-col overflow-hidden rounded-xl border border-slate-800 bg-[#111d2a] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl hover:shadow-black/20"
                >

                  {/* ==================================
                      SERVICE IMAGE OR GALLERY
                  ================================== */}

                  {service.gallery &&
                  service.gallery.length > 0 ? (

                    /* FIXTURE DESIGN IMAGE GALLERY */

                    <div className="grid aspect-square grid-cols-2 grid-rows-2 gap-1.5 overflow-hidden bg-[#172433] p-2">
                      {service.gallery.map((fixture) => (
                        <div
                          key={fixture.name}
                          className="group/fixture relative min-h-0 min-w-0 overflow-hidden rounded-md bg-white"
                        >
                          <Image
                            src={fixture.image}
                            alt={`${fixture.name} - Autozone Tooling`}
                            fill
                            sizes="(max-width: 767px) 50vw, (max-width: 1023px) 25vw, 17vw"
                            className="object-contain p-2 transition-transform duration-500 group-hover/fixture:scale-105"
                          />

                          {/* FIXTURE LABEL */}

                          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B141E]/95 via-[#0B141E]/70 to-transparent px-2 pb-2 pt-6">
                            <p className="text-center text-[9px] font-semibold leading-snug text-white sm:text-[10px]">
                              {fixture.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (

                    /* STANDARD SERVICE IMAGE */

                    <div className="relative aspect-square overflow-hidden bg-[#172433]">
                      <Image
                        src={service.image}
                        alt={`${service.title} engineering CAD visualization`}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B141E]/40 via-transparent to-transparent" />

                      {/* SERVICE ICON */}

                      <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-lg border border-amber-400/30 bg-[#0B141E]/90 text-amber-400 backdrop-blur-md">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  )}

                  {/* ==================================
                      SERVICE CONTENT
                  ================================== */}

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">
                      {service.category}
                    </p>

                    <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-[1.85] text-slate-400">
                      {service.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-slate-700 px-2.5 py-1.5 text-[10px] font-medium text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ======================================
              SERVICES FOOTER
          ====================================== */}

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-xl border border-slate-800 bg-[#111d2a] p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                Need a Custom Design Solution?
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
                Share your engineering requirements with
                our team to discuss a suitable design approach.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-300"
            >
              Get in Touch
              <FiArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================
          SOFTWARE EXPERTISE
      ====================================== */}

      <section
        id="design-software"
        className="scroll-mt-28 border-y border-white/10 bg-[#101c29] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* SECTION INTRO */}

          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-amber-400" />

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
                  Design Technology
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Software
                <br />
                <span className="text-amber-400">
                  Expertise.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-sm leading-[1.9] text-slate-400 md:text-base">
                Our design workflows incorporate
                professional CAD and engineering software
                to support detailed modelling, technical
                documentation, and manufacturing requirements.
              </p>

              <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-slate-300">
                <FiCpu className="h-5 w-5 text-amber-400" />
                CAD-Driven Engineering
              </div>
            </div>
          </div>

          {/* ======================================
              SOFTWARE CARDS
          ====================================== */}

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {softwares.map((software) => (
              <article
                key={software.name}
                className="group overflow-hidden rounded-xl border border-slate-700/70 bg-[#0B141E] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50"
              >

                {/* SOFTWARE IMAGE */}

                <div className="relative aspect-square overflow-hidden bg-[#172433]">
                  <Image
                    src={software.image}
                    alt={`${software.name} engineering design visualization`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B141E]/45 via-transparent to-transparent" />
                </div>

                {/* SOFTWARE CONTENT */}

                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-amber-400">
                      {software.name}
                    </h3>

                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                  </div>

                  <p className="mt-2 text-xs font-semibold text-amber-400">
                    {software.type}
                  </p>

                  <p className="mt-4 text-sm leading-[1.85] text-slate-400">
                    {software.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* ======================================
              SOFTWARE INFORMATION
          ====================================== */}

          <div className="mt-8 flex items-start gap-4 rounded-xl border border-amber-400/20 bg-amber-400/[0.05] p-5 sm:p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
              <FiCpu className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-sm font-bold text-white">
                Integrated Design Capabilities
              </h3>

              <p className="mt-2 text-sm leading-[1.85] text-slate-400">
                From initial CAD concepts and mechanical
                assemblies to detailed engineering drawings,
                our software workflows support design
                development and manufacturing documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          RESPONSIVE ENGINEERING SHOWCASE
      ====================================== */}

      {/* Desktop / Tablet Showcase */}

      <div className="hidden md:block">
        <DesignShowcase />
      </div>

      {/* Mobile Showcase */}

      <div className="md:hidden">
        <DesignShowcaseMobile />
      </div>

      {/* ======================================
          ENGINEERING WORKFLOW
      ====================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* SECTION HEADING */}

          <div className="mb-14 text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-amber-400" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
                Our Approach
              </span>

              <span className="h-px w-8 bg-amber-400" />
            </div>

            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              From Concept to{" "}
              <span className="text-amber-400">
                Creation.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-[1.9] text-slate-400">
              A structured design process focused on
              clarity, accuracy, and manufacturing requirements.
            </p>
          </div>

          {/* ======================================
              PROCESS CARDS
          ====================================== */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="group relative rounded-xl border border-slate-800 bg-[#111d2a] p-5 transition-colors hover:border-amber-400/30"
              >

                {/* MINIMAL TOP ACCENT */}

                <div className="mb-7 flex items-center justify-between">
                  <span className="h-1 w-10 rounded-full bg-amber-400" />

                  {index < process.length - 1 && (
                    <FiArrowRight className="h-4 w-4 text-slate-600 transition-colors group-hover:text-amber-400" />
                  )}
                </div>

                <h3 className="text-sm font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs leading-[1.85] text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          WHY CHOOSE AUTOZONE
      ====================================== */}

      <section className="border-y border-white/10 bg-[#101c29] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* LEFT CONTENT */}

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
                Engineering Advantage
              </p>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Designed With
                <br />
                Manufacturing in Mind.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-[1.9] text-slate-400">
                We focus on practical engineering
                solutions that bridge the gap between
                design requirements and real-world
                manufacturing applications.
              </p>
            </div>

            {/* ======================================
                BENEFITS
            ====================================== */}

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex min-h-[88px] items-center gap-3 rounded-lg border border-slate-700/70 bg-[#0B141E] p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-amber-400">
                    <FiCheck className="h-4 w-4" />
                  </span>

                  <span className="text-sm font-semibold leading-relaxed text-white">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          CONTACT CTA
      ====================================== */}

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/[0.06] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-[#1b2b3b] via-[#111e2b] to-[#0B141E] px-6 py-12 text-center sm:px-10 md:py-16">

            {/* CTA ICON */}

            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-amber-400">
              <FiPenTool className="h-7 w-7" />
            </div>

            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
              Let&apos;s Engineer Your Next Project
            </p>

            <h2 className="font-display mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Have a Design Requirement?
              <br />
              <span className="text-amber-400">
                Let&apos;s Discuss It.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-[1.9] text-slate-400 md:text-base">
              Whether you need product modelling, tooling
              design, manufacturing drawings, or CAD
              conversion, connect with Autozone Tooling
              to discuss your engineering requirements.
            </p>

            {/* ======================================
                CTA BUTTONS
            ====================================== */}

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-amber-400 px-7 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-300"
              >
                Request a Design Consultation

                <FiArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-amber-400 hover:text-amber-400"
              >
                Explore Our Products

                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
