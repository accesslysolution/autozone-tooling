
const features = [
  {
    title: "Hardened & Ground Steel",
    description:
      "Precision-engineered alloy steel tooling with advanced heat treatment options, including Full/Through Hardening, Induction Hardening, Laser Hardening, and Flame Hardening for superior wear resistance, strength, and durability.",
    path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "High Precision Accuracy",
    description:
      "Strict quality control ensures exact angular precision and consistent sheet metal bending results.",
    path: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Global Machine Compatibility",
    description:
      "Compatible with Amada, Trumpf, LVD, Bystronic, and standard press brake tooling systems.",
    path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

export default function HomeFeatures() {
  return (
    <section className="border-y border-slate-800 bg-slate-900 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-4"
            >
              <div className="shrink-0 rounded-lg bg-amber-500/10 p-3 text-amber-400">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={feature.path}
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
