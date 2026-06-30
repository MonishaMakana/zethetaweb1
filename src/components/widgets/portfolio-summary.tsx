"use client";

import { motion } from "framer-motion";

import { WidgetCard } from "./widget-card";

import { useMarketFeed } from "@/hooks/use-market-feed";

export function PortfolioSummary() {
  const { data, lastUpdated } =
    useMarketFeed();

  if (!data) return null;

  const metrics = [
    {
      label: "AUM",
      value: "$45.2B"
    },

    {
      label: "Daily PnL",
      value: `+$${data.pnl}M`
    },

    {
      label: "Sharpe",
      value: data.sharpe
    },

    {
      label: "Volatility",
      value: `${data.volatility}%`
    }
  ];

  return (
    <WidgetCard title="Portfolio Summary">
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((item) => (
          <motion.div
            layout
            key={item.label}
            animate={{ scale: [1, 1.02, 1] }}
            className="rounded-xl bg-black/20 p-4"
          >
            <p className="text-xs text-slate-400">
              {item.label}
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {item.value}
            </h3>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 text-xs text-slate-500">
        Last Updated:{" "}
        {lastUpdated?.toLocaleTimeString()}
      </div>
    </WidgetCard>
  );
}