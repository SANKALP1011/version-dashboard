// follower-analysis.interface.ts
export interface FollowerAnalysis {
  followerCount: number;
  increaseOrDecrease: string; // Use lowercase 'string'
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

export interface RepoCountAnalysis{
  RepoCount: number;
  increaseOrDecrease:string
}

export interface PullRequestAnalysis{
  OpenCount: number;
  ClosedCount: number;
}

export interface TopicAnalaysis{
  [Topic:string]:number
}

export interface TotalLangAnalysis{
  TotalCodePushedSinceJoingingGit:number
}

export interface TopRepo {
  Name: string;
  StarsCount: number;
  Language: string;
  DateOfCreation: string;
}
