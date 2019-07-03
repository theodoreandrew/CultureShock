import React from "react";
import firebase from "firebase";
import { Text } from "react-native";

import {
  Container,
  CardSection,
  InputField,
  Button,
  Spinner,
  TextError
} from "./common";
import {
  REQUIRED_FIRST_NAME,
  REQUIRED_LAST_NAME,
  REQUIRED_EMAIL,
  REQUIRED_EMAIL_FORM,
  REQUIRED_PASSWORD,
  REQUIRED_MINIMUM_PASSWORD_LENGTH,
  REQUIRED_RETYPE_PASSWORD
} from "../util/ErrorMessage";
import { emailValidation } from "../util/Validation";
import ProfilePic from "./ProfilePic";

/**
 * Registration form is a class based component that contains state of first name, last name
 * , email, and password. Long term goal is to be able to sign user up. For now, this code
 * only print each state to console.
 */
class RegistrationForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordRetype: "", // This is one is not sure, but I put it just in case
    loading: false,
    errorMessage: "",
    isFirstNameValid: null,
    isLastNameValid: null,
    isEmailValid: null,
    isPasswordValid: null,
    isRetypePasswordValid: null,
    invalidEmailMessage: "",
    invalidPasswordMessage: "",
    invalidRetypePasswordMessage: ""
  };

  /**
   * This callback function will be invoked when user press register and it will print the state
   * to console.
   */
  whenSomeonePressRegister = () => {
    const { email, password } = this.state;

    if (!this.state.allowSignUp) {
      this.setState({ loading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(this.isUserAbleToSignUp)
        .catch(this.onSignUpFail)
        .then(this.onSignUpSuccess);
    }
  };

  /**
   * This is a callback function that will be run when sign up process succeeds.
   */
  onSignUpSuccess = () => {
    this.setState({
      email: "",
      password: "",
      error: "",
      loading: false
    });
  };

  /**
   * This is a callback function that will be run when sign up process fails.
   */
  onSignUpFail = () => {
    this.setState({
      loading: false,
      error: "Couldn't sign up. Account with that email already exists"
    });
  };

  /**
   * Condition to check if all input are all valid.
   * @returns true if all input are valid. False otherwise.
   */
  conditionalDisabledButton = () => {
    return (
      this.state.isFirstNameValid ||
      this.state.isFirstNameValid === null ||
      (this.state.isLastNameValid || this.state.isLastNameValid === null) ||
      (this.state.isEmailValid || this.state.isEmailValid === null) ||
      (this.state.isPasswordValid || this.state.isPasswordValid === null) ||
      (this.state.isRetypePasswordValid || this.isRetypePasswordValid === null)
    );
  };

  /**
   * Helper function to decide which component to be rendered on the screen.
   * 1. If all input are valid, show the button which is not disabled.
   * 2. If the firebase is still signing user up, show little spinner so that user knows that
   *    sign up process is still going.
   * 3. If one of input is invalid, show the button which is disabled.
   */
  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    if (this.conditionalDisabledButton()) {
      return (
        <Button isDisabled={true} onPress={this.whenSomeonePressRegister}>
          Register
        </Button>
      );
    }
    return (
      <Button isDisabled={false} onPress={this.whenSomeonePressRegister}>
        Register
      </Button>
    );
  };

  /**
   * Helper function to validate first name.
   */
  validateFirstName = firstName => {
    if (firstName.length === 0) {
      this.setState({
        isFirstNameValid: true
        // invalidFirstNameMessage : REQUIRED_FIRST_NAME
      });
    } else {
      this.setState({
        isFirstNameValid: false
      });
    }
  };

  /**
   * Helper function to validate last name.
   */
  validateLastName = lastName => {
    if (lastName.length === 0) {
      this.setState({
        isLastNameValid: true
        // invalidLastNameMessage : REQUIRED_FIRST_NAME
      });
    } else {
      this.setState({
        isLastNameValid: false
      });
    }
  };

  /**
   * Helper function to validate email.
   */
  validateEmail = email => {
    if (email.length === 0) {
      this.setState({
        isEmailValid: true,
        invalidEmailMessage: REQUIRED_EMAIL
      });
    } else if (!emailValidation(email)) {
      this.setState({
        isEmailValid: true,
        invalidEmailMessage: REQUIRED_EMAIL_FORM
      });
    } else {
      this.setState({
        isEmailValid: false
      });
    }
  };

  /**
   * Helper function to validate password.
   */
  validatePassword = password => {
    if (password.length === 0) {
      this.setState({
        isPasswordValid: true,
        invalidPasswordMessage: REQUIRED_PASSWORD
      });
    } else if (password.length < 8) {
      this.setState({
        isPasswordValid: true,
        invalidPasswordMessage: REQUIRED_MINIMUM_PASSWORD_LENGTH
      });
    } else {
      this.setState({
        isPasswordValid: false
      });
    }
  };

  validateRetypePassword = retypePassword => {
    if (retypePassword !== this.state.password) {
      this.setState({
        isRetypePasswordValid: true,
        invalidRetypePasswordMessage: REQUIRED_RETYPE_PASSWORD
      });
    } else {
      this.setState({
        isRetypePasswordValid: false
      });
    }
  };

  /**
   * If first name is invalid, this helper function will render error message to screen.
   */
  errorMessageFirstName = () => {
    if (this.state.isFirstNameValid) {
      return <TextError errorText={REQUIRED_FIRST_NAME} />;
    }
    return null;
  };

  /**
   * If last name is invalid, this helper function will render error message to screen.
   */
  errorMessageLastName = () => {
    if (this.state.isLastNameValid) {
      return <TextError errorText={REQUIRED_LAST_NAME} />;
    }
    return null;
  };

  /**
   * If email is invalid, this helper function will render error message to screen.
   */
  errorMessageEmail = () => {
    if (this.state.isEmailValid) {
      return <TextError errorText={this.state.invalidEmailMessage} />;
    }
    return null;
  };

  /**
   * If password is invalid, this helper function will render error message to screen.
   */
  errorMessagePassword = () => {
    if (this.state.isPasswordValid) {
      return <TextError errorText={this.state.invalidPasswordMessage} />;
    }
    return null;
  };

  errorMessageRetypePassword = () => {
    if (this.state.isRetypePasswordValid) {
      return <TextError errorText={this.state.invalidRetypePasswordMessage} />;
    }
    return null;
  };

  onSignUpFail = () => {
    this.setState({
      loading: false,
      error: "Couldn't sign up. Account with that email already exists"
    });
  };

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    if (this.conditionalDisabledButton()) {
      return (
        <Button isDisabled onPress={this.whenSomeonePressRegister}>
          Register
        </Button>
      );
    }
    return <Button onPress={this.whenSomeonePressRegister}>Register</Button>;
  };

  validateTextInput = () => {};

  /**
   * Notice the InputField component has props of onChangeText. This is basically when user type
   * something inside the input field, the state will be set to the text that user typed.
   *
   * Button, CardSection, InputField, and Container are re-usable components
   * that we can use over and over, so that we don't need to redefine our styles
   * if we have similar styles for component.
   */
  render() {
    const { errorMessageStyle } = styles;
    const {
      isFirstNameValid,
      isLastNameValid,
      isEmailValid,
      isPasswordValid,
      isRetypePasswordValid
    } = this.state;
    console.log(this.state.password);
    return (
      <Container>
        <CardSection>
          <ProfilePic />
        </CardSection>

        <CardSection>
          {this.errorMessageFirstName()}
          <InputField
            placeholder="First Name *"
            value={this.state.firstName}
            onChangeText={firstName => {
              this.validateFirstName(firstName);
              this.setState({ firstName });
            }}
            isValid={isFirstNameValid}
          />
        </CardSection>

        <CardSection>
          {this.errorMessageLastName()}
          <InputField
            placeholder={"Last Name *"}
            value={this.state.lastName}
            onChangeText={lastName => {
              this.validateLastName(lastName);
              this.setState({ lastName });
            }}
            isValid={isLastNameValid}
          />
        </CardSection>

        <CardSection>
          {this.errorMessageEmail()}
          <InputField
            placeholder={"Email *"}
            value={this.state.email}
            onChangeText={email => {
              this.validateEmail(email);
              this.setState({ email });
            }}
            isValid={isEmailValid}
            autoCapitalize="none"
          />
        </CardSection>

        <CardSection>
          {this.errorMessagePassword()}
          <InputField
            placeholder={"Password *"}
            value={this.state.password}
            onChangeText={password => {
              this.validatePassword(password);
              this.setState({ password });
            }}
            secureTextEntry
            isValid={isPasswordValid}
            autoCapitalize="none"
            editable={false}
            selectTextOnFocus={false}
          />
        </CardSection>

        <CardSection>
          {this.errorMessageRetypePassword()}
          <InputField
            placeholder={"Re-Type Password *"}
            value={this.state.passwordRetype}
            onChangeText={passwordRetype => {
              this.validateRetypePassword(passwordRetype);
              this.setState({ passwordRetype });
            }}
            secureTextEntry
            isValid={isRetypePasswordValid}
            autoCapitalize="none"
            editable={false}
            selectTextOnFocus={false}
          />
        </CardSection>

        <CardSection>
          <Text style={errorMessageStyle}>{this.state.error}</Text>
        </CardSection>

        <CardSection>{this.renderButton()}</CardSection>
        <Text style={{ color: "#535D7E" }}>(*) = required input</Text>
      </Container>
    );
  }
}

/**
 * Styling for error message if user cannot sign up.
 */
const styles = {
  errorMessageStyle: {
    color: "red",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center"
  }
};

export default RegistrationForm;
