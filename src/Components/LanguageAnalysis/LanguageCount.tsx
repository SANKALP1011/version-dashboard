import React  from "react";
import { BarChart , Card } from "@tremor/react";
import { LanguageCountAnalysis } from "@/Interface/api.interface";



export const LanguageCount: React.FC<LanguageCountAnalysis> =({LangName , LangCount})=>{
    return <Card>
    <BarChart
      className="mt-6"
      data={LangName}
      index="name"
      categories={["Number of threatened species"]}
      colors={["blue"]}
      valueFormatter={LangCount}
      yAxisWidth={48}
    />

    </Card>
}
export default LanguageCount;