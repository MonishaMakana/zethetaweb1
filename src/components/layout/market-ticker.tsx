"use client";

const assets = [
  "SPX +1.24%",
  "NDX +0.82%",
  "US10Y 4.18%",
  "BTC +2.91%",
  "EUR/USD 1.08",
  "GOLD +0.64%",
];

export function MarketTicker() {
  return (
    <div className="overflow-hidden border-b border-white/10 bg-black/20">
      <div className="animate-marquee flex gap-10 whitespace-nowrap p-2 text-sm text-slate-300">
        {assets.map((asset) => (
          <div key={asset}>{asset}</div>
        ))}
      </div>
    </div>
  );
}
