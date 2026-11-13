
"use client";

import Image from "next/image";
import { useState } from "react";

const clients = [
  // ==========================================
  // EXISTING CLIENTS
  // ==========================================
  {
    name: "ADH Machine Tool",
    image: "/clients/ADH Machine Tool Logo.avif",
  },
  {
    name: "Sumeco Group of Companies",
    image: "/clients/Sumeco Group Corporate Logo.avif",
  },
  {
    name: "DC&T",
    image: "/clients/DC&T Belo India Company Logo.avif",
  },
  {
    name: "PSR Toolings and Stampings",
    image: "/clients/PSR Toolings and Stampings Logo.avif",
  },
  {
    name: "Rajesh Global",
    image: "/clients/Rajesh Global Logo with Orange RG Icon.avif",
  },
  {
    name: "PAA",
    image: "/clients/PAA Logo with Rising Blue Dots.avif",
  },
  {
    name: "Dynamic",
    image: "/clients/Dynamic Working Smarter Logo.avif",
  },
  {
    name: "RSB",
    image: "/clients/RSB Globe and House Logo.avif",
  },
  {
    name: "Finepac Structures",
    image: "/clients/Finepac Structures Logo on White.avif",
  },
  {
    name: "Sawant Group",
    image: "/clients/Sawant Group Geometric Logo.avif",
  },
  {
    name: "Glatt",
    image: "/clients/Glatt Logo with Red Swirl.avif",
  },
  {
    name: "S&T Engineers",
    image: "/clients/S&T Engineers Globe Logo.avif",
  },
  {
    name: "TRUMPF",
    image: "/clients/TRUMPF Logo with Blue Square.avif",
  },
  {
    name: "Benninger",
    image: "/clients/Benninger Blue and Orange Logo.avif",
  },

  // ==========================================
  // NEWLY ADDED CLIENTS
  // ==========================================
  {
    name: "AURA Signal",
    image: "/clients/AURA Signal.avif",
  },
  {
    name: "SAAKSHI",
    image: "/clients/SAAKSHI.avif",
  },
  {
    name: "KOTECH Infra Pvt. Ltd.",
    image: "/clients/KOTECH.avif",
  },
  {
    name: "KPEL Transformers",
    image: "/clients/KPEL Transformers.avif",
  },
  {
    name: "LeanFabLaser Engineering Pvt. Ltd.",
    image: "/clients/LeanFabLaser.avif",
  },
  {
    name: "PAI KANE GROUP",
    image: "/clients/PAI KANE GROUP.avif",
  },
  {
    name: "Proteck",
    image: "/clients/Proteck.avif",
  },
  {
    name: "Shree Refrigerations",
    image: "/clients/Shree Refrigerations.avif",
  },
];

export default function ClientsSection() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the client groups for seamless infinite scrolling.
  // Each group contains all 22 clients.
  const totalClients = clients.length;

  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-20 lg:py-28 border-y border-slate-800"
      aria-labelledby="clients-heading"
    >
      {/* ===================================== */}
      {/* SECTION HEADER                        */}
      {/* ===================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-8 h-px bg-amber-500" />

          <span className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
            Our Valued Clients
          </span>

          <span className="w-8 h-px bg-amber-500" />
        </div>

        <h2
          id="clients-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight"
        >
          Trusted by{" "}
          <span className="text-amber-400">
            Industry Leaders
          </span>
        </h2>

        <p className="text-slate-400 text-sm sm:text-base lg:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
          Proud to serve leading names in engineering,
          manufacturing, and industrial fabrication with
          precision CNC press brake tooling and shearing solutions.
        </p>
      </div>

      {/* ===================================== */}
      {/* INFINITE CLIENT LOGO CAROUSEL         */}
      {/* ===================================== */}

      <div
        className="relative w-full overflow-hidden"
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
        aria-label={`Our ${totalClients} featured clients`}
      >
        {/* Left Edge Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 lg:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10" />

        {/* Right Edge Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 lg:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10" />

        {/* Scrolling Track */}
        <div
          className="flex w-max animate-clients-scroll"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {/* Two identical groups for seamless loop */}
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex shrink-0 gap-5 sm:gap-7 pr-5 sm:pr-7"
              aria-hidden={copyIndex === 1}
            >
              {clients.map((client) => (
                <div
                  key={`${copyIndex}-${client.name}`}
                  className="group w-40 sm:w-48 lg:w-52 shrink-0"
                >
                  {/* Logo Container */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white border border-slate-700/60 shadow-lg transition-all duration-300 group-hover:border-amber-500 group-hover:shadow-amber-500/10 group-hover:-translate-y-1">
                    <Image
                      src={client.image}
                      alt={
                        copyIndex === 0
                          ? `${client.name} logo`
                          : ""
                      }
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 208px"
                      className="object-contain p-3 sm:p-4"
                      loading="lazy"
                    />
                  </div>

                  {/* Client Name */}
                  <div className="mt-4 text-center px-1">
                    <h3 className="text-slate-300 text-xs sm:text-sm font-semibold leading-snug group-hover:text-amber-400 transition-colors">
                      {client.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===================================== */}
      {/* BOTTOM SUPPORTING TEXT                */}
      {/* ===================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 text-center">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-slate-700" />

          <p className="text-slate-500 text-xs sm:text-sm tracking-wide">
            Precision Tooling. Reliable Partnerships.
          </p>

          <span className="h-px w-8 bg-slate-700" />
        </div>
      </div>

      {/* ===================================== */}
      {/* COMPONENT-SCOPED CAROUSEL ANIMATION   */}
      {/* ===================================== */}

      <style jsx>{`
        @keyframes clients-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-clients-scroll {
          animation: clients-scroll 100s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-clients-scroll {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
