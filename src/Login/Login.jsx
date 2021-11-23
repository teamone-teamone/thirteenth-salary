import React, { useState, useEffect } from 'react'
import BlueButton from "../Component/Button/BlueButton";
import WhiteButton from "../Component/Button/WhiteButton";
import Logo from "../Component/Logo";
import HomeLayout from "../Component/HomeLayout/HomeLayout";
import styled, { css } from 'styled-components';
import { IoMdMail } from 'react-icons/io';
import { RiKeyFill } from 'react-icons/ri';


const Root = styled.div` 
    background: #ffffff;
    font-family: "NotoSans";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

const Page = styled.div`
    background:#ffffff;
    width: 300px;
    @media screen(max-width:300px) {
        width: 100%;
    }
`

const Box = styled.div`
            width: 100%;
            display: inline-block;
            text-align:center;
            padding-bottom: 40%;

`

const Title = styled.h1`
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height:5px;
    color: black;
    padding-top: 25px;
    display: flex;
    align-items:center;
    text-align: center; 
    
    `
const Hello = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    color: #091430;
    padding-top: 0px;
`

const ErrorButton = styled.button` 
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 25px;
    border: none;
    background-color: white;
    cursor: pointer;
`
const Input = styled.input.attrs({
    required: true
})`  
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    color: #666666;
    border: 0;
    outline:0;
    border-bottom: 1px solid #666666;
    padding-right: 20%;
    padding-left: 15%; 
    text-decoration: none;
    display: inline-block;

`

const Contents = styled.div`
    display: flex;
    padding: 10% 5% 5% 0;
`

const Icon = styled.div` 
    color: #666666;
    display: inline-block;
    border-bottom: 1px solid #666666;
    padding-left: 5%;
    

`

export default function Login() {
    return(
        <Root>
            <Page>
            <HomeLayout>
                <div>
                    <Logo />
                    <div>
                        <Title>로그인</Title>
                        <Hello>사장님 환영합니다. <br />세금 내역을 살펴볼까요?</Hello> <br/>
                    </div>
                    
                </div>
                
            <div>
                <Contents>
                    <Icon>
                        <IoMdMail size="24"/>
                    </Icon>
                    <Input placeholder="이메일" /><br/>
                </Contents>

                <Contents>
                    <Icon>
                        <RiKeyFill size="24"/>
                    </Icon>
                    <Input placeholder="비밀번호" /> <br/>
                </Contents><br/>

                <ErrorButton>아직 회원이 아니신가요? </ErrorButton> <br />
                <ErrorButton>비밀번호를 잊으셨나요?</ErrorButton> <br /><br/>
            </div>
            <Box>
                <BlueButton>로그인</BlueButton>
                <WhiteButton>구글 계정으로 로그인</WhiteButton>
                <WhiteButton>카카오 계정으로 로그인</WhiteButton>
            </Box>
            </HomeLayout>
            </Page>
        </Root>
    ) 
}
