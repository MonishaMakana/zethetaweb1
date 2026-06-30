export interface MarketData {
  nav: number;
  pnl: number;
  volatility: number;
  sharpe: number;
}

let currentData: MarketData = {
  nav: 121,
  pnl: 12.4,
  volatility: 9.2,
  sharpe: 1.84
};

type Listener = (data: MarketData) => void;

const listeners: Listener[] = [];

function randomize(value: number, range: number) {
  return Number(
    (
      value +
      (Math.random() - 0.5) * range
    ).toFixed(2)
  );
}

setInterval(() => {
  currentData = {
    nav: randomize(currentData.nav, 4),

    pnl: randomize(currentData.pnl, 2),

    volatility: randomize(
      currentData.volatility,
      0.5
    ),

    sharpe: randomize(currentData.sharpe, 0.1)
  };

  listeners.forEach((listener) =>
    listener(currentData)
  );
}, 2000);

export function subscribeToMarketData(
  listener: Listener
) {
  listeners.push(listener);

  listener(currentData);

  return () => {
    const index = listeners.indexOf(listener);

    if (index > -1) {
      listeners.splice(index, 1);
    }
  };
}