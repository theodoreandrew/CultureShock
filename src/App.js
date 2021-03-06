import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";

import Router from "./Router";
import reducers from "./reducers";

class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCDEo4gaZR3UTYnwBlJjHdCsVYpnhoNMPE",
      authDomain: "cultureshock-eb810.firebaseapp.com",
      databaseURL: "https://cultureshock-eb810.firebaseio.com",
      projectId: "cultureshock-eb810",
      storageBucket: "cultureshock-eb810.appspot.com",
      messagingSenderId: "919987700681",
      appId: "1:919987700681:web:86d42e0c7dd5cd13"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
