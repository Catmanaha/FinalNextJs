"use client";

import { StyledTitle } from "@/components/StyledComponents";
import TransactionsTable from "@/components/TransactionsTable";

export default function AllTransactions() {
    return (
        <div>
            <StyledTitle>Recent Transactions</StyledTitle>
            <TransactionsTable />
        </div>
    );
}
