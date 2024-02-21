import React, { useState } from "react";
import { Card, Flex, ProgressCircle, BadgeDelta } from "@tremor/react";
import { RoughNotation } from "react-rough-notation";
import { TotalLangAnalysis } from "@/Interface/api.interface";

const TotalLangProgress: React.FC<TotalLangAnalysis> = ({
  TotalCodePushedSinceJoingingGit,
}) => {
  const [show, setShow] = useState(true);
  return (
    <div className="relative group items-start justify-center mt-6 ml-16">
      <div className="totalLangCountGradient w-full absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-red-600  blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
      <Card className="totalLangCard " style={{ backgroundColor: "black" }}>
        <div className="mb-3">
          {show && (
            <RoughNotation
              type="underline"
              show={show}
              color="red"
              strokeWidth={5}
            >
              <h2 className="totalLangrAnalysisCardTitle mb-5">
                Lines of code pushed
              </h2>
            </RoughNotation>
          )}
        </div>

        <ProgressCircle
          className="totalLangProgressCircle"
          value={TotalCodePushedSinceJoingingGit}
          radius={80}
          strokeWidth={12}
          tooltip="Lines of code pushed since joining git"
          color={"orange"}
          size="xl"
        >
          {" "}
          <span className="text-md text-orange-700 font-large font-extrabold font-mono">
            {TotalCodePushedSinceJoingingGit}
          </span>
        </ProgressCircle>
      </Card>
    </div>
  );
};

export default TotalLangProgress;
