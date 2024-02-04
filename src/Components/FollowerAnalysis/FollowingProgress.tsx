import React from "react";
import {
  Card,
  Flex,
  ProgressCircle,
  BadgeDelta,
} from "@tremor/react";
import {FollowingAnalysis} from "@/Interface/api.interface";

const FollowingProgress: React.FC<FollowingAnalysis> = ({
  followingCount,
  increaseOrDecrease,
}) => {

  return (
    <Card className="followerCard" style={{ backgroundColor: "#000000" }}>
      <h2 className="followerCardTitle font-mono">Following</h2>
      <Flex>
        <ProgressCircle
          className="followerProgressCircle"
          value={followingCount}
          radius={40}
          strokeWidth={12}
          tooltip="Following"
          color={"purple"}

        > <span className="text-md text-gray-700 font-large ">{followingCount}</span></ProgressCircle>
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
  );
};

export default FollowingProgress;
