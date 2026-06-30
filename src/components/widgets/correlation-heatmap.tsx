"use client";

import { Fragment } from "react";

import { WidgetCard } from "./widget-card";

import { correlationData } from "@/mocks/correlation-data";

function getColor(value: number) {
  if (value > 0.7) return "bg-green-500";

  if (value > 0.3) return "bg-green-400";

  if (value > 0) return "bg-green-300";

  if (value > -0.3) return "bg-red-300";

  return "bg-red-500";
}

export function CorrelationHeatmap() {
  const labels = correlationData[0]?.slice(1) ?? [];
  const rows = correlationData.slice(1);

  return (
    <WidgetCard title="Correlation Matrix">
      <div className="overflow-auto">
        <div className="grid grid-cols-6 gap-2">
          <div />

          {labels.map((label) => (
            <div key={label} className="text-center text-xs text-slate-400">
              {label}
            </div>
          ))}

          {rows.map((row, rowIndex) => (
            <Fragment key={row[0] as string}>
              <div className="flex items-center text-xs text-slate-400">{row[0]}</div>

              {row.slice(1).map((value, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`flex h-14 w-14 items-center justify-center rounded-lg text-xs font-semibold text-black transition-transform hover:scale-105 ${getColor(
                    value as number
                  )}`}
                >
                  {value}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </WidgetCard>
  );
}
