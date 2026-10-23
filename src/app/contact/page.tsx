import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Autozone Tooling in Akurdi, Pune for custom press brake punches, dies, shear blades, and tooling quotations.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-950 text-white font-sans min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading tracking-tight">
            Contact Our Engineering Team
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a custom requirement, engineering drawing, or need a quote for press brake tooling and shear blades? Reach out to us directly or drop us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Phone & WhatsApp Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-3 shadow-lg">
              <div className="w-10 h-10 bg-amber-500/10 rounded-md flex items-center justify-center text-amber-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-white">Call &amp; WhatsApp</h3>
              <p className="text-sm text-slate-400">Speak directly or chat with our technical sales team.</p>
              
              <div className="space-y-1.5 pt-1">
                <a
                  href="tel:+919922566974"
                  className="block text-amber-400 hover:text-amber-300 font-semibold text-sm"
                >
                  +91 99225 66974
                </a>
                <a
                  href="https://wa.me/919922566974"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-md hover:bg-emerald-500/20 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-3 shadow-lg">
              <div className="w-10 h-10 bg-amber-500/10 rounded-md flex items-center justify-center text-amber-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-white">Email Us</h3>
              <p className="text-sm text-slate-400">Send us your drawings, CAD files, or formal inquiries.</p>
              <a
                href={`mailto:${site.email}`}
                className="inline-block text-amber-400 hover:text-amber-300 font-semibold text-sm pt-1"
              >
                {site.email}
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-3 shadow-lg">
              <div className="w-10 h-10 bg-amber-500/10 rounded-md flex items-center justify-center text-amber-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-white">Our Location</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-white">Akurdi</strong><br />
                Pune, Maharashtra - 411035<br />
                <strong className="text-white">India</strong>
              </p>
            </div>

          </div>

          {/* Right Column: Contact/Quote Form */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-lg p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl font-bold font-heading text-white mb-6">
              Request a Quote / Send an Inquiry
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-300">
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="companyName" className="block text-sm font-medium text-slate-300">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Enter company / workshop name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                    Email Address <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300">
                    Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    defaultValue="+91 99225 66974"
                    className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="productInterest" className="block text-sm font-medium text-slate-300">
                  Product / Tooling Requirement
                </label>
                <select
                  id="productInterest"
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="press-brake-punches">Press Brake Punches</option>
                  <option value="press-brake-dies">Press Brake Dies</option>
                  <option value="hemming-tools">Hemming Tools</option>
                  <option value="radius-tools">Radius Forming Tools</option>
                  <option value="shear-blades">Shear Blades</option>
                  <option value="custom-tooling">Custom Tooling Solution</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                  Message / Specifications <span className="text-amber-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Please specify machine make (e.g., Amada, Trumpf), tonnage, material thickness, length, or attach details..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold py-3.5 px-6 rounded-md shadow-lg transition-colors text-base"
              >
                Submit Inquiry / Request Quote
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}