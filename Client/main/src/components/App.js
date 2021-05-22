
import React from "react";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from './PrivateRoute';
import ForgetPassword from "./ForgetPassword";
import UpdateProfile from "./UpdateProfile";
import Dice from "./modals/Dice";
import Game from "./game"

import Join from '../components/Join/Join';
import Chat from '../components/Chat/Chat';
import ChatRoom from "./Chat/GameRoom";



function App() {

  return (
      <div >
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Join} />
              <PrivateRoute path="/upadate-profile" component={UpdateProfile}/>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/chat" component={Chat} />
              <Route path="/forget-password" component= {ForgetPassword}/>
              {/* <Route path= "/game" component={Game}/> */}
              <Route path="/game" component={ChatRoom}/>
              <Route path="/dice" component = {Game}/>

            </Switch>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
