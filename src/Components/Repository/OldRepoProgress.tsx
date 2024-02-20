import React from "react";
import { RepoData } from "@/Interface/api.interface";
import { Card } from "@tremor/react";

interface RepoDataProp{
    repoData: RepoData
}

export const OldRepoProgress: React.FC<RepoDataProp> = ({repoData})=>{

    return <div>
      <Card className="bg-black oldestRepoCard  hover:bg-white" decorationColor="black">
        <h3 className="text-orange-400 font-extrabold font-mono">
            <span className="text-pink-600 mr-2 font-extrabold font-mono">Name :</span>
            {repoData.oldestRepo.name}
        </h3>
        <h3 className="text-red-600 font-extrabold font-mono">
            <span className="text-green-600 mr-2 font-extrabold font-mono">Language :</span>
            {repoData.oldestRepo.buildLanguage}
        </h3>
        <h3 className="text-violet-600 font-extrabold font-mono">
            <span className="text-orange-600 mr-2 font-extrabold font-mono">Date :</span>
            {repoData.oldestRepo.dateOfCreation}
        </h3>
        <h3 className="text-purple-600 font-extrabold font-mono">
            <span className="text-green-600 mr-2 font-extrabold font-mono">Stars :</span>
            {repoData.oldestRepo.repoStarsCount}
        </h3>
        <h3 className="text-pink-600 font-extrabold font-mono">
            <span className="text-blue-600 mr-2 font-extrabold font-mono">Issue Count :</span>
            {repoData.oldestRepo.closedIssueCount}
        </h3>

        </Card>  
    </div>
}

export default OldRepoProgress