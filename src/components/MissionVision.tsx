const items = [
  {
    title: "Our mission",
    text: "To give every fabricator reliable, high-precision tooling at a fair price, backed by honest technical advice and on-time delivery.",
  },
  {
    title: "Our vision",
    text: "To become India's most trusted press brake tooling partner, always developing new tools around what our customers need on the shop floor.",
  },
];

export default function MissionVision({ dark = true }: { dark?: boolean }) {
  return (
    <section className={dark ? "bg-oxide py-20 text-white" : "bg-white py-20"}>
      <div className="container-x grid gap-12 md:grid-cols-2">
        {items.map((i) => (
          <div key={i.title}>
            <h2 className={`text-3xl ${dark ? "text-straw" : ""}`}>{i.title}</h2>
            <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-steel/85" : "text-oxide/80"}`}>
              {i.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}