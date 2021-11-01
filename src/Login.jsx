import React from 'react'
import styled, { css } from 'styled-components';
import { darkModeVar, isloggedInVar } from './apollo';

const Title = styled.h1`
    color: ${(props)=>props.theme.fontColor};

`
const Container = styled.div`
    display : flex;
    background-color : ${(props)=>props.theme.bgColor}
`
export default function Login() {
    const redcolor = "red";
    const darkBooledn = true;
    return (
        <div>
            <Container darkBooledn={darkBooledn}>
            <Title redcolor={redcolor} >
                <button onClick={()=>isloggedInVar(true)}>Login</button>
                
                </Title>
            </Container>
            <button onClick={()=>darkModeVar(true)}>darkMode-true</button>
            <button onClick={()=>darkModeVar(false)}>darkMode-false</button>
        </div>
    )
}
