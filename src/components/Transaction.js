"use client";

import styled from "styled-components";

const Transaction = ({ margin, icon, title, date, amount, type }) => {
    return (
        <StyledTransaction $margin={margin}>
            <StyledMain>
                <StyledIcon>{icon}</StyledIcon>
                <div>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledDate>{date}</StyledDate>
                </div>
                <StyledInner>
                    {type === "Deposit" ? (
                        <StyledDeposit>
                            +${amount.toLocaleString()}
                        </StyledDeposit>
                    ) : type === "Withdrawal" ? (
                        <StyledWithdrawal>
                            -${amount.toLocaleString()}
                        </StyledWithdrawal>
                    ) : null}
                </StyledInner>
            </StyledMain>
        </StyledTransaction>
    );
};

const StyledDeposit = styled.h1`
    color: #41d4a8;
`;

const StyledWithdrawal = styled.h1`
    color: #ff4b4a;
`;

const StyledMain = styled.div`
    display: flex;
`;

const StyledInner = styled.div`
    margin-left: auto;
    align-content: center;
`;

const StyledDate = styled.h1`
    font-family: Inter;
    font-weight: 400;
    font-size: 15px;
    color: #718ebf;
`;

const StyledTitle = styled.h1`
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    color: #232323;
`;

const StyledIcon = styled.div`
    border-radius: 100%;
    background-color: #fff5d9;
    height: 55px;
    width: 55px;
    margin-right: 17px;
    align-content: center;
    padding-left: 14px;
`;

const StyledTransaction = styled.div`
    width: 301px;
    height: 55px;
    margin: ${(props) => props.$margin || "0"};
`;

export default Transaction;
