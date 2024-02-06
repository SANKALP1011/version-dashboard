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
    <div className="relative group items-start justify-center">
    <div className="ml-10 langGradientBack  w-full absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-orange-600  blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
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
    </div>
  );
};

export default LanguageCount;
