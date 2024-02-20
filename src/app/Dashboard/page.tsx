"use client";
import React, { useEffect, useState } from "react";
import { Grid, Card } from "@tremor/react";
import {
  getFollowerAnalysis,
  getFollowingAnalysis,
  getLanguageCountAnalysis,
  getRepoCountAnalysis,
  getOpenCount,
  getClosedCount,
  getTopicAnalysis,
  getTotalLinesOfCodePushed,
  getTopRepo,
  getPullEventAnalysis,
  getPushEventAnalysis,
  getWatchEventAnalysis,
  getRecentCommitAnalysis,
  getOldestAndNewestRepo,
} from "@/Services/analysis.service";
import {
  FollowerAnalysis,
  FollowingAnalysis,
  LanguageCountAnalysis,
  RepoCountAnalysis,
  PullRequestAnalysis,
  TopicAnalaysis,
  TotalLangAnalysis,
  TopRepo,
  PushEventAnalysis,
  WatchEventAnalysis,
  PullEventAnalysis,
  MostRecentCommit,
  RepoData,
} from "@/Interface/api.interface";
import FollowerProgress from "@/Components/FollowerAnalysis/FollowerProgress";
import FollowingProgress from "@/Components/FollowerAnalysis/FollowingProgress";
import LanguageCount from "@/Components/LanguageAnalysis/LanguageCount";
import RepoProgress from "@/Components/Repository/RepoProgress";
import PullRequestProgress from "@/Components/PullReqAnalysis/PullReqProgress";
import TopicProgress from "@/Components/TopicAnalysis/TopicProgress";
import TotalLangProgress from "@/Components/LanguageAnalysis/TotalLangProgress";
import TopRepoStatus from "@/Components/Repository/TopRepoStatus";
import RecentCommitProgress from "@/Components/Repository/RecentCommitProgeress";
import OldRepoProgress from "@/Components/Repository/OldRepoProgress";
import NewRepoProgress from "@/Components/Repository/NewRepoProgress";

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

  const [issueCount, setIssueCount] = useState<PullRequestAnalysis>({
    OpenCount: 0,
    ClosedCount: 0,
  });

  const [topicCount, setTopicCount] = useState<TopicAnalaysis>({});

  const [totalCount, setTotalCount] = useState<TotalLangAnalysis>({
    TotalCodePushedSinceJoingingGit: 0,
  });

  const [topRepo, setTopRepo] = useState<TopRepo>({
    Name: "",
    StarsCount: 0,
    Language: "",
    DateOfCreation: "",
  });

  const [pullEvent, setPullEvent] = useState<PullEventAnalysis>({
    EventType: "",
    date: new Date(),
    repoName: "",
  });
  const [pushEvent, setPushEvent] = useState<PushEventAnalysis>({
    EvenType: "",
    date: new Date(),
    repoName: "",
  });
  const [watchEvent, setWatchEvent] = useState<WatchEventAnalysis>({
    EventType: "",
    date: new Date(),
    repoName: "",
  });
  const [mostRecCommit, setMostRecCommit] = useState<MostRecentCommit | null>(
    null
  );
  const [oldRepo, setOldRepo] = useState<RepoData | null>(null);

  const [oldestRepoCard, setShowOldestRepoCard] = useState(true);
  const [newestRepoCard, setNewRepoCard] = useState(false);

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
  const getIssueCounts = async () => {
    try {
      const [openResponse, closedResponse]: [any, any] = await Promise.all([
        getOpenCount("64b2e27fd3b241f53c4b4c55"),
        getClosedCount("64b2e27fd3b241f53c4b4c55"),
      ]);

      const openCountData: { OpenCount: number } = await openResponse.json();
      const closedCountData: { ClosedCount: number } =
        await closedResponse.json();

      setIssueCount({
        OpenCount: openCountData.OpenCount,
        ClosedCount: closedCountData.ClosedCount,
      });
    } catch (err) {
      console.error("Error fetching issue counts:", err);
    }
  };

  const getTopicCountData = async () => {
    try {
      const response: any = await getTopicAnalysis("64b2e27fd3b241f53c4b4c55");
      const data: TopicAnalaysis = await response.json();
      setTopicCount(data);
    } catch (err) {
      return err;
    }
  };

  const getTotallangCountData = async () => {
    try {
      const response: any = await getTotalLinesOfCodePushed(
        "64b2e27fd3b241f53c4b4c55"
      );
      const data: TotalLangAnalysis = await response.json();
      setTotalCount(data);
    } catch (err) {
      return err;
    }
  };

  const getTopRepoData = async () => {
    try {
      const response: any = await getTopRepo("64b2e27fd3b241f53c4b4c55");
      const data: TopRepo = await response.json();
      setTopRepo(data);
    } catch (err) {
      return err;
    }
  };

  const getPushEventData = async () => {
    try {
      const response: any = await getPushEventAnalysis(
        "64b2e27fd3b241f53c4b4c55"
      );
      const data: PushEventAnalysis = await response.json();
      setPushEvent(data);
    } catch (err) {
      return err;
    }
  };

  const getWatchEventData = async () => {
    try {
      const response: any = await getWatchEventAnalysis(
        "64b2e27fd3b241f53c4b4c55"
      );
      const data: WatchEventAnalysis = await response.json();
      setWatchEvent(data);
    } catch (err) {
      return err;
    }
  };

  const getPullEventData = async () => {
    try {
      const response: any = await getPullEventAnalysis(
        "64b2e27fd3b241f53c4b4c55"
      );
      const data: PullEventAnalysis = await response.json();
      setPullEvent(data);
    } catch (err) {
      return err;
    }
  };

  const getMostRecentCommitData = async () => {
    try {
      const response: any = await getRecentCommitAnalysis(
        "64b2e27fd3b241f53c4b4c55"
      );
      const data: MostRecentCommit = await response.json();

      setMostRecCommit(data);
    } catch (err) {
      return err;
    }
  };

  const getOldRepoData = async () => {
    try {
      const response: any = await getOldestAndNewestRepo(
        "64b2e27fd3b241f53c4b4c55"
      );
      const data: RepoData = await response.json();
      setOldRepo(data);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getFollowerAnalysisData();
    getFollowingAnalysisData();
    getLanguageCountAnalysisData();
    getRepoCountAnalysisData();
    getIssueCounts();
    getTopicCountData();
    getTotallangCountData();
    getTopRepoData();
    getMostRecentCommitData();
    getOldRepoData();
  }, []);

  return followerAnlData.followerCount !== 0 &&
    followingAnlData.followingCount !== 0 ? (
    <div>
      <div className="flex flex-row basis-20 mt-10">
        <div className="drop-shadow-2xl">
          <Grid numItems={1} numItemsSm={1} numItemsLg={2} className="gap-3">
            <FollowerProgress
              followerCount={followerAnlData.followerCount}
              increaseOrDecrease={followerAnlData.increaseOrDecrease}
            />
            <FollowingProgress
              followingCount={followingAnlData.followingCount}
              increaseOrDecrease={followerAnlData.increaseOrDecrease}
            />
          </Grid>
          <Grid numItems={1} numItemsLg={2} numItemsSm={1}>
            <div className="ml-6 mt-10 relative group items-start justify-cente">
              <div className="tabCardBackGradient absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600  blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
            </div>
            <div>
              <RepoProgress
                RepoCount={repoCount.RepoCount}
                increaseOrDecrease={repoCount.increaseOrDecrease}
              />
            </div>

            <div>
              <TopRepoStatus topRepo={topRepo} />
            </div>
          </Grid>
          <div className="flex flex-row">
            <div>
              {mostRecCommit && (
                <RecentCommitProgress mostRecentCommit={mostRecCommit} />
              )}
            </div>
          </div>
        </div>
        <div className="langCountCardContainer drop-shadow-2xl">
          <div>
            <LanguageCount languageCounts={langCount} />
          </div>

          <div className="repoFlexBox mt-36 ml-10 relative group items-start justify-center">
            <div className="repoGradinetBack w-full absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-red-600  blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
            <Card className="bg-black repoFlexCard ">
              <div className="flex flex-row gap-5 mb-5 repoFlexHeading">
                <h3
                  onClick={() => {
 setNewRepoCard(false) , setShowOldestRepoCard(true)
                  }}
                  className="text-pink-600  font-extrabold font-mono hover:text-orange-500 hover:cursor-pointer"
                >
                  Oldest Repo
                  <span className="tt ml-5"></span>
                </h3>
                <h3
                  onClick={() => {
                    setNewRepoCard(true) , setShowOldestRepoCard(false)
                  }}
                  className="text-blue-600  font-extrabold font-mono hover:text-green-400 hover:cursor-pointer"
                >
                  Newest Repo
                </h3>
              </div>
              <div className="">
                {oldestRepoCard && (
                  <div>{oldRepo && <OldRepoProgress repoData={oldRepo} />}</div>
                )}
                {newestRepoCard && (
                  <div>
                <div>{oldRepo && <NewRepoProgress repoData={oldRepo}/>}</div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>

        <div>
          <PullRequestProgress
            OpenCount={issueCount.OpenCount}
            ClosedCount={issueCount.ClosedCount}
          />
          <TopicProgress topicCounts={topicCount} />
          <TotalLangProgress
            TotalCodePushedSinceJoingingGit={
              totalCount.TotalCodePushedSinceJoingingGit
            }
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default VersionDashboard;
