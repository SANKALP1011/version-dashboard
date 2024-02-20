// follower-analysis.interface.ts
export interface FollowerAnalysis {
  followerCount: number;
  increaseOrDecrease: string;
}

export interface FollowingAnalysis {
  followingCount: number;
  increaseOrDecrease: string;
}

export interface LanguageCountAnalysis {
  [LangName: string]: number;
}

export interface FollowerFollowingRatio {
  FollowerToFollowingRatio: String;
}

export interface RepoCountAnalysis {
  RepoCount: number;
  increaseOrDecrease: string;
}

export interface PullRequestAnalysis {
  OpenCount: number;
  ClosedCount: number;
}

export interface TopicAnalaysis {
  [Topic: string]: number;
}

export interface TotalLangAnalysis {
  TotalCodePushedSinceJoingingGit: number;
}

export interface TopRepo {
  Name: string;
  StarsCount: number;
  Language: string;
  DateOfCreation: string;
}

export interface PullEventAnalysis {
  EventType: string;
  date: Date;
  repoName: string;
}

export interface PushEventAnalysis {
  EvenType: string;
  date: Date;
  repoName: string;
}

export interface WatchEventAnalysis {
  EventType: string;
  date: Date;
  repoName: string;
}

export interface MostRecentCommit {
  mostRecentCommit:{
  commitDate: string;
  ageInDays: number;
  repoName: string;
  commitData: {
    author_Namae: string;
    author_commit_message: string;
    commit_Date: string;
    _id: string;
  };
}
}

interface RepoInfo {
  name: string;
  private: boolean;
  repoUrl: string;
  description: string;
  dateOfCreation: string;
  repoStarsCount: number;
  repoWatchersCount: number;
  buildLanguage: string;
  repoForkCounts: number;
  languagesUsedUrl: string;
  openIssuesCount: number;
  closedIssueCount: number;
  repo_topics: string[];
  repo_readme_content: string;
  _id: string;
  languagesBytesOfCodeUsed: LanguageBytes[];
  branches: Branch[];
  commit_history: Commit[];
}

interface LanguageBytes {
  language: string;
  bytesOfCode: number;
  _id: string;
}

interface Branch {
  name: string;
  url: string;
  _id: string;
}

interface Commit {
  author_Namae: string;
  author_commit_message: string;
  commit_Date: string;
  _id: string;
}

export interface RepoData {
  oldestRepo: RepoInfo;
  newestRepo: RepoInfo;
}

export interface TotalStar{
  TotalStarsCount: number
}





