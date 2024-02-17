import React ,{ useState} from "react";
import { TopRepo } from "@/Interface/api.interface";
import { Card,Title } from "@tremor/react";
import { RoughNotation } from "react-rough-notation";

interface TopRepoStatusProp {
    topRepo: TopRepo;
}

const TopRepoStatus: React.FC<TopRepoStatusProp> = ({ topRepo }) => {
    const [show,setShow] = useState(true)
    return (
        <div className="topRepoDiv relative group items-start justify-center mt-5 ml-7">
      <div className="topgradientbackGround w-full absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-red-600  blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
            <Card className="topRepoCard bg-black text-white text-left p-4">

                <RoughNotation type="highlight" show={show} color="blue" strokeWidth={4}>
                    <h2 className="topRepoCardTitle font-sans font-extrabold ">Top Repo</h2>
                </RoughNotation>

                <h3 className="text-orange-400 font-sans font-extrabold mb-4 mt-5">{topRepo.Name}</h3>
                <p className="text-blue-400 font-sans font-extrabold mb-2">Stars Count - {topRepo.StarsCount}</p>
                <p className="text-green-500 font-sans font-extrabold mb-2">Language -  {topRepo.Language}</p>
                <p className="text-pink-600 font-sans font-extrabold mb-2">Creation - {new Date(topRepo.DateOfCreation).toLocaleString()}</p>
            </Card>
        </div>
    );
}

export default TopRepoStatus;
