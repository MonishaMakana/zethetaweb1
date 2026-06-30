"use client";

import { create } from "zustand";

type Theme = "dark" | "light";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemeStore =
  create<ThemeState>((set) => ({
    theme:
      (typeof window !== "undefined"
        ? (localStorage.getItem("meridian-theme") as Theme)
        : "dark") || "dark",

    toggleTheme: () =>
      set((state) => {
        const next =
          state.theme === "dark"
            ? "light"
            : "dark";

        localStorage.setItem("meridian-theme", next);

        return {
          theme: next,
        };
      }),
  }));
