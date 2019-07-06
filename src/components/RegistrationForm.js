import React from "react";
import { connect } from "react-redux";
import { Text } from "react-native";

import {
  Container,
  CardSection,
  Button,
  InputField,
  Spinner,
  TextError
} from "./common";
import ProfilePic from "./ProfilePic";

import {
  firstNameSignup,
  lastNameSignup,
  emailForSignUp,
  passwordForSignUp,
  signUserUp
} from "../actions";

class RegistrationForm extends React.Component {
  state = {
    isFirstNameValid: null,
    isLastNameValid: null,
    isEmailValid: null,
    isPasswordValid: null
  };

  /**
   * Call action creator when user types on InputField.
   */
  onFirstNameChanged = firstName => {
    this.props.firstNameSignup(firstName);
  };

  /**
   * Call action creator when user types on InputField.
   */
  onLastNameChanged = lastName => {
    this.props.lastNameSignup(lastName);
  };

  /**
   * Call action creator when user types on InputField.
   */
  onEmailChanged = email => {
    this.props.emailForSignUp(email);
  };

  onPasswordChanged = password => {
    this.props.passwordForSignUp(password);
  };

  /**
   * This is an event when user clicks on button. The form will sign user up
   * if all inputs are validated.
   */
  onButtonPress = () => {
    // Include firstName props for validation purposes.
    const { email, password } = this.props;

    if (this.validateInput()) {
      this.props.signUserUp(email, password);
    }
  };

  /**
   * This is a input validation function.
   */
  validateInput = () => {
    const { firstName, lastName, email, password } = this.props;

    const isFirstNameValid = firstName !== "";
    const isLastNameValid = lastName !== "";
    const isEmailValid = email !== "";
    const isPasswordValid = password !== "";

    this.setState({
      isFirstNameValid,
      isLastNameValid,
      isEmailValid,
      isPasswordValid
    });

    const isValid =
      isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid;

    return isValid;
  };

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress}>Register</Button>;
  };

  /**
   * This function renders an error message if first name is not valid.
   */
  renderErrorFirstName = () => {
    if (this.state.isFirstNameValid || this.state.isFirstNameValid === null) {
      return null;
    }
    return <TextError errorText="First name is required" />;
  };

  /**
   * This function renders an error message if last name is not valid.
   */
  renderErrorLastName = () => {
    if (this.state.isLastNameValid || this.state.isLastNameValid === null) {
      return null;
    }
    return <TextError errorText="Last name is required" />;
  };

  /**
   * This function renders an error message if email is not valid.
   */
  renderErrorEmail = () => {
    if (this.state.isEmailValid || this.state.isEmailValid === null) {
      return null;
    }
    return <TextError errorText="Email is required" />;
  };

  /**
   * This function renders an error message if password is not valid.
   */
  renderErrorPassword = () => {
    if (this.state.isPasswordValid || this.state.isPasswordValid === null) {
      return null;
    }
    return <TextError errorText="Password is required" />;
  };

  render() {
    return (
      <Container>
        <CardSection>
          <ProfilePic />
        </CardSection>

        <CardSection>
          {this.renderErrorFirstName()}
          <InputField
            placeholder="first name"
            onChangeText={this.onFirstNameChanged}
            value={this.props.firstName}
          />
        </CardSection>

        <CardSection>
          {this.renderErrorLastName()}
          <InputField
            placeholder="last name"
            onChangeText={this.onLastNameChanged}
            value={this.props.lastName}
          />
        </CardSection>

        <CardSection>
          {this.renderErrorEmail()}
          <InputField
            autoCapitalize="none"
            placeholder="email"
            onChangeText={this.onEmailChanged}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          {this.renderErrorPassword()}
          <InputField
            secureTextEntry
            placeholder="password"
            onChangeText={this.onPasswordChanged}
            value={this.props.password}
            autoCapitalize="none"
            editable={false}
            selectTextOnFocus={false}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.textErrorStyle}>{this.props.error}</Text>
          {this.renderButton()}
        </CardSection>
      </Container>
    );
  }
}

const styles = {
  textErrorStyle: {
    color: "red",
    fontSize: 20,
    alignSelf: "center"
  }
};

/**
 * Reducers return an object with state in it. In this mapStateToProps,
 * this function will need email and password for now.
 *
 * @param {*} state state that is updated by reducer.
 */
const mapStateToProps = state => {
  const { firstName, lastName, email, password, error, loading } = state.auth;

  return {
    firstName,
    lastName,
    email,
    password,
    error,
    loading
  };
};

const actions = {
  firstNameSignup,
  lastNameSignup,
  emailForSignUp,
  passwordForSignUp,
  signUserUp
};

export default connect(
  mapStateToProps,
  actions
)(RegistrationForm);
