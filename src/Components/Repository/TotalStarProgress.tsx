import React, { useState } from "react";
import {
  Card,
  Flex,
  ProgressCircle,
  BadgeDelta
} from "@tremor/react";
import { RoughNotation } from "react-rough-notation";
import { TotalStar } from "@/Interface/api.interface";

const TotalStarProgress: React.FC<TotalStar> = ({
 TotalStarsCount
}) => {
  const [show, setShow] = useState(true); 



  return (
    <div className="relative group items-start justify-center mt-10">
      <div className="gradientbackGround w-full absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600  blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
      <Card className="followerCard drop-shadow-2xl" style={{ backgroundColor:"black" }}>
        <div className="mb-3">
      {show && ( 
          <RoughNotation type="underline" show={show} color="orange" strokeWidth={5}>
            <h2 className="followerAnalysisCardTitle font-mono">Total Stars</h2>
          </RoughNotation>
        )}
        </div>
        <Flex>
          <ProgressCircle
            className="followerProgressCircle"
            value={TotalStarsCount}
            radius={40}
            strokeWidth={10}
            tooltip="Followers"
            color={"orange"}
          >
            <span className="text-md text-blue-700 font-large font-extrabold font-mono">{TotalStarsCount}</span>
          </ProgressCircle>
          <BadgeDelta
              deltaType="unchanged"
              isIncreasePositive={true}
              size="sm"
              color={"green"}
            >
              No Change
            </BadgeDelta>
        </Flex>
      </Card>
    </div>
  );
};

export default TotalStarProgress;
