import React from "react";
import { Card, BarList,ProgressBar } from "@tremor/react";
import { TotalLangAnalysis } from "@/Interface/api.interface";

const TotalLangProgress: React.FC<TotalLangAnalysis> = ({
  TotalCodePushedSinceJoingingGit,
}) => {

  const bars = [
    { name: "Total Count", value: TotalCodePushedSinceJoingingGit },
  ];

  return (
    <div className="relative group items-start justify-center ml-6 mt-6">
        <div className="totalLangCountGradient  absolute -inset-0.5 bg-gradient-to-r from-red-600 to-blue-600  blur opacity-2 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
      <Card className="totalLangCount">
        <ProgressBar value={TotalCodePushedSinceJoingingGit} color="orange" showAnimation={true} label="Lines of Code Pushed" />
      </Card>
    </div>
  );
};

export default TotalLangProgress;
