"use client";

import { WidgetCard } from "./widget-card";

export function VARWidget() {
  return (
    <WidgetCard title="Value at Risk">
      <div className="flex flex-col items-center justify-center py-10">
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-[12px] border-red-500">
          <div className="text-center">
            <h2 className="text-4xl font-bold">2.8%</h2>

            <p className="text-sm text-slate-400">95% Confidence</p>
          </div>
        </div>
      </div>
    </WidgetCard>
  );
}
