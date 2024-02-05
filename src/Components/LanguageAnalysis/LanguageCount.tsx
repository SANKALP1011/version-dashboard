import React from "react";
import { BarChart, Card } from "@tremor/react";
import { LanguageCountAnalysis } from "@/Interface/api.interface";

interface LanguageCountProps {
  languageCounts: LanguageCountAnalysis;
}

const LanguageCount: React.FC<LanguageCountProps> = ({ languageCounts }) => {
  const chartData = Object.entries(languageCounts).map(([name, count]) => ({
    name,
    "Lines of Languages used": count,
  }));

  return (
    <Card className="langCountCard ">
      <BarChart
        className="mt-6"
        data={chartData}
        index="name"
        categories={["Lines of Languages used"]}
        colors={["orange"]}
        valueFormatter={(value) => String(value)}
        yAxisWidth={56}
      />
    </Card>
  );
};

export default LanguageCount;
