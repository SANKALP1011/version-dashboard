import React, { useState } from "react";
import {
  Card,
  Flex,
  ProgressCircle,
  BadgeDelta,
} from "@tremor/react";
import { RoughNotation } from "react-rough-notation";
import { FollowerAnalysis } from "@/Interface/api.interface";

const FollowerProgress: React.FC<FollowerAnalysis> = ({
  followerCount,
  increaseOrDecrease,
}) => {
  const [show, setShow] = useState(true); 



  return (
    <div className="relative group items-start justify-center">
      <div className="gradientbackGround w-full absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600  blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
      <Card className="followerCard drop-shadow-2xl" style={{ backgroundColor:"black" }}>
        <div className="mb-3">
      {show && ( 
          <RoughNotation type="underline" show={show} color="orange" strokeWidth={5}>
            <h2 className="followerAnalysisCardTitle font-mono">Followers</h2>
          </RoughNotation>
        )}
        </div>
        <Flex>
          <ProgressCircle
            className="followerProgressCircle"
            value={followerCount}
            radius={40}
            strokeWidth={10}
            tooltip="Followers"
            color={"green"}
          >
            <span className="text-md text-pink-700 font-large font-bold font-mono">{followerCount}</span>
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

export default FollowerProgress;
