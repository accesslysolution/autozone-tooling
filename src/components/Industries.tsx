import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section className="py-20">
      <div className="container-x">
        <h2 className="text-4xl">Industries we serve</h2>
        <ul className="mt-10 grid gap-px bg-oxide/10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <li key={i.name} className="bg-paper p-6">
              <p className="font-display text-2xl font-semibold">{i.name}</p>
              <p className="mt-1 text-sm text-gauge">{i.parts}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}