"use client";

import BalanceAreaChart from "@/components/BalanceAreaChart";
import { StyledTitle } from "@/components/StyledComponents";

export default function BalanceChart() {
    return (
        <div>
            <StyledTitle>Balance History</StyledTitle>
            <BalanceAreaChart />
        </div>
    );
}
