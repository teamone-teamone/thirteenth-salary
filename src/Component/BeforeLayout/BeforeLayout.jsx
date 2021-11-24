import Footer from "./Footer"
import Header from "./Header"
import styled, { css } from 'styled-components';

const Body = styled.div` 
    padding-top: 80px;
    margin: 0;
    padding: 0;
`
const Main = styled.div` 
    min-height: calc(100vh - 180px);
    margin:0;
`


const BeforeLayout = (props: {
  children: React.ReactNode
}) => {
  return (
    <Body>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
      </Body>
  )
}

export default BeforeLayout;