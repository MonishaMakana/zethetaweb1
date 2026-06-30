export interface Position {
  symbol: string;
  assetClass: string;
  quantity: number;
  price: number;
  pnl: number;
  exposure: number;
}

export const positions: Position[] = [
  {
    symbol: "AAPL",
    assetClass: "Equity",
    quantity: 150000,
    price: 212.4,
    pnl: 1.2,
    exposure: 12.4
  },

  {
    symbol: "MSFT",
    assetClass: "Equity",
    quantity: 120000,
    price: 441.2,
    pnl: 2.1,
    exposure: 9.8
  },

  {
    symbol: "TSLA",
    assetClass: "Equity",
    quantity: 85000,
    price: 178.3,
    pnl: -1.4,
    exposure: 7.3
  },

  {
    symbol: "US10Y",
    assetClass: "Fixed Income",
    quantity: 500000,
    price: 98.2,
    pnl: 0.6,
    exposure: 18.1
  },

  {
    symbol: "BTC",
    assetClass: "Alternative",
    quantity: 1400,
    price: 64200,
    pnl: 4.2,
    exposure: 5.6
  }
];