import { useReactiveVar } from "@apollo/client";
import { ThemeProvider } from "styled-components";

import { darkModeVar, isloggedInVar } from "./apollo";
import Home from "./Home";
import Login from "./Login";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
const { Switch, BrowserRouter, Route } = require("react-router-dom");

function App() {
  const isLoggedIn = useReactiveVar(isloggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <div>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {isLoggedIn ? <Home></Home> : <Login></Login>}
            </Route>
            <Route path="/profile">profile</Route>
            <Route>404</Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
