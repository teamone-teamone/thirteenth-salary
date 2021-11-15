import styled, { css } from 'styled-components';

const Bar = styled.div` 
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #2A1D89;
`
const Contents = styled.div` 
  display: flex;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  /* justify-content: space-between; */
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: white;
  padding-left: 20px;
  padding-top: 5px;
`
const Image = styled.img` 
    padding-left: 5px; //30px
    padding-top: 0px;
`

const Header = () => {
  return (
    <Bar>
      <Contents>
      <Image src="./img/arrow-back-white.png"></Image>
          홈으로
      </Contents>
      </Bar>
  )
}

export default Header