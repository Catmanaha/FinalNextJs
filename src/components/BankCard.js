"use client"

import styled from "styled-components";
import Card from "./Card";
import Image from "next/image";

const BankCard = ({
    balance,
    image,
    cardHolder,
    validThru,
    cardNumber,
    blendMode,
    blendBgColor,
    backgroundImageTop,
    backgroundImageBottom,
    borderTopBottom,
    textColor,
    titleColor,
    height,
    width,
    padding
}) => {
    return (
        <Card
            backgroundImage={backgroundImageTop}
            border={"1px solid #DFEAF2"}
            height={height}
            width={width}
            padding={padding}
        >
            <StyledInner>
                <div>
                    <StyledTitle $titleColor={titleColor}>Balance</StyledTitle>
                    <StyledBalance $textColor={textColor}>
                        ${balance.toLocaleString()}
                    </StyledBalance>
                </div>
                <StyledImage>
                    <Image alt="photo" width="35" height="35" src={image} />
                </StyledImage>
            </StyledInner>
            <StyledInner>
                <div style={{ marginRight: "67px" }}>
                    <StyledTitle $titleColor={titleColor}>CARD HOLDER</StyledTitle>
                    <StyledText $textColor={textColor}>{cardHolder}</StyledText>
                </div>

                <div>
                    <StyledTitle $titleColor={titleColor}>VALID THRU</StyledTitle>
                    <StyledText $textColor={textColor}>{validThru}</StyledText>
                </div>
            </StyledInner>
            <StyledBottom
                $borderTopBottom={borderTopBottom}
                $backgroundImageBottom={backgroundImageBottom}
            >
                <StyledCardNumber $textColor={textColor}>
                    {cardNumber}
                </StyledCardNumber>
                <StyledInnerBottom>
                    <FirstCircle $blendBgColor={blendBgColor} />
                    <SecondCircle
                        $blendBgColor={blendBgColor}
                        $blendMode={blendMode}
                    />
                </StyledInnerBottom>
            </StyledBottom>
        </Card>
    );
};

const StyledInner = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
`;

const StyledImage = styled.div`
    margin-left: auto;
`;

const StyledBalance = styled.h1`
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.$textColor || "black"};
`;

const StyledText = styled.h1`
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.$textColor || "black"};
`;

const StyledTitle = styled.h1`
    font-size: 12px;
    font-weight: 400;
    color: ${(props) => props.$titleColor || "#718ebf"};
`;

const StyledInnerBottom = styled.div`
    margin-left: auto;
    display: flex;
`;

const StyledCardNumber = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-left: 26px;
    color: ${(props) => props.$textColor || "black"};
`;

const StyledBottom = styled.div`
    display: flex;
    padding-top: 15px;
    border-top: ${(props) => props.$borderTopBottom || "none"};
    background-image: ${(props) => props.$backgroundImageBottom || "none"};
    margin-top: 39.11px;
    margin-right: -21px;
    margin-left: -27px;
`;

const FirstCircle = styled.div`
    background-color: ${(props) => props.$blendBgColor};
    height: 30px;
    width: 30px;
    border-radius: 50%;
    position: relative;
`;

const SecondCircle = styled.div`
    margin-left: -16px;
    background-color: ${(props) => props.$blendBgColor};
    height: 30px;
    width: 30px;
    border-radius: 50%;
    mix-blend-mode: ${(props) => props.$blendMode};
    margin-right: 20px;
`;

export default BankCard;
