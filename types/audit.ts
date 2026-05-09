export type ToolName =
  | "chatgpt"
  | "claude"
  | "cursor"
  | "copilot"
  | "gemini";

export interface ToolInput {
  name: ToolName;
  plan: string;
  monthlySpend: number;
  seats: number;
}

export interface AuditRecommendation {
  tool: string;
  current: number;
  optimized: number;
  savings: number;
  recommendation: string;
}

export interface AuditResult {
  totalCurrent: number;
  totalOptimized: number;
  monthlySavings: number;
  annualSavings: number;
  recommendations: AuditRecommendation[];
}