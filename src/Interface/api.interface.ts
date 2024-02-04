// follower-analysis.interface.ts
export interface FollowerAnalysis {
    followerCount: number;
    increaseOrDecrease: string; // Use lowercase 'string'
  }
  
  export interface FollowingAnalysis {
    followingCount: number;
    increaseOrDecrease: string;
  }

  export interface LanguageCountAnalysis{
    [language:string]:any;
  }
  