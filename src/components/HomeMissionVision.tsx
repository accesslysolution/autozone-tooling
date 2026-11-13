
export default function HomeMissionVision() {
  return (
    <section className="mx-auto max-w-7xl space-y-12 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-amber-500">
          Our Driving Principles
        </span>

        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Mission &amp; Vision
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl sm:p-10">
          <h3 className="font-display text-2xl font-bold text-amber-400">
            Our Mission
          </h3>

          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            To empower sheet metal fabrication workshops
            and heavy industries across India with
            precision-engineered, highly durable, and
            reliable press brake tooling and shear blades
            that maximize operational efficiency, minimize
            downtime, and ensure flawless bending accuracy.
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl sm:p-10">
          <h3 className="font-display text-2xl font-bold text-amber-400">
            Our Vision
          </h3>

          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            To become the most trusted, innovative, and
            preferred manufacturer of specialized industrial
            tooling solutions globally, recognized for
            uncompromising metallurgical quality, advanced
            engineering craftsmanship, and long-term
            customer partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}
