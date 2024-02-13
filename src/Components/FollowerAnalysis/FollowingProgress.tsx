import React , {useState} from "react";
import {
  Card,
  Flex,
  ProgressCircle,
  BadgeDelta,
} from "@tremor/react";
import { RoughNotation } from "react-rough-notation";
import {FollowingAnalysis} from "@/Interface/api.interface";

const FollowingProgress: React.FC<FollowingAnalysis> = ({
  followingCount,
  increaseOrDecrease,
}) => {
  const [show, setShow] = useState(true);
  return (
    <div className="relative group items-start justify-center">
    <div className="gradientbackGround w-full absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-red-600  blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
    <Card className="followerCard " style={{ backgroundColor: "black" }}>
    <div className="mb-3">
      {show && ( 
          <RoughNotation type="underline" show={show} color="red" strokeWidth={5}>
            <h2 className="followerAnalysisCardTitle font-mono">Followers</h2>
          </RoughNotation>
        )}
        </div>
      <Flex>
        <ProgressCircle
          className="followerProgressCircle"
          value={followingCount}
          radius={40}
          strokeWidth={12}
          tooltip="Following"
          color={"purple"}

        > <span className="text-md text-red-700 font-large  font-extrabold font-mono">{followingCount}</span></ProgressCircle>
        {increaseOrDecrease === "no_change" ? (
          <BadgeDelta deltaType="unchanged" isIncreasePositive={true}
          size="sm" color={"green"}>No Change</BadgeDelta>
        ) : (
          <BadgeDelta
            className="followerBadge"
            deltaType="moderateIncrease"
            isIncreasePositive={true}
            size="sm"
            color={""}
          >
            Increase
          </BadgeDelta>
        )}
      </Flex>
    </Card>
    </div>
  );
};

export default FollowingProgress;
