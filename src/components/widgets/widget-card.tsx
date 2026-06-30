"use client";

import { ReactNode } from "react";

import { GripHorizontal } from "lucide-react";

interface Props {
  title: string;
  children: ReactNode;
}

export function WidgetCard({ title, children }: Props) {
  return (
    <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-5 shadow-lg">
      <div className="drag-handle mb-4 flex cursor-move items-center justify-between">
        <h2 className="text-sm font-semibold tracking-wide text-[var(--muted)]">{title}</h2>

        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-green-500" />

          <GripHorizontal size={18} className="text-[var(--muted)]" />
        </div>
      </div>

      {children}
    </div>
  );
}
