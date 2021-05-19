
import React from "react";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "../containers/Dashboard";
import Login from "./Login";
import PrivateRoute from './PrivateRoute';
import ForgetPassword from "./ForgetPassword";
import UpdateProfile from "./UpdateProfile";
import Dice from "./modals/Dice";
import game from "./game"


function App() {
  return (
      <div >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={DashBoard} />
              <PrivateRoute path="/upadate-profile" component={UpdateProfile}/>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forget-password" component= {ForgetPassword}/>
              <Route path="/dice" component = {game}/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
