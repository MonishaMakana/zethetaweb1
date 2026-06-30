"use client";

import { useMemo } from "react";

import { AgGridReact } from "ag-grid-react";

import type {
  ColDef
} from "ag-grid-community";

import { WidgetCard } from "./widget-card";

import {
  positions
} from "@/mocks/positions";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export function PositionsTable() {
  const columnDefs = useMemo<ColDef[]>(
    () => [
      {
        field: "symbol",
        headerName: "Symbol",
        flex: 1
      },

      {
        field: "assetClass",
        headerName: "Asset Class",
        flex: 1
      },

      {
        field: "quantity",
        headerName: "Quantity",
        flex: 1
      },

      {
        field: "price",
        headerName: "Price",
        flex: 1
      },

      {
        field: "pnl",
        headerName: "PnL %",
        flex: 1,
        cellStyle: (params) => ({
          color:
            params.value > 0
              ? "#10b981"
              : "#ef4444"
        })
      },

      {
        field: "exposure",
        headerName: "Exposure %",
        flex: 1
      }
    ],
    []
  );

  return (
    <WidgetCard title="Portfolio Positions">
      <div
        className="ag-theme-quartz-dark"
        style={{
          height: 400,
          width: "100%"
        }}
      >
        <AgGridReact
          rowData={positions}
          columnDefs={columnDefs}
          animateRows
          pagination
          paginationPageSize={5}
        />
      </div>
    </WidgetCard>
  );
}