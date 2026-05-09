export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center font-black">
            A
          </div>

          <h1 className="text-2xl font-black tracking-tight">
            AuditAI
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-10 text-zinc-400">
          <a
            href="#"
            className="hover:text-white transition"
          >
            Features
          </a>

          <a
            href="#"
            className="hover:text-white transition"
          >
            Pricing
          </a>

          <a
            href="#"
            className="hover:text-white transition"
          >
            Docs
          </a>
        </div>

        <button className="bg-white text-black px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}