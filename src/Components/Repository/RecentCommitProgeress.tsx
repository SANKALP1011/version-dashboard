import React, {useState} from "react";
import { Card } from "@tremor/react";
import { MostRecentCommit } from "@/Interface/api.interface";
import { RoughNotation } from "react-rough-notation";

interface MostRecentCommitInterfaceProp {
  mostRecentCommit: MostRecentCommit;
}

const RecentCommitProgress: React.FC<MostRecentCommitInterfaceProp> = ({
  mostRecentCommit,
}) => {
  const [show,setShow] = useState(true)
  return (
    <div className="mt-3 relative group items-start justify-center">
      <div className="ml-5 mostRecentGradient absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
      <Card className="bg-black mostRecentCard ml-7">
        <div className="w-32 text-center mb-1">
        <RoughNotation type="highlight" show={show} color="red" strokeWidth={5}>
          <h2 className="text-white text-center  font-extrabold font-mono">Recent Commit</h2>
        </RoughNotation>
        </div>
 
        <h1 className="text-pink-600  font-extrabold font-mono mb-1">
      <span className="text-blue-500 mr-2">Name:</span>   {mostRecentCommit.mostRecentCommit.repoName}
        </h1>
        <h3 className="text-red-600  font-extrabold font-mono mb-1">
     <span className="text-violet-600 mr-2"> Commit Date:</span>    {mostRecentCommit.mostRecentCommit.commitDate}
        </h3>
        <p className="text-orange-600 font-extrabold font-mono mb-1">
       <span className="text-blue-600">AgeInDays:</span>   {mostRecentCommit.mostRecentCommit.ageInDays}
        </p>
        <p className="text-yellow-600  font-extrabold font-mono mb-1">
      <span className="text-pink-400 mr-2">  Author:</span> {mostRecentCommit.mostRecentCommit.commitData.author_Namae}
        </p>
        <p className="text-blue-600  font-extrabold font-mono">
       <span className="text-green-600 mr-2">Message:</span>   {mostRecentCommit.mostRecentCommit.commitData.author_commit_message}
        </p>
      </Card>
    </div>
  );
};

export default RecentCommitProgress;
