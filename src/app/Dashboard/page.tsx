"use client";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Flex,
  Text,
  ProgressBar,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Card,
} from "@tremor/react";
import {
  getFollowerAnalysis,
  getFollowingAnalysis,
  getLanguageCountAnalysis,
  getRepoCountAnalysis,
} from "@/Services/analysis.service";
import {
  FollowerAnalysis,
  FollowingAnalysis,
  LanguageCountAnalysis,
  RepoCountAnalysis,
} from "@/Interface/api.interface";
import FollowerProgress from "@/Components/FollowerAnalysis/FollowerProgress";
import FollowingProgress from "@/Components/FollowerAnalysis/FollowingProgress";
import LanguageCount from "@/Components/LanguageAnalysis/LanguageCount";
import RepoProgress from "@/Components/Repository/RepoProgress";

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

  const [repoCount, setRepoCount] = useState<RepoCountAnalysis>({
    RepoCount: 0,
    increaseOrDecrease: "",
  });

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

  const getLanguageCountAnalysisData = async () => {
    try {
      const response: any = await getLanguageCountAnalysis(
        "64b2e27fd3b241f53c4b4c55"
      );
      const data: LanguageCountAnalysis = await response.json();
      setLangCount(data);
    } catch (error) {
      console.error("Error fetching language count analysis:", error);
    }
  };

  const getRepoCountAnalysisData = async () => {
    try {
      const response: any = await getRepoCountAnalysis(
        "64b2e27fd3b241f53c4b4c55"
      );
      const data: RepoCountAnalysis = await response.json();
      setRepoCount(data);
    } catch (error) {
      console.error("Error fetching language count analysis:", error);
    }
  };

  useEffect(() => {
    getFollowerAnalysisData();
    getFollowingAnalysisData();
    getLanguageCountAnalysisData();
    getRepoCountAnalysisData();
  }, []);

  return followerAnlData.followerCount !== 0 &&
    followingAnlData.followingCount !== 0 ? (
    <div>
      <div className="flex flex-row basis-20 mt-10">
        <div className="drop-shadow-2xl">
          <Grid numItems={1} numItemsSm={2} numItemsLg={2} className="gap-3">
            <FollowerProgress
              followerCount={followerAnlData.followerCount}
              increaseOrDecrease={followerAnlData.increaseOrDecrease}
            />
            <FollowingProgress
              followingCount={followingAnlData.followingCount}
              increaseOrDecrease={followerAnlData.increaseOrDecrease}
            />
          </Grid>
          <Grid numItems={1} numItemsLg={2}>
            <div className="ml-6 mt-8 relative group items-start justify-cente">
              <div className="tabCardBackGradient absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600  blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
              <Card className="tabCard">
                <TabGroup>
                  <TabList className="mt-8">
                    <Tab>Repos</Tab>
                    <Tab>Ratio</Tab>
                    <Tab>Stars</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel className="ml-4">
                      <div className="mt-10">
                        <p>nnk</p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="mt-10">
                        <p>knkn</p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="mt-10">
                        <p>knkn</p>
                      </div>
                    </TabPanel>
                  </TabPanels>
                </TabGroup>
              </Card>
            </div>
            <div>
              <RepoProgress
                RepoCount={repoCount.RepoCount}
                increaseOrDecrease={repoCount.increaseOrDecrease}
              />
            </div>
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
