import { useReactiveVar } from "@apollo/client";
import GlobalFonts from './fonts/fonts';
import { isloggedInVar } from "./apollo";
import Home from "./Home";
import Login from "./Login";
import First from "./First";
import { GlobalStyles } from "./styles";
const { Switch, BrowserRouter, Route } = require("react-router-dom");

function App() {
  const isLoggedIn = useReactiveVar(isloggedInVar);

  return (
    <div>
      <GlobalStyles />
      <GlobalFonts />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home></Home> : <First></First>}
          </Route>
          <Route path="/profile">profile</Route>
          <Route>404</Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
