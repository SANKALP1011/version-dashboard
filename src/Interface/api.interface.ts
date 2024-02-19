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

export interface CommitData {
  
}





