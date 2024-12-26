"use client"

import styled from "styled-components";

const Card = ({ children, backgroundImage, border, margin, width, height, padding }) => {
    return (
        <StyledCard
            $backgroundImage={backgroundImage}
            $border={border}
            $margin={margin}
            $width={width}
            $height={height}
            $padding={padding}
        >
            {children}
        </StyledCard>
    );
};

const StyledCard = styled.div`
    border-radius: 25px;
    padding: ${(props) => props.$padding || "0"};
    background-color: #ffffff;
    color: #343c6a;
    font-family: Lato;
    background-image: ${(props) => props.$backgroundImage || "none"};
    border: ${(props) => props.$border || "none"};
    margin: ${(props) => props.$margin || "0"};
    width: ${(props) => props.$width || "auto"};
    height: ${(props) => props.$height || "auto"};
    background-size: cover;
    background-position: center;
`;

export default Card;
