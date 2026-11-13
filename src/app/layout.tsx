
import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";

import "./globals.css";

import { site } from "@/lib/site";

// DESKTOP COMPONENTS
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// MOBILE COMPONENTS
import MobileNavbar from "@/components/MobileNavbar";
import MobileFooter from "@/components/MobileFooter";

/* ==========================================
   GOOGLE FONTS
========================================== */

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

/* ==========================================
   SEO METADATA
========================================== */

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default:
      "Press Brake Tool Manufacturer in Pune | Autozone Tooling",
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

  icons: {
    icon: "/favicon.ico",
  },
};

/* ==========================================
   STRUCTURED DATA
========================================== */

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

/* ==========================================
   ACCESSIBILITY
========================================== */

const skipLinkClass =
  "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2";

/* ==========================================
   ROOT LAYOUT
========================================== */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${plex.variable}`}
    >
      <body className="bg-slate-950">
        {/* ACCESSIBILITY SKIP LINK */}
        <a href="#main" className={skipLinkClass}>
          Skip to content
        </a>

        {/* ==========================================
            FIXED RESPONSIVE NAVBAR
        ========================================== */}

        {/* MOBILE NAVBAR */}
        <div className="fixed inset-x-0 top-0 z-[9999] isolate md:hidden">
          <MobileNavbar />
        </div>

        {/* TABLET & DESKTOP NAVBAR */}
        <div className="fixed inset-x-0 top-0 z-50 hidden md:block">
          <Navbar />
        </div>

        {/* ==========================================
            MAIN PAGE CONTENT
        ========================================== */}

        {/*
          Adjust these values to match the actual
          rendered navbar heights, including any
          top contact/utility bars.

          Mobile: 104px
          Desktop: 112px
        */}
        <main
          id="main"
          className="min-h-screen scroll-mt-28 pt-[104px] md:scroll-mt-32 md:pt-[112px]"
        >
          {children}
        </main>

        {/* ==========================================
            RESPONSIVE FOOTER
        ========================================== */}

        {/* MOBILE FOOTER */}
        <div className="md:hidden">
          <MobileFooter />
        </div>

        {/* TABLET & DESKTOP FOOTER */}
        <div className="hidden md:block">
          <Footer />
        </div>

        {/* ==========================================
            LOCAL BUSINESS STRUCTURED DATA
        ========================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}
