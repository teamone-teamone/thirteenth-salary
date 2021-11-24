import styled, { css } from 'styled-components';
import { BsQuestionCircleFill } from 'react-icons/bs';

const Under = styled.div` 
    margin-top: auto;
    background-color:#2A1D89;
    left: 0;
    top: 0;
    width: 100%;
    height: 80px;
    position: fixed;
    bottom:0;
`

const Contents = styled.div` 
    width: 100%;
    max-width: 1100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
`

const Icon = styled.button` 
  color: white;
  justify-content: space-around;
  border:0;
  margin:0;
  background-color:#2A1D89;
  cursor: pointer;
`

const Footer = () => {
  return (
    // 
    <Under>
      <Contents>
        <Icon>
          <BsQuestionCircleFill size="35" />
        </Icon>
      </Contents>
    </Under>
  )
}

export default Footer;