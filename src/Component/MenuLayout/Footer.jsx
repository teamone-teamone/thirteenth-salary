import styled, { css } from 'styled-components';
import { FaQuestion } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import { BiFolder } from 'react-icons/bi';
import { AiFillDollarCircle } from 'react-icons/ai';

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
            padding-bottom: 20%;
`

const Under = styled.div` 
    margin-top: auto;
    background-color: white;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
`

const Contents = styled.div` 
    width: 100%;
    height: 100%;
    /* display: flex; */
    justify-content: space-between;
`
const Icon = styled.div` 
  color: #2A1D89;
  display: flex;
  justify-content: space-between;
`

const Footer = () => {
  return (
    <Root>
      <Page>
        <Under>
          <Contents>
            <Box>
              <Icon>
                  <AiFillDollarCircle size="30" />
                  <BiFolder size="24" />
                  <MdHome size="24" />
                  <IoMdSettings size="24" />
                  <FaQuestion size="24" />
              </Icon>
            </Box>      
            
          </Contents>
        </Under>
      </Page>
    </Root>
    
  )
}

export default Footer;