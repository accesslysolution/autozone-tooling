export default function BulletList({
  items,
  color = "straw",
}: {
  items: readonly string[];
  color?: "straw" | "temper";
}) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={`mt-2 h-1.5 w-3 shrink-0 ${color === "straw" ? "bg-straw" : "bg-temper"}`}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}