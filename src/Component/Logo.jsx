import styled from "styled-components";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'GongGothicBold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicBold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

const Title = styled.button`
  color: #2a1d89;
  font-size: 24px;
  font-family: GongGothicBold;
  line-height: 150%;
  font-weight: bold;
  padding-top: 40%;
  display: inline-block;
  text-align: center;
  margin: 0;
  border: 0;
  background-color: white;
  cursor: pointer;
  color: #2a1d89;
`;

const Image = styled.img`
  padding-top: 5%;
  display: inline-block;
  text-align: center;
  padding-right: 15px;
  margin: 0;
  border: 0;
  background-color: white;
  cursor: pointer;
`;

export default function Logo() {
  return (
    <div>
      <GlobalStyles />
      <Image src="./img/logo-bed.png"></Image>
      <Title>누구나 세금</Title>
    </div>
  );
}
