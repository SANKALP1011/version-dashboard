import React from "react";
import { Card } from "@tremor/react";
import { MostRecentCommit } from "@/Interface/api.interface";

interface MostRecentCommitInterfaceProp {
  mostRecentCommit: MostRecentCommit;
}

const RecentCommitProgress: React.FC<MostRecentCommitInterfaceProp> = ({
  mostRecentCommit,
}) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }} className="mt-5">
      <div className="ml-4 mostRecentGradient absolute inset-0 bg-gradient-to-r from-teal-600 to-red-600 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
      <Card className="bg-black mostRecentCard ml-7">
        <h1 className="text-white">
          {mostRecentCommit.mostRecentCommit.ageInDays}
        </h1>
        <h3 className="text-white">
          {mostRecentCommit.mostRecentCommit.commitDate}
        </h3>
        <p className="text-white">
          {mostRecentCommit.mostRecentCommit.repoName}
        </p>
        <p className="text-white">
          {mostRecentCommit.mostRecentCommit.commitData.author_Namae}
        </p>
        <p className="text-white">
          {mostRecentCommit.mostRecentCommit.commitData.author_commit_message}
        </p>
      </Card>
    </div>
  );
};

export default RecentCommitProgress;
