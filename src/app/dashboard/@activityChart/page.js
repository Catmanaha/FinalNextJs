"use client";

import ActivityBarChart from "@/components/ActivityBarChart";
import { StyledTitle } from "@/components/StyledComponents";

export default function ActivityChart() {
    return (
        <div>
            <StyledTitle>Weekly Activity</StyledTitle>
            <ActivityBarChart />
        </div>
    );
}
