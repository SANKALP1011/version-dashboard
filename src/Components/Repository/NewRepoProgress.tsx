import React from "react";
import { RepoData } from "@/Interface/api.interface";
import { Card } from "@tremor/react";

interface RepoDataProp{
    repoData: RepoData
}

export const NewRepoProgress: React.FC<RepoDataProp> = ({repoData})=>{

    return <div>
      <Card className="bg-zinc-900 oldestRepoCard hover:bg-white">
        <h3 className="text-orange-400 font-extrabold">
            <span className="text-pink-600 mr-2 font-extrabold">Name :</span>
            {repoData.newestRepo.name}
        </h3>
        <h3 className="text-red-600 font-extrabold">
            <span className="text-green-600 mr-2 font-extrabold">Language :</span>
            {repoData.newestRepo.buildLanguage}
        </h3>
        <h3 className="text-violet-600 font-extrabold">
            <span className="text-orange-600 mr-2 font-extrabold">Date :</span>
            {repoData.newestRepo.dateOfCreation}
        </h3>
        <h3 className="text-purple-600 font-extrabold">
            <span className="text-green-600 mr-2 font-extrabold">Stars :</span>
            {repoData.newestRepo.repoStarsCount}
        </h3>
        <h3 className="text-pink-600 font-extrabold">
            <span className="text-blue-600 mr-2 font-extrabold font-mono">Issue Count :</span>
            {repoData.newestRepo.closedIssueCount}
        </h3>

        </Card>  
    </div>
}

export default NewRepoProgress