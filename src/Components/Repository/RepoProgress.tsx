import React, { useState } from "react";
import {
  Card,
  Flex,
  ProgressCircle,
  BadgeDelta,
} from "@tremor/react";
import { RoughNotation } from "react-rough-notation";
import { RepoCountAnalysis } from "@/Interface/api.interface";

const RepoProgress: React.FC<RepoCountAnalysis> = ({
  RepoCount,
  increaseOrDecrease,
}) => {
  const [show, setShow] = useState(true); 



  return (
    <div className="relative group items-start justify-center mt-10">
      <div className="gradientbackGround w-full absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600  blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
      <Card className="followerCard drop-shadow-2xl" style={{ backgroundColor:"black" }}>
        <div className="mb-3">
      {show && ( // Conditional rendering based on show state
          <RoughNotation type="underline" show={show} color="orange" strokeWidth={5}>
            <h2 className="followerAnalysisCardTitle font-mono">Repo Count</h2>
          </RoughNotation>
        )}
        </div>
        <Flex>
          <ProgressCircle
            className="followerProgressCircle"
            value={RepoCount}
            radius={40}
            strokeWidth={10}
            tooltip="Followers"
            color={"pink"}
          >
            <span className="text-md text-gray-700 font-large ">{RepoCount}</span>
          </ProgressCircle>
          {increaseOrDecrease === "no_change" ? (
            <BadgeDelta
              deltaType="unchanged"
              isIncreasePositive={true}
              size="sm"
              color={"green"}
            >
              No Change
            </BadgeDelta>
          ) : (
            <BadgeDelta
              className="followerBadge"
              deltaType="moderateIncrease"
              isIncreasePositive={true}
              size="sm"
              color={"green"}
            >
              Increase
            </BadgeDelta>
          )}
        </Flex>
      </Card>
    </div>
  );
};

export default RepoProgress;
