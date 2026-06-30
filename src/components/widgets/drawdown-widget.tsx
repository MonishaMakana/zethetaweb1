"use client";

import { WidgetCard } from "./widget-card";

export function DrawdownWidget() {
  return (
    <WidgetCard title="Drawdown Analysis">
      <div className="space-y-4">
        <div>
          <p className="text-sm text-slate-400">Maximum Drawdown</p>

          <h2 className="text-3xl font-bold text-red-400">-12.4%</h2>
        </div>

        <div>
          <p className="text-sm text-slate-400">Recovery Period</p>

          <h2 className="text-2xl font-bold">47 Days</h2>
        </div>
      </div>
    </WidgetCard>
  );
}
