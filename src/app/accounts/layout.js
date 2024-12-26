"use client";

import { StyledLayout } from "@/components/StyledComponents";
import styled from "styled-components";

export default function AccountsRootLayout({
    children,
    assets,
    lastTransactions,
    myCard,
    debitCreditOverview,
    invoicesSent,
}) {
    return (
        <StyledLayout>
            {children}
            <StyledAssets>{assets}</StyledAssets>
            <StyledInner>
                {lastTransactions}
                {myCard}
            </StyledInner>
            <StyledInnerInner>
                {debitCreditOverview}
                {invoicesSent}
            </StyledInnerInner>
        </StyledLayout>
    );
}

const StyledInnerInner = styled.div`
    display: flex;
    gap: 30px;
`;

const StyledInner = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 24px;
`;

const StyledAssets = styled.div`
    margin-bottom: 24px;
`;
