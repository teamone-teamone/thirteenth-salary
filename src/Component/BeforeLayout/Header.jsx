import styled, { css } from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Box = styled.div`
  width: 100%;
  display: inline-block;
  text-align: center;
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
  display: flex;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: white;
  padding-left: 20px;
  padding-top: 5px;
`;
const Backicon = styled.button`
  padding-left: 5%;
  padding-right: 2%;
  margin: 0;
  border: 0;
  background-color: #2a1d89;
  cursor: pointer;
  color: white;
`;

const Title = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 14px;
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
          <Backicon>
            <MdArrowBackIos size="24" />
          </Backicon>
          <Link to="/">
            <Title>이전 화면으로</Title>
          </Link>
        </Contents>
      </Bar>
    </Box>
  );
};

export default Header;
