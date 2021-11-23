import Footer from "./Footer"
import Header from "./Header"
import styled, { css } from 'styled-components';


const Main = styled.div` 
    min-height: calc(100vh - 180px);
`

const MenuLayout = (props: {
  children: React.ReactNode
}) => {
  return (

      <div>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
      </div>

  )
}

export default MenuLayout;