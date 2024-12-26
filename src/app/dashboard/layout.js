"use client";

import { StyledLayout } from "@/components/StyledComponents";
import { devices } from "@/styles/breakpoints";
import styled from "styled-components";

export default function DashboardRootLayout({
    children,
    activityChart,
    balanceChart,
    cardsList,
    expenseChart,
    transactionList,
    transferSection,
}) {
    return (
        <StyledLayout>
            {children}
            <div>
                <StyledInner>
                    {cardsList}
                    {transactionList}
                </StyledInner>
                <StyledInner>
                    {activityChart}
                    {expenseChart}
                </StyledInner>
                <StyledInner>
                    {transferSection}
                    {balanceChart}
                </StyledInner>
            </div>
        </StyledLayout>
    );
}

const StyledInner = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 30px;

    ${devices.desktop} {
        gap: 30px;
    }

    ${devices.tablet} {
        gap: 25px;
    }
`;
