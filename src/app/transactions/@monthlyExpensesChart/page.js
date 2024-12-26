"use client";

import MonthlyExpensesBarChart from "@/components/MonthlyExpensesBarChart";
import { StyledTitle } from "@/components/StyledComponents";

export default function MonthlyExpensesChart() {
    return (
        <div>
            <StyledTitle>My Expense</StyledTitle>
            <MonthlyExpensesBarChart />
        </div>
    );
}
