import Link from "next/link";

type Crumb = { href?: string; label: string };

export default function PageBanner({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-oxide text-white">
      <div className="hatch absolute inset-y-0 right-0 hidden w-1/3 opacity-40 invert md:block" aria-hidden="true" />
      <div className="container-x relative py-14 md:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-2 text-sm text-steel/70">
            {crumbs.map((c, i) => (
              <li key={i} className="flex gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">{c.label}</Link>
                ) : (
                  <span aria-current="page" className="text-white">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-steel/80">{subtitle}</p>}
        <div className="mt-8 h-1 w-16 bg-straw" aria-hidden="true" />
      </div>
    </section>
  );
}