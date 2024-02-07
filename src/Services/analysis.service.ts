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
        console.log(response)
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