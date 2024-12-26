"use client";

import { devices } from "@/styles/breakpoints";
import styled from "styled-components";

export const StyledTitle = styled.h1`
    font-family: Inter;
    font-weight: 600;
    color: #343c6a;
    font-size: 22px;
    margin-bottom: 21px;

    ${devices.desktop} {
        font-size: 22px;
        margin-bottom: 21px;
    }

    ${devices.tablet} {
        font-size: 18px;
        margin-bottom: 16px;
    }
`;

export const StyledTitleLeft = styled.h1`
    color: #343c6a;
    font-family: Inter;
    font-weight: 600;
    margin-left: auto;
    font-size: 17px;
    margin-bottom: 21px;

    ${devices.desktop} {
        font-size: 17px;
        margin-bottom: 21px;
    }

    ${devices.tablet} {
        font-size: 15px;
        margin-bottom: 16px;
    }
`;

export const StyledCardsTitles = styled.div`
    display: flex;
    align-items: baseline;
`;

export const StyledLayout = styled.div`
    background-color: #f5f7fa;
    height: 100%;
    padding-left: 40px;
    padding-top: 24px;
    
    ${devices.desktop} {
        padding-left: 40px;
        padding-top: 24px;
    }

    ${devices.tablet} {
        padding-left: 25px;
        padding-top: 20px;
    }
`;

export const StyledCards = styled.div`
    display: flex;
    gap: 30px;
`;

export const StyledCardsMain = styled.div`
    width: 730px;
    height: 282px;
`;
