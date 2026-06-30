"use client";

import { create } from "zustand";

interface LayoutItem {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface DashboardState {
  layout: LayoutItem[];

  setLayout: (
    layout: LayoutItem[]
  ) => void;
}

const defaultLayout: LayoutItem[] = [
  {
    i: "portfolio",
    x: 0,
    y: 0,
    w: 6,
    h: 4
  },

  {
    i: "var",
    x: 6,
    y: 0,
    w: 6,
    h: 4
  },

  {
    i: "nav",
    x: 0,
    y: 4,
    w: 12,
    h: 6
  },

  {
    i: "drawdown",
    x: 0,
    y: 10,
    w: 6,
    h: 4
  },

  {
    i: "positions",
    x: 6,
    y: 10,
    w: 6,
    h: 6
  },

  {
    i: "correlation",
    x: 0,
    y: 16,
    w: 12,
    h: 6
  }
];

function loadLayout() {
  if (typeof window === "undefined") {
    return defaultLayout;
  }

  const saved = localStorage.getItem(
    "meridian-layout"
  );

  if (!saved) {
    return defaultLayout;
  }

  try {
    return JSON.parse(saved);
  } catch {
    return defaultLayout;
  }
}

export const useDashboardStore =
  create<DashboardState>((set) => ({
    layout: loadLayout(),

    setLayout: (layout) => {
      localStorage.setItem(
        "meridian-layout",
        JSON.stringify(layout)
      );

      set({ layout });
    }
  }));