import React, { useState } from "react";
import { DonutChart, Card, Title } from "@tremor/react";
import { PullRequestAnalysis } from "@/Interface/api.interface";
import { RoughNotation } from "react-rough-notation";

const PullRequestProgress: React.FC<PullRequestAnalysis> = ({
  OpenCount,
  ClosedCount,
}) => {
  const valueFormatter = (value: number) => `${value}%`;
  const [show, setShow] = useState(true);

  const openCount = typeof OpenCount === "number" ? OpenCount : 0;
  const closedCount = typeof ClosedCount === "number" ? ClosedCount : 0;

  const chartData = [
    { name: "Open Count", value: openCount },
    { name: "Closed Count", value: closedCount },
  ];
console.log(chartData)
  return (
    <div className="relative group items-start justify-center ml-16">
      <div className="pullReqGradientBack w-full absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600  blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
      <Card className="pullRequestCard">
        <RoughNotation type="underline" show={show} color="green" strokeWidth={5}>
          {" "}
          <Title className="pullRequestTitle font-mono">
            Pull Request Analysis
          </Title>
        </RoughNotation>

        <DonutChart
          className="mt-4 h-26"
          data={chartData}
          category="value"
          index="name"
          valueFormatter={valueFormatter}
          colors={["rose", "yellow"]}
        />
      </Card>
    </div>
  );
};

export default PullRequestProgress;
