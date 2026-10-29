import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Autozone Tooling in Bhosari MIDC, Pune, a trusted manufacturer of high-precision hardened and ground press brake punches, dies, hemming tools, and shear blades.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-white font-sans min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            About Autozone Tooling
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading tracking-tight">
            Precision Craftsmanship in Sheet Metal Tooling
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Based in the industrial hub of Bhosari MIDC, Pune, <strong className="text-white">Autozone Tooling</strong> is dedicated to delivering world-class press brake tooling and shear blades engineered for unmatched durability, tight tolerances, and superior operational performance.
          </p>
        </div>

        {/* Section 1: Who We Are / Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-heading tracking-tight text-white">
              Engineering Reliability for Modern Fabrication Shops
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              At <strong className="text-white">{site.name}</strong>, we understand that precision bending, multi-bend profiles, and clean sheet metal cuts are the vital backbones of modern industrial fabrication. With years of deep technical expertise and metallurgical know-how, we specialize in manufacturing hardened and ground press brake punches, custom dies, specialized hemming tools, radius inserts, and heavy-duty shear blades.
            </p>
            <p className="text-slate-300 leading-relaxed text-base">
              Our advanced workshop in Pune integrates state-of-the-art CNC grinding technology with rigorous vacuum and induction heat treatment protocols. This meticulous process guarantees that every tool leaving our facility possesses exceptional wear resistance, exact angular consistency, and a prolonged lifespan even under rigorous, continuous shop-floor conditions.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-6 py-3 rounded-md shadow-lg transition-colors"
              >
                Discuss Your Requirements
              </Link>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-xl font-bold font-heading text-amber-400">Core Engineering Highlights</h3>
            <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start space-x-3">
                <span className="text-amber-500 font-bold text-lg">✓</span>
                <span><strong className="text-white">Superior Metallurgy:</strong> Crafted using certified high-grade alloy steels (D2, 42CrMo4, EN31) paired with precise hardening techniques.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-500 font-bold text-lg">✓</span>
                <span><strong className="text-white">Universal Compatibility:</strong> Standardized segments and custom geometries fully compatible with leading press brake brands like Amada, Trumpf, LVD, and Bystronic.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-500 font-bold text-lg">✓</span>
                <span><strong className="text-white">Custom Profile Solutions:</strong> Tailored tooling configurations built precisely to component blueprints, door frame requirements, and unique tonnage specifications.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-500 font-bold text-lg">✓</span>
                <span><strong className="text-white">Strategic Pune Location:</strong> Positioned in Bhosari MIDC, Pune for seamless logistics, rapid prototyping, and prompt PAN-India dispatch.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-xl space-y-5 hover:border-amber-500/40 transition-colors">
            <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400">
              {/* Target / Mission Icon */}
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div className="space-y-2">
              <span className="text-amber-500 text-xs font-semibold tracking-wider uppercase">Our Purpose</span>
              <h3 className="text-2xl font-bold font-heading text-white">Our Mission</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To empower sheet metal fabrication workshops and heavy industries across India with precision-engineered, highly durable, and reliable press brake tooling and shear blades that maximize operational efficiency, minimize downtime, and ensure flawless bending accuracy.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-xl space-y-5 hover:border-amber-500/40 transition-colors">
            <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400">
              {/* Telescope / Vision Icon */}
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="space-y-2">
              <span className="text-amber-500 text-xs font-semibold tracking-wider uppercase">Future Outlook</span>
              <h3 className="text-2xl font-bold font-heading text-white">Our Vision</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To become the most trusted, innovative, and preferred manufacturer of specialized industrial tooling solutions globally, recognized for uncompromising metallurgical quality, advanced engineering craftsmanship, and long-term customer partnerships.
            </p>
          </div>
        </div>

        {/* Section 3: Infrastructure & Capability Expansion */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Infrastructure</span>
            <h2 className="text-3xl font-bold font-heading tracking-tight text-white">Equipped for High-Precision Manufacturing</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Precision tooling demands uncompromising manufacturing standards. Our facility features modern heavy-duty surface grinders, milling units, and dedicated quality inspection bays. By maintaining strict control over every stage of production—from raw material selection to final finish grinding—we eliminate surface flaws and ensure absolute straightness across full-length 835mm and 1000mm tool segments.
            </p>
          </div>
        </div>

        {/* Section 4: Our Manufacturing Pillars */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold font-heading tracking-tight">Our Core Pillars</h2>
            <p className="text-slate-400">The foundational principles driving our commitment to manufacturing excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Uncompromising Quality</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every single piece of steel undergoes meticulous hardness testing and micro-inspection to verify structural integrity before dispatch.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Technical Consultation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our specialists assist engineering teams with tool selection, mitigating springback challenges, and optimizing V-die opening ratios.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Reliable Partnerships</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We foster lasting business relationships with fabrication plants and heavy industries through dependable lead times and honest pricing.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 rounded-2xl p-10 sm:p-14 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight">
            Partner With Bhosari MIDC &amp; Pune&apos;s Trusted Tooling Specialist
          </h2>
          <p className="text-slate-900 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Elevate your press brake bending accuracy and shear blade performance. Contact our engineering team today for immediate quotations and technical support.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-slate-950 hover:bg-slate-900 text-white font-semibold px-8 py-3.5 rounded-md shadow-xl transition-all"
            >
              Contact Our Team
            </Link>
            <Link
              href="/products"
              className="bg-white/20 hover:bg-white/30 text-slate-950 font-semibold px-8 py-3.5 rounded-md border border-slate-950/20 backdrop-blur-sm transition-all"
            >
              Explore Products
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}