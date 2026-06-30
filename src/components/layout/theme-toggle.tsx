"use client";

import { Moon, Sun } from "lucide-react";

import { useThemeStore } from "@/stores/theme-store";

export function ThemeToggle() {
  const { theme, toggleTheme } =
    useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl border border-white/10 bg-black/20 p-2 transition hover:scale-105"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}
