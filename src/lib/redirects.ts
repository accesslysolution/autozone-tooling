import { products } from "./products";
import { cities } from "./cities";

type Redirect = { source: string; destination: string; permanent: boolean };

export function legacyRedirects(): Redirect[] {
  const r: Redirect[] = [
    { source: "/index.html", destination: "/", permanent: true },
    { source: "/about-us.html", destination: "/about", permanent: true },
    { source: "/gallery.html", destination: "/gallery", permanent: true },
    { source: "/clients.html", destination: "/clients", permanent: true },
    { source: "/contact-us.html", destination: "/contact", permanent: true },
    { source: "/special-application.html", destination: "/products/special-application-tools", permanent: true },
    { source: "/assets/pdf/infinitytooling_pdf.pdf", destination: "/catalogue.pdf", permanent: true },
  ];

  const legacyCities = ["pune", ...cities.filter((c) => c.slug !== "mumbai").map((c) => c.slug)];

  for (const city of legacyCities) {
    const isPune = city === "pune";
    r.push({
      source: `/press-brake-tool-manufacturers-in-${city}.html`,
      destination: isPune ? "/products" : `/locations/${city}`,
      permanent: true,
    });
    for (const p of products) {
      if (!p.legacy) continue;
      r.push({
        source: `/${p.legacy}-manufacturers-in-${city}.html`,
        destination: isPune ? `/products/${p.slug}` : `/locations/${city}/${p.slug}`,
        permanent: true,
      });
    }
  }
  return r;
}