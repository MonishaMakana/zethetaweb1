"use client";

import { useEffect, useState } from "react";

import {
  MarketData,
  subscribeToMarketData
} from "@/mocks/market-feed";

export function useMarketFeed() {
  const [data, setData] =
    useState<MarketData | null>(null);

  const [lastUpdated, setLastUpdated] =
    useState<Date | null>(null);

  useEffect(() => {
    const unsubscribe =
      subscribeToMarketData((newData) => {
        setData(newData);

        setLastUpdated(new Date());
      });

    return unsubscribe;
  }, []);

  return {
    data,
    lastUpdated
  };
}