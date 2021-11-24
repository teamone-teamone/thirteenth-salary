import React, { memo, useState } from "react";
import { useHistory } from "react-router";
import BlueButton from "../Component/Button/BlueButton";
import WhiteButton from "../Component/Button/WhiteButton";
import Logo from "../Component/Logo";
import HomeLayout from "../Component/HomeLayout/HomeLayout";
import styled from "styled-components";
import { IoMdMail } from "react-icons/io";
import { RiKeyFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { isloggedInVar, logintoken } from "../apollo";
import axios from "axios";

const Login = memo(() => {
  const history = useHistory();
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const loginDjnago = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://taxwho.pythonanywhere.com/rest-auth/login/",
        {
          email: inputId,
          password: inputPw,
        }
      );
      logintoken(res.data.key);
      isloggedInVar(true);

      history.push("/greeting");
    } catch (e) {
      alert("로그인에 실패했습니다.");
    }
  };
  return (
    <Root>
      <Page>
        <HomeLayout>
          <div>
            <Logo />
            <div>
              <Title>로그인</Title>
              <Hello>
                사장님 환영합니다. <br />
                세금 내역을 살펴볼까요?
              </Hello>{" "}
              <br />
            </div>
          </div>

          <div>
            <Contents>
              <Icon>
                <IoMdMail size="24" />
              </Icon>
              <Input
                value={inputId}
                onChange={handleInputId}
                placeholder="이메일"
              />
              <br />
            </Contents>
            <Contents>
              <Icon>
                <RiKeyFill size="24" />
              </Icon>
              <Input
                type="password"
                value={inputPw}
                onChange={handleInputPw}
                placeholder="비밀번호"
              />{" "}
              <br />
            </Contents>
            <br />
            <Link to="/signup">
              <ErrorButton>아직 회원이 아니신가요? </ErrorButton>
            </Link>{" "}
            <br />
            <ErrorButton>비밀번호를 잊으셨나요?</ErrorButton> <br />
            <br />
          </div>
          <Box>
            <form onSubmit={loginDjnago}>
              <BlueButton type="submit" children="로그인" />
            </form>

            <WhiteButton>구글 계정으로 로그인</WhiteButton>
            <WhiteButton>카카오 계정으로 로그인</WhiteButton>
          </Box>
        </HomeLayout>
      </Page>
    </Root>
  );
});

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
  padding-bottom: 40%;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  color: black;
  padding-top: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  text-align: center;
`;
const Hello = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: #091430;
  padding-top: 0px;
`;

const ErrorButton = styled.button`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 25px;
  border: none;
  background-color: white;
  cursor: pointer;
`;
const Input = memo(styled.input.attrs({
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
`);

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

export default Login;
