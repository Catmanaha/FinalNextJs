"use client";

import ExpensesPieChart from "@/components/ExpensesPieChart";
import { StyledTitle } from "@/components/StyledComponents";

export default function ExpenseChart() {
    return (
        <div>
            <StyledTitle>Expense Statistics</StyledTitle>
            <ExpensesPieChart />
        </div>
    );
}
