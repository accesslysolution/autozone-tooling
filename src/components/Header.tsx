"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products", dropdown: true },
  { href: "/gallery", label: "Gallery" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-oxide/10 bg-paper/95 backdrop-blur">
      <div className="hidden bg-oxide text-xs text-steel/80 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex gap-5">
            {site.phones.map((p) => (
              <a key={p.href} href={p.href} className="hover:text-white">
                {p.label}
              </a>
            ))}
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </div>
          <span>GST {site.gst}</span>
        </div>
      </div>

      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Autozone Tooling home">
          <Image src="/images/logo.png" alt="" width={44} height={44} className="h-10 w-auto" priority />
          <span className="font-display text-xl font-bold leading-none">Autozone Tooling</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map((l) =>
            l.dropdown ? (
              <div key={l.href} className="group relative">
                <Link
                  href={l.href}
                  className={`block px-3 py-2 text-sm font-medium ${isActive(l.href) ? "text-temper" : "hover:text-temper"}`}
                  aria-haspopup="true"
                >
                  {l.label}
                </Link>
                <div className="invisible absolute left-0 top-full w-72 border border-oxide/10 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-steel/60"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 text-sm font-medium ${isActive(l.href) ? "text-temper" : "hover:text-temper"}`}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            )
          )}
          <a href={site.catalogue} className="px-3 py-2 text-sm font-medium hover:text-temper" download>
            Catalogue
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary hidden sm:inline-flex">
            Get a quote
          </Link>
          <button
            type="button"
            className="p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-oxide/10 bg-white lg:hidden">
          <div className="container-x py-3">
            {links.map((l) =>
              l.dropdown ? (
                <div key={l.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 font-medium"
                    aria-expanded={productsOpen}
                    onClick={() => setProductsOpen((v) => !v)}
                  >
                    Products
                    <span aria-hidden="true">{productsOpen ? "−" : "+"}</span>
                  </button>
                  {productsOpen && (
                    <div className="mb-2 border-l-2 border-straw pl-4">
                      <Link href="/products" className="block py-2 text-sm font-medium">
                        All products
                      </Link>
                      {products.map((p) => (
                        <Link key={p.slug} href={`/products/${p.slug}`} className="block py-2 text-sm">
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={l.href} href={l.href} className="block py-3 font-medium">
                  {l.label}
                </Link>
              )
            )}
            <a href={site.catalogue} className="block py-3 font-medium" download>
              Download catalogue
            </a>
            <Link href="/contact" className="btn-primary mt-2 w-full">
              Get a quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}