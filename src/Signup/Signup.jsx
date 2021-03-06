import React from "react";
import BlueButton from "../Component/Button/BlueButton";
import WhiteButton from "../Component/Button/WhiteButton";
import HomeLayout from "../Component/HomeLayout/HomeLayout";
import Logo from "../Component/Logo";
import styled from "styled-components";
// import CheckBox from '../Component/Checkbox';
import { IoMdMail } from "react-icons/io";
import { RiKeyFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { Link } from "react-router-dom";

const Root = styled.div`
  background: #ffffff;
  font-family: "NotoSans";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Page = styled.div`
  background: #ffffff;
  width: 300px;
  @media screen(max-width:300px) {
    width: 100%;
  }
`;

const Box = styled.div`
  width: 100%;
  display: inline-block;
  text-align: center;
  padding-bottom: 20%;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  color: black;
  padding-top: 20px;
  display: inline-block;
  margin-bottom: 10px;
`;

const Input = styled.input.attrs({
  required: true,
})`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: #666666;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #666666;
  padding-right: 20%;
  padding-left: 15%;
  text-decoration: none;
  display: inline-block;
`;

const Hello = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: #091430;
  padding-top: 3px;
`;

const Ok = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
`;

const PageNum = styled.div`
  font-size: 13px;
  line-height: 17px;
  display: inline-block;
  padding-left: 3%;
`;
const Contents = styled.div`
  display: flex;
  padding: 10% 5% 5% 0;
`;

const Icon = styled.div`
  color: #666666;
  display: inline-block;
  border-bottom: 1px solid #666666;
  padding-left: 5%;
`;
const ContentBox = styled.div`
  display: inline-block;
  padding-top: 10%;
`;

export default function Signup() {
  return (
    <Root>
      <Page>
        <HomeLayout>
          <div>
            <Logo />
            <div>
              <div>
                <Title>????????????</Title>
                <PageNum>1/2</PageNum>
              </div>
              <Hello>
                ????????? ???????????????. <br />
                ?????? ????????? ???????????????????
              </Hello>
            </div>
          </div>

          <div>
            <ContentBox>
              <Contents>
                <Icon>
                  <BsFillPersonFill size="24" />
                </Icon>
                <Input placeholder="???????????? ?????? ?????????" /> <br />
              </Contents>

              <Contents>
                <Icon>
                  <IoMdMail size="24" />
                </Icon>
                <Input placeholder="?????????" />
                <br />
              </Contents>

              <Contents>
                <Icon>
                  <RiKeyFill size="24" />
                </Icon>
                <Input placeholder="????????????" /> <br />
              </Contents>
              <br />
            </ContentBox>
            <Ok>
              <Checkbox
                color="primary"
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled />}
              />
              ?????????????????????
            </Ok>{" "}
            <br />
          </div>

          <Box>
            <Link to="signup2">
              <BlueButton>????????????</BlueButton>
            </Link>{" "}
            <br />
            <WhiteButton>?????? ???????????? ????????????</WhiteButton> <br />
            <WhiteButton>????????? ???????????? ????????????</WhiteButton> <br />
            <br />
            <br />
            <br />
            <br />
          </Box>
        </HomeLayout>
      </Page>
    </Root>
  );
}
