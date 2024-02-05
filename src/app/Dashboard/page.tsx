"use client";
import {
  getFollowerAnalysis,
  getFollowingAnalysis,
  getLanguageCountAnalysis,
} from "@/Services/analysis.service";
import {
  FollowerAnalysis,
  FollowingAnalysis,
  LanguageCountAnalysis,
} from "@/Interface/api.interface";
import FollowerProgress from "@/Components/FollowerAnalysis/FollowerProgress";
import FollowingProgress from "@/Components/FollowerAnalysis/FollowingProgress";
import LanguageCount from "@/Components/LanguageAnalysis/LanguageCount";  // Import the LanguageCount component
import React, { useEffect, useState } from "react";
import { Grid, Card, Flex } from "@tremor/react";

const VersionDashboard: React.FC = () => {
  const [followerAnlData, setFollowerAnlData] = useState<FollowerAnalysis>({
    followerCount: 0,
    increaseOrDecrease: "",
  });

  const [followingAnlData, setFollowingAnlData] = useState<FollowingAnalysis>({
    followingCount: 0,
    increaseOrDecrease: "",
  });
  
  const [langCount, setLangCount] = useState<LanguageCountAnalysis>({});

  const getFollowerAnalysisData = async () => {
    try {
      const response: any = await getFollowerAnalysis("64b2e27fd3b241f53c4b4c55");
      const data: FollowerAnalysis = await response.json();
      setFollowerAnlData(data);
    } catch (error) {
      console.error("Error fetching follower analysis:", error);
    }
  };

  const getFollowingAnalysisData = async () => {
    try {
      const response: any = await getFollowingAnalysis("64b2e27fd3b241f53c4b4c55");
      const data: FollowingAnalysis = await response.json();
      setFollowingAnlData(data);
    } catch (error) {
      console.error("Error fetching follower analysis:", error);
    }
  };

  const getLanguageCountAnalysisData = async () => {
    try {
      const response: any = await getLanguageCountAnalysis("64b2e27fd3b241f53c4b4c55");
      const data: LanguageCountAnalysis = await response.json();
      setLangCount(data);
    } catch (error) {
      console.error("Error fetching language count analysis:", error);
    }
  };

  useEffect(() => {
    getFollowerAnalysisData();
    getFollowingAnalysisData();
    getLanguageCountAnalysisData();
  }, []);

  // ...

return followerAnlData.followerCount !== 0 && followingAnlData.followingCount !== 0 ? (
  <div>
    <div className="flex flex-row basis-20 mt-10">
      <div className="drop-shadow-2xl">
      <Grid numItems={1} numItemsSm={2} numItemsLg={2} className="gap-3 ">
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
      <div className="langCountCardContainer drop-shadow-2xl">
        <LanguageCount languageCounts={langCount} />
      </div>
      </div>
  </div>
) : (
  <></>
);

};

export default VersionDashboard;
