import React from "react";
import { Actions, Router, Scene } from "react-native-router-flux";

import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import PostList from "./components/PostList";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            initial
            key="login"
            component={LoginForm}
            title="Log In"
            hideNavBar
          />
          <Scene
            key="signup"
            component={RegistrationForm}
            title="Make Your Profile"
          />
        </Scene>

        <Scene key="main">
          <Scene key="postList" component={PostList} title="Home Feed" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
