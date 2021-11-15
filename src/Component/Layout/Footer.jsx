import styled, { css } from 'styled-components';

const Image = styled.img` 
    padding-left: 30%; //30px
    padding-top: 30px;
`

const Under = styled.div` 
    margin-top: auto;
    background-color: #2A1D89;
    left: 0;
    top: 0;
    width: 100%;
    height: 100px;
`

const Contents = styled.div` 
    width: 100%;
    max-width: 1100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    margin: 0 auto;
`

const Footer = () => {
  return (
    // 
    <Under>
      <Contents>
        <Image src="./img/white-circle.png"></Image>
      </Contents>
      </Under>
  )
}

export default Footer