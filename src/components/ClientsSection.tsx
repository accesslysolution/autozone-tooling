"use client";

import Image from "next/image";
import { useState } from "react";

const clients = [
  {
    name: "ADH Machine Tool",
    image: "/clients/ADH Machine Tool Logo.png",
  },
  {
    name: "Sumeco Group of Companies",
    image: "/clients/Sumeco Group Corporate Logo.png",
  },
  {
    name: "DC&T",
    image: "/clients/DC&T Belo India Company Logo.png",
  },
  {
    name: "PSR Toolings and Stampings",
    image: "/clients/PSR Toolings and Stampings Logo.png",
  },
  {
    name: "Rajesh Global",
    image: "/clients/Rajesh Global Logo with Orange RG Icon.png",
  },
  {
    name: "PAA",
    image: "/clients/PAA Logo with Rising Blue Dots.png",
  },
  {
    name: "Dynamic",
    image: "/clients/Dynamic Working Smarter Logo.png",
  },
  {
    name: "RSB",
    image: "/clients/RSB Globe and House Logo.png",
  },
  {
    name: "Finepac Structures",
    image: "/clients/Finepac Structures Logo on White.png",
  },
  {
    name: "Sawant Group",
    image: "/clients/Sawant Group Geometric Logo.png",
  },
  {
    name: "Glatt",
    image: "/clients/Glatt Logo with Red Swirl.png",
  },
  {
    name: "S&T Engineers",
    image: "/clients/S&T Engineers Globe Logo.png",
  },
  {
    name: "TRUMPF",
    image: "/clients/TRUMPF Logo with Blue Square.png",
  },
  {
    name: "Benninger",
    image: "/clients/Benninger Blue and Orange Logo.png",
  },
];

export default function ClientsSection() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the clients to create a seamless infinite loop.
  const scrollingClients = [...clients, ...clients];

  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-20 lg:py-28 border-y border-slate-800"
      aria-labelledby="clients-heading"
    >
      {/* Section Header */}
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

      {/* Infinite Logo Carousel */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge Fade Effects */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 lg:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 lg:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10" />

        <div
          className="flex w-max animate-clients-scroll"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex shrink-0 gap-5 sm:gap-7 pr-5 sm:pr-7"
              aria-hidden={copyIndex === 1}
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group w-40 sm:w-48 lg:w-52 shrink-0"
                >
                  {/* Logo Container */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white border border-slate-700/60 shadow-lg transition-all duration-300 group-hover:border-amber-500 group-hover:shadow-amber-500/10 group-hover:-translate-y-1">
                    <Image
                      src={client.image}
                      alt={copyIndex === 0 ? `${client.name} logo` : ""}
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 208px"
                      className="object-contain p-3 sm:p-4"
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

      {/* Bottom Supporting Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 text-center">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-slate-700" />
          <p className="text-slate-500 text-xs sm:text-sm tracking-wide">
            Precision Tooling. Reliable Partnerships.
          </p>
          <span className="h-px w-8 bg-slate-700" />
        </div>
      </div>

      {/* Component-Scoped Animation */}
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
          animation: clients-scroll 65s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-clients-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}