"use client";

import { useEffect, useState } from "react";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import { WidgetCard } from "./widget-card";

interface DataPoint {
  time: string;
  nav: number;
}

export function NAVChart() {
  const [data, setData] = useState<
    DataPoint[]
  >([
    {
      time: "09:00",
      nav: 121
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const last =
          prev[prev.length - 1]?.nav || 120;

        const next = Number(
          (
            last +
            (Math.random() - 0.5) * 3
          ).toFixed(2)
        );

        const time = new Date()
          .toLocaleTimeString()
          .slice(0, 5);

        return [
          ...prev.slice(-10),
          {
            time,
            nav: next
          }
        ];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <WidgetCard title="Live NAV Performance">
      <div className="h-[300px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>
            <XAxis
              dataKey="time"
              stroke="#94a3b8"
            />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="nav"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}