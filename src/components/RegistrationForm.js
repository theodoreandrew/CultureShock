import React from "react";
// import PhoneInput from "react-native-phone-input";

import { Container, CardSection, InputField, Button } from "./common";
import ProfilePic from "./ProfilePic";

/**
 * Registration form is a class based component that contains state of first name, last name
 * , email, and password. Long term goal is to be able to sign user up. For now, this code
 * only print each state to console.
 */
class RegistrationForm extends React.Component {
  state = {
    /** firstName state will contain user first name */
    firstName: "",

    /** lastName state will contain user last name */
    lastName: "",

    /** email state will contain user email */
    email: "",

    /** password state will contain user password */
    password: "",
    passwordRetype: "" // This is one is not sure, but I put it just in case
  };

  /**
   * This callback function will be invoked when user press register and it will print the state
   * to console.
   */
  whenSomeonePressRegister = () => {
    console.log(
      "Hi my name is " +
        this.state.firstName +
        " " +
        this.state.lastName +
        ". " +
        "My email is " +
        this.state.email
    );
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordRetype: ""
    });
    // this.textInput.clear();
  };

  /**
   * Notice the InputField component has props of onChangeText. This is basically when user type
   * something inside the input field, the state will be set to the text that user typed.
   *
   * Button, CardSection, InputField, and Container are re-usable components
   * that we can use over and over, so that we don't need to redefine our styles
   * if we have similar styles for component.
   */
  render() {
    return (
      <Container>
        <CardSection>
          <ProfilePic />
        </CardSection>

        <CardSection>
          <InputField
            placeholder="First Name"
            value={this.state.firstName}
            onChangeText={firstName => this.setState({ firstName })}
          />
        </CardSection>

        <CardSection>
          <InputField
            placeholder={"Last Name"}
            value={this.state.lastName}
            onChangeText={lastName => this.setState({ lastName })}
          />
        </CardSection>

        <CardSection>
          <InputField
            placeholder={"Email"}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            autoCapitalize="none"
          />
        </CardSection>

        <CardSection>
          <InputField
            placeholder={"Password"}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
            autoCapitalize="none"
          />
        </CardSection>

        <CardSection>
          <InputField
            placeholder={"Re-Type Password"}
            value={this.state.passwordRetype}
            onChangeText={passwordRetype => this.setState({ passwordRetype })}
            secureTextEntry
            autoCapitalize="none"
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.whenSomeonePressRegister}>Register</Button>
        </CardSection>
      </Container>
    );
  }
}

export default RegistrationForm;
