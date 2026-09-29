import type { Row } from "@/lib/products";

export default function SpecTable({
  rows,
  head,
  caption,
}: {
  rows: Row[];
  head: [string, string];
  caption: string;
}) {
  return (
    <div className="overflow-x-auto border border-oxide/15 bg-white">
      <table className="w-full min-w-[28rem] text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-steel/70">
          <tr>
            <th scope="col" className="w-2/5 px-4 py-3 font-semibold">{head[0]}</th>
            <th scope="col" className="px-4 py-3 font-semibold">{head[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a} className="border-t border-oxide/10">
              <th scope="row" className="px-4 py-3 font-medium">{a}</th>
              <td className="px-4 py-3 text-oxide/80">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}