import React , {useState} from "react"
import ReactWordcloud from "react-wordcloud"
import { Card,Title } from "@tremor/react"
import { TopicAnalaysis } from "@/Interface/api.interface"
import { RoughNotation } from "react-rough-notation"
interface TopicCountProps {
    topicCounts:TopicAnalaysis
}

export const TopicProgress:React.FC<TopicCountProps>=({topicCounts})=>{
    const [show,setShow] = useState(true)
    const wordCloudData = Object.entries(topicCounts).map(([topic, count]) => ({
        text: topic,
        value: count
      }));


      const options:any ={
        color:["black"]
    }
     
    return<div className="mt-2 relative group items-start justify-center ml-16">
        <div className="topicBackGroundGrad w-full absolute -inset-0.5 bg-gradient-to-r from-yellow-300 to-red-400  blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
        <Card className="topicCloudCard">
            <RoughNotation type="underline" show={show} color="pink" strokeWidth={5}>
                <h2 className="topicCardTitle font-mono mb-2">Topics Worked</h2>
            </RoughNotation>
     <ReactWordcloud words={wordCloudData} options={options}/>
        </Card>
    </div>
}

export default TopicProgress