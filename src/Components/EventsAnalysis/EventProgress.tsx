import React from "react";
import { ScatterChart, Card , Tracker } from '@tremor/react';
import { PullEventAnalysis, PushEventAnalysis, WatchEventAnalysis } from "@/Interface/api.interface";

interface EventProgressProps {
    pullEvents: PullEventAnalysis[];
    pushEvents: PushEventAnalysis[];
    watchEvents: WatchEventAnalysis[];
}

const isDate = (value: any): value is Date => {
    return value instanceof Date;
};
// TO DO , WORK IN PROGRESS
const EventProgress: React.FC<EventProgressProps> = ({ pullEvents, pushEvents, watchEvents }) => {

    const data = [
        ...pullEvents.map(event => ({ date: event.date, repoName: event.repoName, eventType: event.EventType })),
        ...pushEvents.map(event => ({ date: event.date, repoName: event.repoName, eventType: event.EvenType })),
        ...watchEvents.map(event => ({ date: event.date, repoName: event.repoName, eventType: event.EventType }))
    ];

    return (
        <Card className=" h-96 w-96">
            <ScatterChart
                className="h-96 w-96"
                data={data}
                category="repoName"
                x="date"
                y="EventName"
                showOpacity={true}
                minYValue={60}
                valueFormatter={{
                    x: (date) => isDate(date) ? date.toISOString() : '',
                    y: (repoName) => repoName.toString()

                }}
                showLegend={true}
            />
        </Card>
    );
}

export default EventProgress;
