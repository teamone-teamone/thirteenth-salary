import styled, { css } from 'styled-components';
import { BsQuestionCircleFill } from 'react-icons/bs';


const Under = styled.div` 
    margin-top: auto;
    background-color: #2A1D89;
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
  padding-right: 5%;
  margin:0;
  border:0;
  background-color:#2A1D89;
  cursor: pointer;
  color: white;
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