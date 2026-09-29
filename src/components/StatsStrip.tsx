import { site } from "@/lib/site";

export default function StatsStrip() {
  return (
    <section className="border-y border-oxide/10 bg-steel/50">
      <dl className="container-x grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4">
        {site.stats.map((s) => (
          <div key={s.label} className="border-l-2 border-temper pl-5">
            <dt className="text-sm text-gauge">{s.label}</dt>
            <dd className="font-display text-4xl font-bold">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}