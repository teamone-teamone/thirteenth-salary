import React from 'react'
import Button from "../Component/Button";
import styled, { css } from 'styled-components';

const Title = styled.h1`
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 52px;
    color: black;
    padding-top: 20px;
    padding-left: 20%;  
    `
const Input = styled.input` 
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    color: #666666;
    border: none;
    border-bottom: 1px solid #666666;
    margin: 30px;
    padding-left: 10%;

    ::placeholder{
        color: #666666;
    } 
`

const Hello = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    color: #091430;
    padding-left: 20%;
    padding-top: 10px;
`

const Ok = styled.div` 
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    padding-left: 25%;
    `

const Image = styled.img` 
    padding-left: 20%;
    padding-top: 30px;
`

export default function Signup() {
    return(
        <div>
                <Title>회원가입</Title>
                <Hello>사장님 환영합니다. <br />세금 관리를 시작해볼까요?</Hello>

            <div>
                <Image src="./img/person.png"></Image>
                <Input placeholer="사업자명 혹은 상호명" /> <br />
                <Image src="./img/email.png"></Image>
                <Input placeholer="이메일" /> <br/>
                <Image src="./img/pw.png"></Image>
                <Input placeholer="비밀번호" />
                <Ok>정보이용동의서</Ok> <br />
            </div>

            <div>
                <Button>회원가입</Button> <br />
                <Button>구글 계정으로 회원가입</Button> <br/>
                <Button>카카오 계정으로 회원가입</Button> <br />
            </div>
        </div>

    ) 
}