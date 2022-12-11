import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import VeteranProfile from "./pages/veteranProfile/VeteranProfile";
import VeteranRegister from "./pages/veteranRegister/VeteranRegister";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <VeteranRegister />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/veteranRegister">
          {user ? <Redirect to="/" /> : <VeteranRegister />}
        </Route>
        <Route path="/veteranProfile/:username">
          <VeteranProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
