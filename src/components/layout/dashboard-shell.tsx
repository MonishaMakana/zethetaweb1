"use client";

import { ReactNode, useEffect } from "react";

import { MarketTicker } from "./market-ticker";
import { ThemeToggle } from "./theme-toggle";

import { useThemeStore } from "@/stores/theme-store";

interface Props {
  children: ReactNode;
}

export function DashboardShell({
  children,
}: Props) {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="flex h-16 items-center justify-between border-b border-[var(--border)] px-6">
        <div>
          <h1 className="text-xl font-bold">Meridian Capital</h1>

          <p className="text-xs text-[var(--muted)]">Institutional Portfolio Analytics</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

            <span className="text-sm text-[var(--muted)]">Market Feed Live</span>
          </div>

          <ThemeToggle />
        </div>
      </header>

      <MarketTicker />

      <main className="p-6">{children}</main>
    </div>
  );
}
