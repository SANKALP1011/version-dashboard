import React from "react";
import {
  Card,
  Flex,
  ProgressCircle,
  BadgeDelta,
} from "@tremor/react";
import FollowerAnalysis from "@/Interface/api.interface";

const FollowerProgress: React.FC<FollowerAnalysis> = ({
  followerCount,
  increaseOrDecrease,
}) => {
  console.log(followerCount);
  return (
    <Card className="followerCard" style={{ backgroundColor: "#000000" }}>
      <h2 className="followerCardTitle font-mono">Followers</h2>
      <Flex>
        <ProgressCircle
          className="followerProgressCircle"
          value={followerCount}
          radius={40}
          strokeWidth={10}
          tooltip="Followers"
          color={"green"}
        > <span className="text-md text-gray-700 font-large ">{followerCount}</span></ProgressCircle>
        {increaseOrDecrease === "no_change" ? (
          <BadgeDelta deltaType="unchanged" isIncreasePositive={true}
          size="sm" color={"green"}>No Change</BadgeDelta>
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
  );
};

export default FollowerProgress;
