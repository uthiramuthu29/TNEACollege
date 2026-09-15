import { PageHeading, PagePara } from "../resuableChunks/Typography";
import { AnalyticsCard } from "../resuableChunks/Cards";
import { PieChart } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="">
      <div className="intro mb-8 ">
        <PageHeading>Visual Analytics</PageHeading>
        <PagePara>
          Deep dive into allotment trends and institutional performance metrics.
        </PagePara>
      </div>
      <AnalyticsCard
        className="flex justify-between items-center "
        title="Seat Share"
        icon={PieChart}
      >
        {" "}
      </AnalyticsCard>
      <AnalyticsCard
        title="Cutoff Trends"
        desc="College: Anna University (CEG)"
      >
        {" "}
      </AnalyticsCard>
      <AnalyticsCard
        title="College Comparison Tool"
        desc="Side-by-side performance breakdown
        for informed decisions."
      >
        {" "}
      </AnalyticsCard>
    </div>
  );
}
