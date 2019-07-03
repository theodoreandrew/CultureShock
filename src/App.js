import React from "react";
import { ScrollView } from "react-native";
import { CardSection, Button, Spinner } from "./components/common";
import firebase from "firebase";

import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";

/**
 * This is App component that rendered all components. It consists of the Header which is title
 * and sign up form.
 */
class App extends React.Component {
  state = { isLoggedIn: null };

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

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  afterSignedUpContent() {
    switch (this.state.isLoggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Sign Out</Button>
          </CardSection>
        );

      case false:
        return <RegistrationForm />;

      case null:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <ScrollView>
        <Header />
        {this.afterSignedUpContent()}
      </ScrollView>
    );
  }
}

export default App;
