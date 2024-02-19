import { BASE_API } from "../Utils/api.utils";

export const getFollowerAnalysis = async (userId: string) => {
  const endPoint = "followerAnalysis";
  try {
    const response = await fetch(`${BASE_API}${endPoint}?id=${userId}`)
    return response;
  } catch (error) {
    return error
  }
};

export const getFollowingAnalysis = async(userId:string)=>{
    const endPoint = "followingAnalysis"
    try{
        const response = await fetch(`${BASE_API}${endPoint}?id=${userId}`)
        return response;
    }
    catch(err){
        return err;
    }
}

export const getLanguageCountAnalysis = async(userId:string)=>{
    const endPoint = "tsotalLanguageCountsAnalysi"
    try{
        const response = await fetch(`${BASE_API}${endPoint}?id=${userId}`)
        return response;
    }
    catch(err){
        return err;
    }
}

export const getRepoCountAnalysis = async(userId:string)=>{
  const endPoint = "repoCountAnalysis"
  try{
    const response = await fetch(`${BASE_API}${endPoint}?id=${userId}`)
    return response
  }
  catch(err){
    return err;
  }
}

export const getClosedCount = async(userId:string)=>{
  const endPoint = "totalClosedIssuesCounts"
  try{
    const response = await fetch(`${BASE_API}${endPoint}?id=${userId}`)
    return response;
  }
  catch(err){
    return err;
  }
}

export const getOpenCount = async(userId:string)=>{
  const endPoint = "totalOpenIssuesCounts"
  try{
    const response = await fetch(`${BASE_API}${endPoint}?id=${userId}`)
    return response;
  }
  catch(err){
    return err;
  }
}

export const getTopicAnalysis= async(userId:string)=>{
  const endPoint = "totalTopicsCounts"
  try{
    const response = await fetch(`${BASE_API}${endPoint}?id=${userId}`);
    return response;
  }
  catch(err){
    return err;
  }
}

export const getTotalLinesOfCodePushed = async(userId:string)=>{
  const endPoint = "totalLinesOfCodePushed";
  try{
    const response = await fetch(`${BASE_API}${endPoint}?id=${userId}`)
    return response;
  }
  catch(err){
    return err
  }
}

export const getTopRepo = async(userId:string)=>{
  const endPoint = "getTopRepoAnalysis";
  try{
    const response = await fetch(`${BASE_API}${endPoint}?id=${userId}`)
    return response;
  }
  catch(err){
    return err;
  }

}

export const getPushEventAnalysis = async(userId:string)=>{
  const endPoint ="getUserPushEventsAnalysis"
  try{
    const response = await fetch(`${BASE_API}${endPoint}?id=${userId}`)
    return response;
  }
  catch(err){
    return err;
  }
}

export const getWatchEventAnalysis = async(userId:string)=>{
  const endPoint ="getUserWatchEventsAnalysis"
  try{
    const response = await fetch(`${BASE_API}${endPoint}?id=${userId}`)
    return response;
  }
  catch(err){
    return err;
  }
}

export const getPullEventAnalysis = async(userId:string)=>{
  const endPoint ="getUserPullEventsAnalysis"
  try{
    const response = await fetch(`${BASE_API}${endPoint}?id=${userId}`)
    return response;
  }
  catch(err){
    return err;
  }
}

export const getRecentCommitAnalysis = async(userId: string)=>{
  const endPoint = "getRecentCommitAnalysis"
  try{
    const response = await fetch(`${BASE_API}${endPoint}?id=${userId}`)
    return response
  }
  catch(err){
    return err;
  }
}