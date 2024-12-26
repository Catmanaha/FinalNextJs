"use client";

import Image from "next/image";
import styled from "styled-components";

const TransferPerson = ({ image, name, description }) => {
    return (
        <StyledMain>
            <Image alt="photo" src={image} width="70" height="70" />
            <StyledName>{name}</StyledName>
            <StyledDescription>{description}</StyledDescription>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    height: 127px;
    width: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-right: 28px;
`;

const StyledName = styled.h1`
    color: #232323;
    font-size: 16px;
    font-weight: 400;
    font-family: Inter;
`;

const StyledDescription = styled.h1`
    color: #718ebf;
    font-size: 15px;
    font-weight: 400;
    margin: 0;
`;

export default TransferPerson;
