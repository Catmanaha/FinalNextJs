"use client";
import Card from "@/components/Card";
import { StyledTitle } from "@/components/StyledComponents";
import TransferPerson from "@/components/TransferPerson";
import styled from "styled-components";

export default function TransferSection() {
  return (
    <div>
      <StyledTitle>Quick Transfer</StyledTitle>
      <Card height={"276px"} width={"445px"} padding={"35px 26px 35px 25px"}>
        <StyledMain>
          <TransferPerson
            image="/girl.png"
            name="Livia Bator"
            description="CEO"
          />
          <TransferPerson
            image="/boy1.png"
            name="Randy Press"
            description="Director"
          />
          <TransferPerson
            image="/boy2.png"
            name="Workman"
            description="Designer"
          />
          <StyledArrow>
            <h1>{">"}</h1>
          </StyledArrow>
        </StyledMain>
        <StyledInner>
          <StyledInnerText>Write Amount</StyledInnerText>
          <StyledActions>
            <SendInput
              type="number"
              step="any"
              placeholder="525.50"
            />
            <SendButton>
              Send{" "}
              <svg
                width="26"
                height="23"
                viewBox="0 0 26 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "11px" }}
              >
                <path
                  d="M25.9824 0.923369C26.1091 0.333347 25.5307 -0.164153 24.9664 0.0511577L0.490037 9.39483C0.195457 9.50731 0.000610804 9.78965 1.43342e-06 10.105C-0.000607937 10.4203 0.193121 10.7034 0.487294 10.817L7.36317 13.4726V21.8369C7.36317 22.1897 7.60545 22.4963 7.94873 22.5779C8.28972 22.659 8.64529 22.4967 8.80515 22.1796L11.6489 16.5364L18.5888 21.6868C19.011 22.0001 19.6178 21.8008 19.7714 21.2974C26.251 0.0528342 25.9708 0.97674 25.9824 0.923369ZM19.9404 3.60043L8.01692 12.092L2.88664 10.1106L19.9404 3.60043ZM8.8866 13.3428L19.2798 5.94118C10.3366 15.3758 10.8037 14.8792 10.7647 14.9317C10.7067 15.0096 10.8655 14.7058 8.8866 18.6327V13.3428ZM18.6293 19.8197L12.5206 15.2862L23.566 3.63395L18.6293 19.8197Z"
                  fill="white"
                />
              </svg>
            </SendButton>
          </StyledActions>
        </StyledInner>
      </Card>
    </div>
  );
}

const StyledMain = styled.div`
  display: flex;
`;

const StyledArrow = styled.div`
  text-align: center;
  align-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 10px #718EBF;
  margin-top: 41px;
`;

const StyledInner = styled.div`
  display: flex;
  align-items: center;
  margin-top: 45px;
  gap: 10px;
`;

const StyledInnerText = styled.h1`
  font-weight: 400;
  font-size: 16px;
  font-family: Inter;
  color: #718ebf;
  margin: 0;
  white-space: nowrap;
`;

const StyledActions = styled.div`
  display: flex;
  position: relative;
  width: 280px;
  height: 50px;
`;

const SendButton = styled.button`
  padding: 10px 15px;
  background-color: #1814f3;
  color: #ffffff;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  width: 125px;
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

const SendInput = styled.input`
  padding: 10px 135px 10px 30px;
  background-color: #edf1f7;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 400;
  font-family: Inter;
  color: #718ebf;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;
