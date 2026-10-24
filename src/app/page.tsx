import HeroCarousel from "@/components/HeroCarousel";
import ProductsCarousel from "@/components/ProductsCarousel";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-slate-950 text-white font-sans">
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Trust & Features Bar */}
      <section className="bg-slate-900 border-y border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-start space-x-4 p-4">
              <div className="p-3 bg-amber-500/10 rounded-lg text-amber-400 flex-shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Hardened &amp; Ground Steel</h3>
                <p className="text-sm text-slate-400 mt-1">Manufactured using premium alloy steels with induction hardening for maximum wear resistance.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4">
              <div className="p-3 bg-amber-500/10 rounded-lg text-amber-400 flex-shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">High Precision Accuracy</h3>
                <p className="text-sm text-slate-400 mt-1">Strict quality control ensures exact angular precision and consistent sheet metal bending results.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4">
              <div className="p-3 bg-amber-500/10 rounded-lg text-amber-400 flex-shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Global Machine Compatibility</h3>
                <p className="text-sm text-slate-400 mt-1">Fully compatible with Amada, Trumpf, LVD, Bystronic, and standard press brake tooling systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company Overview Section with Logo & Product Imagery */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative w-14 h-14 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Autozone Tooling Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Company Overview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight leading-tight">
              Pioneering Sheet Metal Tooling Excellence from Akurdi, Pune
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Operating out of the industrial core of <strong className="text-white">Akurdi, Pune</strong>, Autozone Tooling has established itself as a premier name in precision engineering and sheet metal fabrication components. We specialize in designing and manufacturing hardened press brake punches, custom dies, hemming tools, radius inserts, and heavy-duty shear blades.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              Our advanced workshop combines rigorous metallurgical testing with modern CNC grinding technology, ensuring that every standard and custom tool we produce delivers absolute straightness, micron-level precision, and long-lasting durability under intense shop-floor conditions.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
              >
                Discover our full story &rarr;
              </Link>
            </div>
          </div>

          {/* Company Highlights & Visual Grid (Using Product Images) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
              <Image
                src="/images/products/5.avif"
                alt="Precision Punches"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-4">
                <span className="text-white font-semibold text-sm">Precision Punches</span>
              </div>
            </div>

            <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
              <Image
                src="/images/products/6.avif"
                alt="Hardened Dies"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-4">
                <span className="text-white font-semibold text-sm">Hardened Dies</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-2 shadow-lg flex flex-col justify-center">
              <div className="text-3xl font-bold font-heading text-amber-400">22+</div>
              <h3 className="text-white font-semibold text-sm">Tooling Series</h3>
              <p className="text-xs text-slate-400">Standard &amp; custom profiles.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-2 shadow-lg flex flex-col justify-center">
              <div className="text-3xl font-bold font-heading text-amber-400">100%</div>
              <h3 className="text-white font-semibold text-sm">Alloy Steel</h3>
              <p className="text-xs text-slate-400">En8, EN31, &amp; H13 grades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Auto-Sliding Showcase Section */}
      <section className="bg-slate-900/30 border-y border-slate-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsCarousel />
        </div>
      </section>

      {/* 5. Core Tooling Categories Grid with Product Images */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Specialized Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Our Core Tooling Categories
          </h2>
          <p className="text-slate-400 text-base">
            Engineered for versatility and heavy-duty industrial fabrication across Pune and India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group shadow-lg flex flex-col justify-between">
            <div className="relative aspect-square w-full bg-slate-950 overflow-hidden">
              <Image
                src="/images/products/1.avif"
                alt="Press Brake Punches"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold font-heading text-white">Press Brake Punches</h3>
                <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                  Straight, neck, acute, and specialized radius punches manufactured from high-grade En8 and alloy steels.
                </p>
              </div>
              <Link href="/products" className="inline-flex items-center text-xs font-semibold text-amber-500 hover:text-amber-400 pt-2">
                View Punches &rarr;
              </Link>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group shadow-lg flex flex-col justify-between">
            <div className="relative aspect-square w-full bg-slate-950 overflow-hidden">
              <Image
                src="/images/products/6.avif"
                alt="Dies & Multi V-Dies"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold font-heading text-white">Dies &amp; Multi V-Dies</h3>
                <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                  Single V dies, multi-V (4-way) dies, and complex 3-bend block dies for precise angular bending.
                </p>
              </div>
              <Link href="/products" className="inline-flex items-center text-xs font-semibold text-amber-500 hover:text-amber-400 pt-2">
                View Dies &rarr;
              </Link>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group shadow-lg flex flex-col justify-between">
            <div className="relative aspect-square w-full bg-slate-950 overflow-hidden">
              <Image
                src="/images/products/11.avif"
                alt="Hemming & Radius Tools"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold font-heading text-white">Hemming &amp; Radius Tools</h3>
                <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                  1000mm CNC hemming tools and round radius inserts ranging from R8 to R100 for scratch-free forming.
                </p>
              </div>
              <Link href="/products" className="inline-flex items-center text-xs font-semibold text-amber-500 hover:text-amber-400 pt-2">
                View Special Tools &rarr;
              </Link>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group shadow-lg flex flex-col justify-between">
            <div className="relative aspect-square w-full bg-slate-950 overflow-hidden">
              <Image
                src="/images/products/21.avif"
                alt="Shear Blades & Accessories"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold font-heading text-white">Shear Blades &amp; Accessories</h3>
                <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                  Heavy-duty industrial shearing blades and back gauge components offering burr-free clean cuts.
                </p>
              </div>
              <Link href="/products" className="inline-flex items-center text-xs font-semibold text-amber-500 hover:text-amber-400 pt-2">
                View Blades &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <section className="bg-slate-900/50 border-y border-slate-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">The Autozone Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Why Fabrication Shops Choose Us
            </h2>
            <p className="text-slate-400 text-base">
              We combine metallurgical expertise with responsive customer support to keep your operations running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 font-bold">
                ✓
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Advanced Metallurgy</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Using certified alloy steels treated with precision induction and vacuum hardening to withstand extreme tonnage.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 font-bold">
                ✓
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Custom Engineering</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Capability to manufacture complex multi-bend dies, door frame profiles, and custom radii from your drawings.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 font-bold">
                ✓
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Rigorous Inspection</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Strict multi-point quality checks ensuring absolute straightness and exact angular tolerances across full lengths.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 font-bold">
                ✓
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Reliable Support</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dedicated technical consultation for tool selection, springback mitigation, and rapid quotation turnaround.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Vision & Mission Snapshot Section */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Driving Principles</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Mission &amp; Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-xl space-y-4">
            <h3 className="text-2xl font-bold font-heading text-amber-400">Our Mission</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To empower sheet metal fabrication workshops and heavy industries across India with precision-engineered, highly durable, and reliable press brake tooling and shear blades that maximize operational efficiency, minimize downtime, and ensure flawless bending accuracy.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-xl space-y-4">
            <h3 className="text-2xl font-bold font-heading text-amber-400">Our Vision</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To become the most trusted, innovative, and preferred manufacturer of specialized industrial tooling solutions globally, recognized for uncompromising metallurgical quality, advanced engineering craftsmanship, and long-term customer partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Call To Action Banner */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight">
            Need Custom Press Brake Tooling or Shear Blades?
          </h2>
          <p className="text-slate-900 text-lg max-w-2xl mx-auto font-medium">
            Share your bending requirements, technical drawings, or machine specifications with our engineering team for a quick quote.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-slate-950 hover:bg-slate-900 text-white font-semibold px-8 py-3.5 rounded-md shadow-xl transition-all duration-200"
            >
              Request a Custom Quote
            </Link>
            <Link
              href="/products"
              className="bg-white/20 hover:bg-white/30 text-slate-950 font-semibold px-8 py-3.5 rounded-md border border-slate-950/20 backdrop-blur-sm transition-all"
            >
              Explore Full Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}