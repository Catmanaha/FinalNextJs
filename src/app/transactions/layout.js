"use client";

import { StyledLayout } from "@/components/StyledComponents";
import styled from "styled-components";

export default function TransactionsRootLayout({
    children,
    cardsList,
    monthlyExpensesChart,
    allTransactions,
}) {
    return (
        <StyledLayout>
            <StyledInner>
                {cardsList}
                {monthlyExpensesChart}
            </StyledInner>
            <div>{allTransactions}</div>
            {children}
        </StyledLayout>
    );
}

const StyledInner = styled.div`
    display: flex;
    margin-bottom: 24px;
    gap: 30px;
`;
