"use client";

import { useState } from "react";
import AuditResults from "./AuditResults";

interface Tool {
  name: string;
  plan: string;
  monthlySpend: number;
  seats: number;
}

export default function SpendForm() {
  const [tools, setTools] = useState<Tool[]>([
    {
      name: "chatgpt",
      plan: "team",
      monthlySpend: 200,
      seats: 2,
    },
  ]);

  const [result, setResult] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  function updateTool(
    index: number,
    field: keyof Tool,
    value: string | number
  ) {
    const updated = [...tools];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setTools(updated);
  }

  function addTool() {
    setTools([
      ...tools,
      {
        name: "claude",
        plan: "pro",
        monthlySpend: 50,
        seats: 1,
      },
    ]);
  }

  function removeTool(index: number) {
    const updated = tools.filter(
      (_, i) => i !== index
    );

    setTools(updated);
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "/api/audit",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            tools,
          }),
        }
      );

      const data =
        await response.json();

      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-5"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Tool #{index + 1}
              </h2>

              {tools.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    removeTool(index)
                  }
                  className="text-red-400"
                >
                  Remove
                </button>
              )}
            </div>

            <div>
              <label className="block mb-2">
                Tool
              </label>

              <select
                value={tool.name}
                onChange={(e) =>
                  updateTool(
                    index,
                    "name",
                    e.target.value
                  )
                }
                className="w-full bg-black border border-zinc-700 rounded-xl p-4"
              >
                <option value="chatgpt">
                  ChatGPT
                </option>

                <option value="claude">
                  Claude
                </option>

                <option value="cursor">
                  Cursor
                </option>

                <option value="copilot">
                  GitHub Copilot
                </option>

                <option value="gemini">
                  Gemini
                </option>
              </select>
            </div>

            <div>
              <label className="block mb-2">
                Plan
              </label>

              <input
                value={tool.plan}
                onChange={(e) =>
                  updateTool(
                    index,
                    "plan",
                    e.target.value
                  )
                }
                className="w-full bg-black border border-zinc-700 rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block mb-2">
                Monthly Spend ($)
              </label>

              <input
                type="number"
                value={tool.monthlySpend}
                onChange={(e) =>
                  updateTool(
                    index,
                    "monthlySpend",
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full bg-black border border-zinc-700 rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block mb-2">
                Seats
              </label>

              <input
                type="number"
                value={tool.seats}
                onChange={(e) =>
                  updateTool(
                    index,
                    "seats",
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full bg-black border border-zinc-700 rounded-xl p-4"
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addTool}
          className="w-full border border-dashed border-zinc-700 rounded-2xl py-4 hover:bg-zinc-900 transition"
        >
          + Add Another Tool
        </button>

        <button className="w-full bg-white text-black py-5 rounded-2xl font-semibold text-lg">
          {loading
            ? "Generating Audit..."
            : "Generate Audit"}
        </button>
      </form>

      {result && (
        <AuditResults result={result} />
      )}
    </div>
  );
}