import React, { useState, useEffect } from 'react'
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
const Hello = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    color: #091430;
    padding-left: 20%; //34px
    padding-top: 10px;
`

const Error = styled.button` 
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    padding-left: 20%; //35px
    border: none;
    background-color: white;
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
    padding-left: 10%; //44px
`

const Image = styled.img` 
    padding-left: 20%; //30px
    padding-top: 30px;
`

export default function Login() {
    return(
        <div>
            <Title>로그인</Title>
            <Hello>사장님 환영합니다. <br />세금 내역을 살펴볼까요?</Hello>
            <div>
                <Image src="./img/email.png"></Image>
                <Input placeholer="이메일" /> <br/>
                <Image src="./img/pw.png"></Image>
                <Input placeholer="비밀번호" /> <br/>
                <Error>아직 회원이 아니신가요? </Error> <br />
                <Error>비밀번호를 잊으셨나요?</Error> <br /><br/>
            </div>
            <div>
                <Button>로그인</Button><br />
                <Button>구글 계정으로 로그인</Button> <br />
                <Button>카카오 계정으로 로그인</Button> <br/>
            </div>
        </div>
    ) 
}
