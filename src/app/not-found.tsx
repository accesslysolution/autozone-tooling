import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-slate-950 text-slate-100 px-4 py-20 font-sans">
      <div className="max-w-xl w-full text-center space-y-6 bg-slate-900/50 border border-slate-800/80 p-8 sm:p-12 rounded-2xl shadow-2xl backdrop-blur-sm">
        {/* Error Code Badge */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 border border-amber-500/20 text-amber-400 font-heading font-bold text-2xl rounded-xl shadow-inner">
          404
        </div>

        {/* Heading & Description */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-white">
            Page Not Found
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            This page has moved or doesn&apos;t exist. Our full product range is just a click away.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/products"
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm px-6 py-3 rounded-lg shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 text-center"
          >
            View Products
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm px-6 py-3 rounded-lg transition-all duration-200 text-center"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}