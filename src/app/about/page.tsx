import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Autozone Tooling in Pune, a trusted manufacturer of high-precision hardened and ground press brake punches, dies, hemming tools, and shear blades.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-white font-sans min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            About Autozone Tooling
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading tracking-tight">
            Precision Craftsmanship in Sheet Metal Tooling
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Based in the industrial hub of Pune, Maharashtra, Autozone Tooling is dedicated to delivering world-class press brake tooling and shear blades engineered for unmatched durability and performance.
          </p>
        </div>

        {/* Section 1: Who We Are / Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-heading tracking-tight text-white">
              Engineering Reliability for Modern Fabrication Shops
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              At <strong className="text-white">{site.name}</strong>, we understand that precision bending and clean cutting are the backbones of modern sheet metal fabrication. With years of technical expertise and deep industry knowledge, we specialize in manufacturing hardened and ground press brake punches, dies, specialized hemming tools, radius tools, and heavy-duty shear blades.
            </p>
            <p className="text-slate-300 leading-relaxed text-base">
              Our state-of-the-art facility in Pune combines advanced CNC grinding machinery with rigorous metallurgical heat treatment processes. This ensures that every tool leaving our workshop offers superior wear resistance, exact angular tolerance, and a long operational lifespan.
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
            <h3 className="text-xl font-bold font-heading text-amber-400">Core Highlights</h3>
            <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start space-x-3">
                <span className="text-amber-500 font-bold text-lg">✓</span>
                <span><strong className="text-white">Advanced Metallurgy:</strong> Manufactured using high-grade alloy steel with precision induction hardening.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-500 font-bold text-lg">✓</span>
                <span><strong className="text-white">Global Compatibility:</strong> Standardized segments and custom profiles compatible with Amada, Trumpf, LVD, Bystronic, and more.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-500 font-bold text-lg">✓</span>
                <span><strong className="text-white">Custom Solutions:</strong> Specialized tooling engineered precisely to component drawings and specific tonnage needs.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-500 font-bold text-lg">✓</span>
                <span><strong className="text-white">Pune & PAN-India Reach:</strong> Strategically situated in Pune for fast turnaround times and prompt nationwide dispatch.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Our Values / Pillars */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold font-heading tracking-tight">Our Manufacturing Pillars</h2>
            <p className="text-slate-400">The core principles that drive our commitment to quality and customer satisfaction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Uncompromising Quality</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every batch of steel undergoes strict quality testing for hardness, straightness, and dimensional accuracy before and after grinding.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Technical Expertise</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our team provides expert tooling recommendations, helping fabrication units minimize setup times and reduce springback issues.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Customer-Centric Trust</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We build long-standing partnerships with engineering workshops and heavy industries through transparent pricing and reliable delivery schedules.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 rounded-2xl p-10 sm:p-14 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight">
            Partner With Pune's Trusted Tooling Manufacturer
          </h2>
          <p className="text-slate-900 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Let us enhance your bending accuracy and operational efficiency. Get in touch with our technical team today.
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