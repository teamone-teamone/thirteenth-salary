import styled, { css } from 'styled-components';

const Title = styled.h1`
    color: #2A1D89;
    font-size: 24px;
    /* line-height: 24px; */
    font-weight: 900;
    float: center;
    padding-top: 26px;
    padding-left: 20%;
    `

const Image = styled.img` 
    padding-left: 20%; //30px
    padding-right: 10px;
    padding-top: 30px;
    float: left;
`

export default function Logo() {
    return (
        <div>
            <Image src="./img/logo-bed.png"></Image>
            <Title>누구나 세금</Title>
        </div>
    )
}
