import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Press Brake Tool Manufacturer in Pune | Autozone Tooling",
    template: "%s | Autozone Tooling",
  },
  description:
    "Autozone Tooling manufactures hardened and ground press brake punches, dies, hemming tools, radius tools and shear blades in Pune. Compatible with Amada, Trumpf, LVD, Bystronic and more.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    images: ["/images/logo.png"],
  },
  icons: { icon: "/favicon.ico" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: site.phones[0].href.replace("tel:", ""),
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postal,
    addressRegion: site.address.state,
    addressCountry: "IN",
  },
  sameAs: Object.values(site.socials),
};

const skipLinkClass =
  "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${plex.variable}`}>
      <body>
        <a href="#main" className={skipLinkClass}>Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}