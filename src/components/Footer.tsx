import Link from "next/link";
import { products } from "@/lib/products";
import { cities } from "@/lib/cities";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-oxide text-steel/80">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold text-white">Autozone Tooling</p>
          <p className="mt-3 text-sm leading-relaxed">
            Precision press brake tooling and shear blades, made in Pune for fabricators across
            India. Hardened, ground and built to hold accuracy for years.
          </p>
          <div className="mt-5 flex gap-4 text-sm">
            <a href={site.socials.linkedin} className="hover:text-white" rel="noopener" target="_blank">LinkedIn</a>
            <a href={site.socials.instagram} className="hover:text-white" rel="noopener" target="_blank">Instagram</a>
            <a href={site.socials.facebook} className="hover:text-white" rel="noopener" target="_blank">Facebook</a>
          </div>
        </div>

        <div>
          <h2 className="text-lg text-white">Products</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg text-white">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/clients" className="hover:text-white">Clients</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><a href={site.catalogue} className="hover:text-white" download>Download catalogue</a></li>
          </ul>
          <h2 className="mt-8 text-lg text-white">We supply to</h2>
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/locations/${c.slug}`} className="hover:text-white">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic">
          <h2 className="text-lg text-white">Contact</h2>
          <p className="mt-4 text-sm">
            {site.md}
            <br />
            <span className="text-steel/60">{site.mdRole}</span>
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.phones.map((p) => (
              <li key={p.href}><a href={p.href} className="hover:text-white">{p.label}</a></li>
            ))}
            <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.region}
          </p>
        </address>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-steel/60 sm:flex-row sm:justify-between">
          <p>© {year} Autozone Tooling. All rights reserved.</p>
          <p>GST {site.gst}</p>
        </div>
      </div>
    </footer>
  );
}