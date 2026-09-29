const steps = [
  { title: "Understand the job", text: "Material, thickness, angle, radius and flange length." },
  { title: "Recommend the right tool", text: "A standard tool from stock, or a custom design." },
  { title: "Manufacture with precision", text: "Quality steel, heat treatment and precision grinding." },
  { title: "Deliver and support", text: "Safe packaging, on-time dispatch and after-sales guidance." },
];

export default function HowWeWork() {
  return (
    <section className="py-20">
      <div className="container-x">
        <h2 className="text-4xl">How we work</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-oxide pt-4">
              <span className="font-display text-4xl font-bold text-temper">{i + 1}</span>
              <p className="mt-2 font-semibold">{s.title}</p>
              <p className="mt-1 text-sm text-oxide/75">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}