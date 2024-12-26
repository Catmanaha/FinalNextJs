"use client";

import { devices } from "@/styles/breakpoints";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavLink = ({ children, url, title, isActive }) => {
    const clonedChildren = React.cloneElement(children, {
        children: applyFillToPaths(
            children.props.children,
            isActive ? "#2D60FF" : "#B1B1B1"
        ),
    });
    return (
        <Link href={url}>
            <StyledMain $isActive={isActive}>
                <StyledBorder $isActive={isActive} />
                <StyledTitleContainer>
                    {clonedChildren}
                    <StyledTitle>{title}</StyledTitle>
                </StyledTitleContainer>
            </StyledMain>
        </Link>
    );
};

const applyFillToPaths = (children, fillColor) => {
    return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === "path") {
                return React.cloneElement(child, { fill: fillColor });
            }
            if (child.props?.children) {
                return React.cloneElement(child, {
                    children: applyFillToPaths(child.props.children, fillColor),
                });
            }
        }
        return child;
    });
};

const StyledTitleContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledTitle = styled.h1`
    margin-left: 26px;
    ${devices.desktop} {
        margin-left: 26px;
    }

    ${devices.tablet} {
        margin-left: 20px;
    }
`;

const StyledBorder = styled.div`
    background-color: ${(props) =>
        props.$isActive ? "#2D60FF" : "transparent"};
    width: 5px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-right: 25px;

    ${devices.desktop} {
        margin-right: 25px;
    }

    ${devices.tablet} {
        margin-right: 15px;
    }
`;

const StyledMain = styled.div`
    color: ${(props) => (props.$isActive ? "#2D60FF" : "#B1B1B1")};
    font-weight: 500;
    font-family: Inter;
    display: flex;
    height: 50px;
    font-size: 18px;
    margin-bottom: 21px;

    ${devices.desktop} {
        font-size: 18px;
        margin-bottom: 21px;
    }

    ${devices.tablet} {
        font-size: 16px;
        margin-bottom: 35px;
    }
`;

export default NavLink;
