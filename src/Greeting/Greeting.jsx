import React from 'react'
import styled from "styled-components";
import Header from "../Component/MenuLayout/Header";
import WhiteButton from "../Component/Button/WhiteButton";

const Root = styled.div` 
    background: #2A1D89;
    font-family: "NotoSans";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

const Page = styled.div`
    background:#2A1D89;
    width: 300px;
    @media screen(max-width:300px) {
        width: 100%;
    }
`

const Box = styled.div`
            width: 100%;
            display: inline-block;
            text-align:center;
`

const Body = styled.div` 
    background-color: #2A1D89;
    margin:0px;
    padding:0px;
`
const Middle = styled.div` 
    background-color: #2A1D89;
    color: white;
    padding-top: 80%;
    margin: 0;
    padding-bottom: 110%;
`
const Id = styled.div` 
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 49px;
    display: inline-block;
`

const Hi = styled.div` 
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 49px;
    display: inline-block;
`

const Description = styled.div` 
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    padding-top: 20px;
    display: inline-block;
    padding-bottom: 20%;


`

export default function Greeting() {

    return (
    <Root>
        <Page>
            <Header />
                    <Body>
                        <Middle>
                            <Id>
                                멋쟁이 사자처럼님,
                                <Hi>
                                    반갑습니다.
                                </Hi>
                            </Id>
                            <Description>
                                복잡한 세금관리를 간편하게, <br />
                                세금 폭탄 대신 절세 혜택을 누리는 사업, <br />
                                지금부터 '누구나 세금'과 함께 세금 관리를 <br/>시작합니다. 
                            </Description>
                            <Box>
                            <WhiteButton>마이페이지 둘러보기</WhiteButton> <br/>
                            </Box>
                        </Middle>
                    </Body>
        </Page>
    </Root>
    )
}