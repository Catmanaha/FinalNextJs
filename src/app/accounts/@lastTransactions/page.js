"use client";

import LastTransactions from "@/components/LastTransactions";
import { StyledTitle } from "@/components/StyledComponents";

export default function LastTransactionsPage() {
    return (
        <div>
            <StyledTitle>Last Transactions</StyledTitle>
            <LastTransactions />
        </div>
    );
}
