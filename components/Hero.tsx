export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[140px]" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl rounded-full px-5 py-2 text-sm text-zinc-400">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          Trusted by AI-first teams
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mt-10 max-w-6xl">
          Your AI Stack
          <br />
          <span className="text-zinc-500">
            Is Burning
          </span>
          <br />
          Money.
        </h1>

        <p className="text-zinc-400 text-xl md:text-2xl mt-8 max-w-3xl leading-relaxed">
          Instantly audit ChatGPT,
          Claude, Cursor, Gemini and
          Copilot spending. Discover
          hidden savings and smarter AI
          plans in under 60 seconds.
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mt-12">
          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition">
            Start Free Audit
          </button>

          <button className="border border-zinc-700 bg-zinc-900/70 px-8 py-4 rounded-2xl text-zinc-300 hover:bg-zinc-800 transition">
            View Live Demo
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20">
          <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-4xl font-bold">
              42%
            </h3>

            <p className="text-zinc-500 mt-2">
              Avg Savings
            </p>
          </div>

          <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-4xl font-bold">
              2min
            </h3>

            <p className="text-zinc-500 mt-2">
              Audit Time
            </p>
          </div>

          <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-4xl font-bold">
              500+
            </h3>

            <p className="text-zinc-500 mt-2">
              Teams Audited
            </p>
          </div>

          <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-4xl font-bold">
              $1M+
            </h3>

            <p className="text-zinc-500 mt-2">
              Saved Annually
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}