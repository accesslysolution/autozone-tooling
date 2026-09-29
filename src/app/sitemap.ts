import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { cities } from "@/lib/cities";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${site.url}${path}`;
  return [
    { url: url("/"), lastModified: now, priority: 1 },
    ...["/about", "/products", "/gallery", "/clients", "/contact"].map((p) => ({
      url: url(p),
      lastModified: now,
      priority: 0.8,
    })),
    ...products.map((p) => ({ url: url(`/products/${p.slug}`), lastModified: now, priority: 0.9 })),
    ...cities.map((c) => ({ url: url(`/locations/${c.slug}`), lastModified: now, priority: 0.6 })),
    ...cities.flatMap((c) =>
      products.map((p) => ({ url: url(`/locations/${c.slug}/${p.slug}`), lastModified: now, priority: 0.5 }))
    ),
  ];
}