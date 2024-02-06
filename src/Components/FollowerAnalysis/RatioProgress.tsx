import React , {useState} from "react";
import {Card, Text} from "@tremor/react"
import {FollowerFollowingRatio} from "@/Interface/api.interface";


export const RatioProgress: React.FC<FollowerFollowingRatio> = ({ FollowerToFollowingRatio }) => {
    const ratio = FollowerToFollowingRatio || ""; // Using default parameter in function body
    return (
      <div>
        <div></div>
        <Card className="rounded-3xl w-32">
          <h2 className="i">{ratio}</h2>
        </Card>
      </div>
    );
  };
  

export default RatioProgress;