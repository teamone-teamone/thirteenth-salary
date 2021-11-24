import styled, { createGlobalStyle } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'GongGothicMedium';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff') format('woff');
      font-weight: normal;
      font-style: normal;
}
`;

const Box = styled.div`
  width: 100%;
  display: inline-block;
  text-align: center;
`;

const Title = styled.button`
  font-style: normal;
  font-weight: 300;
  font-family: "GongGothicMedium";
  font-size: 15px;
  line-height: 14px;
  padding: 5%;
  margin: 0;
  border: 0;
  background-color: #2a1d89;
  cursor: pointer;
  color: white;
`;

const Bar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #2a1d89;
`;
const Contents = styled.div`
  width: 100%;
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: space-around;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: white;
  padding-top: 5px;
`;

const Menuicon = styled.div`
  padding: 10%;
  margin: 0;
  border: 0;
  background-color: #2a1d89;
  cursor: pointer;
  color: white;
`;

const Header = () => {
  return (
    <Box>
      <Bar>
        <Contents>
          <GlobalStyles />
          <Title>누구나 세금</Title>
          <Menuicon>
            <AiOutlineMenu size="24" />
          </Menuicon>
        </Contents>
      </Bar>
    </Box>
  );
};

export default Header;
