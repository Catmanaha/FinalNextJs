"use client"

import styled from "styled-components";
import Card from "./Card";

const Asset = ({ title, amount, color, icon }) => {
    return (
        <Card width="255px" height="120px" padding={"25px 36px 25px 36px"}>
            <StyledMain>
                <StyledIcon $color={color}>{icon}</StyledIcon>
                <div>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledAmount>${amount.toLocaleString()}</StyledAmount>
                </div>
            </StyledMain>
        </Card>
    );
};

const StyledMain = styled.div`
    display: flex;
`;

const StyledAmount = styled.h1`
    color: #232323;
    font-size: 25px;
    font-weight: 600;
    font-family: Inter;
`;

const StyledTitle = styled.h1`
    color: #718ebf;
    font-size: 16px;
    font-weight: 400;
    font-family: Inter;
    margin-bottom: 7px;
`;

const StyledIcon = styled.div`
    background-color: ${(props) => props.$color};
    width: 70px;
    height: 70px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 15px;
    border-radius: 20px;
`;

export default Asset;
