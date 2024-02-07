import React , {useState} from "react";
import {Card, Text} from "@tremor/react"
import {FollowerFollowingRatio} from "@/Interface/api.interface";


export const RatioProgress: React.FC<FollowerFollowingRatio> = ({ FollowerToFollowingRatio }) => {
    const ratio = FollowerToFollowingRatio || ""; // Using default parameter in function body
    return (
      <div className="RatioProgressCard relative group items-start justify-center">
        <div className="w-full absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-red-600  blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
        <Card className="rounded-3xl w-32 RatioProgressCard">
          <h2 className="i">{ratio}</h2>
        </Card>
      </div>
    );
  };
  

export default RatioProgress;