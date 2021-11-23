import React from 'react'
import styled from "styled-components";
import WhiteButton from "../Component/Button/WhiteButton";
import Header from "../Component/MenuLayout/Header";

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
    width: 100%;
    margin:0;
    padding:0;
`


const BigBox = styled.div` 
    background-color: #2A1D89;
    color: white;
    padding-top: 80%;
    padding-bottom: 120%;
`
const Text = styled.div` 
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 49px;
    padding-bottom: 30%;
`

export default function Greeting() {

    return (
       <Root>
           <Page>
                <Header />
                    <Body>
                        <BigBox>
                            <Text>
                                오늘의 거래내역이<br/> 
                                복식부기장부에<br/>
                                옮겨졌습니다.
                            </Text>
                            <Box>
                                <WhiteButton>복식부장부 내역 보기</WhiteButton> <br/>
                            </Box>
                        </BigBox>
                    </Body> 
           </Page>
       </Root>
            
        
    )
}