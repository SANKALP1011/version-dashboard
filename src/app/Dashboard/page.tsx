"use client";
import { getFollowerAnalysis,getFollowingAnalysis } from "@/Services/analysis.service";
import {FollowerAnalysis,FollowingAnalysis} from "@/Interface/api.interface";
import FollowerProgress from "@/Components/FollowerAnalysis/FollowerProgress";
import FollowingProgress from "@/Components/FollowerAnalysis/FollowingProgress";
import React, { useEffect, useState } from "react";
import { Grid, Col, Card, Text, Metric } from "@tremor/react";

const VersionDashboard: React.FC = () => {
  const [followerAnlData, setFollowerAnlData] = useState<FollowerAnalysis>({
    followerCount: 0,
    increaseOrDecrease: "",
  });

  const [followingAnlData , setFollowingAnlData] = useState<FollowingAnalysis>({followingCount:0,increaseOrDecrease:""});



  const getFollowerAnalysisData = async () => {
    try {
      const response: any = await getFollowerAnalysis(
        "64b2e27fd3b241f53c4b4c55"
      );
      const data: FollowerAnalysis = await response.json();
      setFollowerAnlData(data);
    } catch (error) {
      console.error("Error fetching follower analysis:", error);
    }
  };

  const getFollowingAnalysisData = async () => {
    try {
      const response: any = await getFollowingAnalysis(
        "64b2e27fd3b241f53c4b4c55"
      );
      const data: FollowingAnalysis = await response.json();
      setFollowingAnlData(data);
    } catch (error) {
      console.error("Error fetching follower analysis:", error);
    }
  };

  
  
  useEffect(() => {
    getFollowerAnalysisData();
    getFollowingAnalysisData();

  }, []);



  return followerAnlData.followerCount !== 0  && followingAnlData.followingCount !== 0? (
    <div>
      <Grid
        numItems={1}
        numItemsSm={2}
        numItemsLg={5}
        className="gap-5 gridLayout"
      >
        <FollowerProgress
          followerCount={followerAnlData.followerCount}
          increaseOrDecrease={followerAnlData.increaseOrDecrease}
        />

        <FollowingProgress
          followingCount={followingAnlData.followingCount}
          increaseOrDecrease={followerAnlData.increaseOrDecrease}
        />

       
       
      </Grid>
    </div>
  ) : (
    <></>
  );
};

export default VersionDashboard;
