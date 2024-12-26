"use client";

import styled from "styled-components";
import Card from "./Card";

const Invoice = ({ title, amount, color, icon, date }) => {
    return (
        <Card width="300px" height="60px">
            <StyledMain>
                <StyledIcon $color={color}>{icon}</StyledIcon>
                <div>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledDate>{date}</StyledDate>
                </div>
                <StyledAmount>${amount}</StyledAmount>
            </StyledMain>
        </Card>
    );
};

const StyledMain = styled.div`
    display: flex;
`;

const StyledAmount = styled.h1`
    color: #718ebf;
    font-size: 16px;
    font-weight: 400;
    font-family: Inter;
    margin-left: auto;
`;

const StyledDate = styled.h1`
    color: #718ebf;
    font-size: 15px;
    font-weight: 400;
    font-family: Inter;
`;

const StyledTitle = styled.h1`
    color: #b1b1b1;
    font-size: 16px;
    font-weight: 500;
    font-family: Inter;
    margin-bottom: 7px;
`;

const StyledIcon = styled.div`
    background-color: ${(props) => props.$color};
    width: 60px;
    height: 60px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 20px;
    border-radius: 20px;
`;

export default Invoice;
