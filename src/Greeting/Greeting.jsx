import React from 'react'
import styled from "styled-components";
import Button from "../Component/Button";

const Title = styled.h1` 
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    padding-left: 10%;
    padding-top: 40px;
    float: left;
`

const Image = styled.img` 
    float: right;
    padding-right: 35px;
    padding-top: 40px;
`

const Header = styled.div` 
    background-color: #2A1D89;
    color: white;
`

const Body = styled.div` 
    background-color: #2A1D89;
    width: 100%;
`
const Container = styled.div` 
    background-color: #2A1D89;
    color: white;
    padding-top: 256px;
`
const Id = styled.div` 
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 49px;
    display: flex;
    align-items: center;
    padding-left: 10%;
`

const Description = styled.div` 
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding-top: 30px;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 40%;
`

export default function Greeting() {

    return (
        //전체 div
        <Body>
            <Header>
                <Title>누구나 세금</Title>
                <Image src="./img/menu.png"></Image>
            </Header>
            <Container>
                <Id>
                    멋쟁이 사자처럼님,<br /> 
                    반갑습니다.
                </Id>
                <Description>
                    복잡한 세금관리를 간편하게, <br />
                    세금 폭탄 대신 절세 혜택을 누리는 사업, <br />
                    지금부터 '누구나 세금'과 함께 세금 관리를 시작합니다. 
                </Description>
                <Button>마이페이지 둘러보기</Button> <br/>
            </Container>
        </Body> 
    )
}