// import { ThemeProvider } from "styled-components";
import Home from "./Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Greeting from "./Greeting/Greeting";
import Layout from "./Component/Layout/Layout"
import Logo from "./Component/Logo"
import styled from "styled-components";
import { Switch, BrowserRouter, Route } from "react-router-dom";
// const { Switch, BrowserRouter, Route } = require("react-router-dom");

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Logo />
              <Signup />
            </Layout> 
            
            <Layout>
              <Logo />
              <Login />
            </Layout> <br />
            <Greeting />
          </Route>
          <Route>404</Route>
        </Switch>
      </BrowserRouter>
    </div>

  )
}

export default App;
