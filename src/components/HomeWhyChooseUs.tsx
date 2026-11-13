
const advantages = [
  {
    title: "Advanced Metallurgy",
    description:
      "Using certified alloy steels treated with precision induction and vacuum hardening to withstand extreme tonnage.",
  },
  {
    title: "Custom Engineering",
    description:
      "Capability to manufacture complex multi-bend dies, door frame profiles, and custom radii from your drawings.",
  },
  {
    title: "Rigorous Inspection",
    description:
      "Strict multi-point quality checks ensuring absolute straightness and exact angular tolerances across full lengths.",
  },
  {
    title: "Reliable Support",
    description:
      "Dedicated technical consultation for tool selection, springback mitigation, and rapid quotation turnaround.",
  },
];

export default function HomeWhyChooseUs() {
  return (
    <section className="border-y border-slate-800 bg-slate-900/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            The Autozone Advantage
          </span>

          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Fabrication Shops Choose Us
          </h2>

          <p className="text-base text-slate-400">
            We combine metallurgical expertise with
            responsive customer support to keep your
            operations running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 font-bold text-amber-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12l4 4L19 6"
                  />
                </svg>
              </div>

              <h3 className="font-display text-lg font-bold text-white">
                {advantage.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-400">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
