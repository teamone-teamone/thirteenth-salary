// import { ThemeProvider } from "styled-components";
import Home from "./Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Signup2 from "./Signup/Signup2";
import Greeting from "./Greeting/Greeting";
import Greeting2 from "./Greeting2/Greeting2";
import styled from "styled-components";
import { Switch, Link, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signup2" component={Signup2} />
        <Route exact path="/greeting" component={Greeting} />
        <Route exact path="/greeting2" component={Greeting2} />
      </Switch>
    </div>
    </BrowserRouter>

  )
}

export default App;
