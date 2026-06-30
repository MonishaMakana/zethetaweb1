import { DashboardShell } from "@/components/layout/dashboard-shell";

import { PortfolioSummary } from "@/components/widgets/portfolio-summary";
import { NAVChart } from "@/components/widgets/nav-chart";
import { VARWidget } from "@/components/widgets/var-widget";
import { DrawdownWidget } from "@/components/widgets/drawdown-widget";

export default function HomePage() {
  return (
    <DashboardShell>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PortfolioSummary />

        <VARWidget />

        <div className="lg:col-span-2">
          <NAVChart />
        </div>

        <DrawdownWidget />
      </div>
    </DashboardShell>
  );
}
