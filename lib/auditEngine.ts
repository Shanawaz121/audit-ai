import {
  ToolInput,
  AuditResult,
} from "../types/audit";

export function generateAudit(
  tools: ToolInput[]
): AuditResult {
  let totalCurrent = 0;
  let totalOptimized = 0;

  const recommendations = tools.map(
    (tool) => {
      totalCurrent += tool.monthlySpend;

      let optimized =
        tool.monthlySpend;

      let recommendation =
        "Your current plan looks optimized.";

      if (
        tool.plan === "team" &&
        tool.seats <= 2
      ) {
        optimized =
          tool.monthlySpend * 0.5;

        recommendation = `Your ${tool.seats}-person team is currently using a ${tool.plan} plan that may be excessive for your size. A lower-tier individual plan could provide similar value at significantly lower cost.`;
      }

      if (
        tool.name === "cursor" &&
        tool.plan === "business" &&
        tool.seats === 1
      ) {
        optimized = 20;

        recommendation =
          "Cursor Business is likely unnecessary for a solo developer. Cursor Pro provides similar coding assistance at a much lower monthly cost.";
      }

      if (
        tool.name === "chatgpt" &&
        tool.monthlySpend >= 100
      ) {
        optimized -= 40;

        recommendation =
          "Your ChatGPT usage suggests potential savings through API-based usage or discounted enterprise credits instead of standard retail pricing.";
      }

      totalOptimized += optimized;

      return {
        tool: tool.name,
        current:
          tool.monthlySpend,
        optimized,
        savings:
          tool.monthlySpend -
          optimized,
        recommendation,
      };
    }
  );

  return {
    totalCurrent,
    totalOptimized,

    monthlySavings:
      totalCurrent -
      totalOptimized,

    annualSavings:
      (totalCurrent -
        totalOptimized) *
      12,

    recommendations,
  };
}