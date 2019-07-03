import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";

import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";

import reducers from "./reducers";

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header />
          <RegistrationForm />
        </View>
      </Provider>
    );
  }
}

export default App;
