import { PortfolioSummary } from "@/components/widgets/portfolio-summary";
import { VARWidget } from "@/components/widgets/var-widget";
import { NAVChart } from "@/components/widgets/nav-chart";
import { DrawdownWidget } from "@/components/widgets/drawdown-widget";
import { PositionsTable } from "@/components/widgets/positions-table";
import { CorrelationHeatmap } from "@/components/widgets/correlation-heatmap";

export const widgetRegistry = {
  portfolio: {
    title: "Portfolio Summary",
    component: PortfolioSummary,
  },

  var: {
    title: "Value at Risk",
    component: VARWidget,
  },

  nav: {
    title: "NAV Performance",
    component: NAVChart,
  },

  drawdown: {
    title: "Drawdown Analysis",
    component: DrawdownWidget,
  },

  positions: {
    title: "Portfolio Positions",
    component: PositionsTable,
  },

  correlation: {
    title: "Correlation Matrix",
    component: CorrelationHeatmap,
  },
};
