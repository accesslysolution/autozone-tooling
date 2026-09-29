import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container-x">
        <h2 className="text-4xl">What our clients say</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-l-2 border-straw pl-6">
              <blockquote className="leading-relaxed text-oxide/85">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="text-gauge">, {t.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}