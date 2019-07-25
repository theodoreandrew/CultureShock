import React from "react";
import { Router, Scene } from "react-native-router-flux";

import LoginForm from "./components/auth/LoginForm";
import RegistrationForm from "./components/auth/RegistrationForm";
import PostList from "./components/PostList";
import WelcomePage from "./components/user_init/WelcomePage";
import UserDescription from "./components/user_init/UserDescription";

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

        <Scene key="userInit">
          <Scene
            key="welcomePage"
            component={WelcomePage}
            title="Greetings!!!"
            left={() => null}
            right={() => null}
          />
          <Scene
            key="userDescription"
            component={UserDescription}
            title="Describe Yourself"
            left={() => null}
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
