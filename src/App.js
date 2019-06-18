import React from "react";
import { ScrollView } from "react-native";

import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";

/**
 * This is App component that rendered all components. It consists of the Header which is title
 * and sign up form.
 */
const App = () => {
  return (
    <ScrollView>
      <Header />
      <RegistrationForm />
    </ScrollView>
  );
};

export default App;
