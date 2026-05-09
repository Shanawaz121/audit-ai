import { AuditResult } from "../types/audit";

export default function AuditResults({
  result,
}: {
  result: AuditResult;
}) {
  return (
    <div className="mt-14 space-y-8">
      {/* Top Cards */}

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-500/20 to-zinc-900 border border-green-500/20 rounded-3xl p-8">
          <p className="text-zinc-400 text-sm">
            Monthly Savings
          </p>

          <h2 className="text-5xl font-bold mt-3">
            ${result.monthlySavings}
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <p className="text-zinc-400 text-sm">
            Annual Savings
          </p>

          <h2 className="text-5xl font-bold mt-3">
            ${result.annualSavings}
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <p className="text-zinc-400 text-sm">
            Optimized Spend
          </p>

          <h2 className="text-5xl font-bold mt-3">
            ${result.totalOptimized}
          </h2>
        </div>
      </div>

      {/* AI Summary */}

      <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-10 w-10 rounded-2xl bg-white text-black flex items-center justify-center font-bold">
            AI
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              AI Spend Analysis
            </h3>

            <p className="text-zinc-500 text-sm">
              Generated audit summary
            </p>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed text-lg">
          Your AI tooling stack shows
          moderate overspending driven
          primarily by team-level plans
          being used for smaller teams.
          Based on your current usage,
          consolidating subscriptions and
          switching to lower-tier plans
          could significantly reduce
          recurring operational cost
          without major workflow impact.
        </p>
      </div>

      {/* Recommendations */}

      <div className="space-y-5">
        {result.recommendations.map(
          (
            item: any,
            index: number
          ) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:border-zinc-700 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-white text-black flex items-center justify-center font-bold uppercase">
                      {item.tool[0]}
                    </div>

                    <div>
                      <h3 className="capitalize text-2xl font-semibold">
                        {item.tool}
                      </h3>

                      <p className="text-zinc-500 text-sm">
                        Optimization Recommendation
                      </p>
                    </div>
                  </div>

                  <p className="text-zinc-300 mt-5 leading-relaxed max-w-3xl">
                    {item.recommendation}
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <p className="text-green-400 text-4xl font-bold">
                    ${item.savings}
                  </p>

                  <p className="text-zinc-500 mt-2">
                    monthly savings
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}