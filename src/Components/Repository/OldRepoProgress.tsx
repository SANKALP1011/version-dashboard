import React from "react";
import { RepoData } from "@/Interface/api.interface";
import { Card } from "@tremor/react";

interface RepoDataProp{
    repoData: RepoData
}

export const OldRepoProgress: React.FC<RepoDataProp> = ({repoData})=>{

    return <div>
      <Card className="bg-zinc-900 oldestRepoCard  hover:bg-white" decorationColor="black">
        <h3 className="text-orange-400 font-extrabold ">
            <span className="text-pink-600 mr-2 font-extrabold">Name :</span>
            {repoData.oldestRepo.name}
        </h3>
        <h3 className="text-red-600 font-extrabold">
            <span className="text-green-600 mr-2 font-extrabold">Language :</span>
            {repoData.oldestRepo.buildLanguage}
        </h3>
        <h3 className="text-violet-600 font-extrabold">
            <span className="text-orange-600 mr-2 font-extrabold">Date :</span>
            {repoData.oldestRepo.dateOfCreation}
        </h3>
        <h3 className="text-purple-600 font-extrabold">
            <span className="text-green-600 mr-2 font-extrabold">Stars :</span>
            {repoData.oldestRepo.repoStarsCount}
        </h3>
        <h3 className="text-pink-600 font-extrabold">
            <span className="text-blue-600 mr-2 font-extrabold">Issue Count :</span>
            {repoData.oldestRepo.closedIssueCount}
        </h3>

        </Card>  
    </div>
}

export default OldRepoProgress