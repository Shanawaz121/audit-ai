import { generateAudit } from "../../../lib/auditEngine";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = generateAudit(body.tools);

    return Response.json(result);
  } catch (error) {
    return Response.json(
      { error: "Failed to generate audit" },
      { status: 500 }
    );
  }
}