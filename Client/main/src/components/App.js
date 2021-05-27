import React from "react";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "./ForgetPassword";
import UpdateProfile from "./UpdateProfile";

import Join from "../components/Join/Join";
import Chat from "../containers/MainRoom/Chat";
import GameRoom from "../containers/PrivateRoom/GameRoom";


function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/upadate-profile" component={UpdateProfile} />
            <PrivateRoute path="/chat" component={Chat} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Join} />
            <Route path="/forget-password" component={ForgetPassword} />
            <Route path="/game" component={GameRoom} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
