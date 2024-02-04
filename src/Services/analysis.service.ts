import { BASE_API } from "../Utils/api.utils";

export const getFollowerAnalysis = async (userId: string) => {
  const endPoint = "followerAnalysis";
  try {
    const response = await fetch(`${BASE_API}${endPoint}?id=${userId}`,{cache:"force-cache"})
    return response;
  } catch (error) {
    return error
  }
};