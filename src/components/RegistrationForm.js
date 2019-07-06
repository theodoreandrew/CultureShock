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
  signUserUp,
  checkFirstName,
  checkLastName,
  checkEmail,
  checkPassword
} from "../actions";

class RegistrationForm extends React.Component {
  onFirstNameChanged = firstName => {
    this.props.firstNameSignup(firstName);
    this.props.checkFirstName(firstName);
  };

  onLastNameChanged = lastName => {
    this.props.lastNameSignup(lastName);
    this.props.checkLastName(lastName);
  };

  /**
   * Call action creator when user types on InputField.
   */
  onEmailChanged = email => {
    this.props.emailForSignUp(email);
    this.props.checkEmail(email);
  };

  onPasswordChanged = password => {
    this.props.passwordForSignUp(password);
    this.props.checkPassword(password);
  };

  onButtonPress = () => {
    // Include firstName props for validation purposes.
    const {
      firstName,
      lastName,
      email,
      password,
      isFirstNameValid,
      isLastNameValid,
      isEmailValid,
      isPasswordValid
    } = this.props;

    this.props.checkFirstName(firstName);
    this.props.checkLastName(lastName);
    this.props.checkEmail(email);
    this.props.checkPassword(password);

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid
    ) {
      this.props.signUserUp(email, password);
    }
  };

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress}>Register</Button>;
  };

  renderErrorFirstName = () => {
    if (this.props.isFirstNameValid || this.props.isFirstNameValid === null) {
      return null;
    }
    return <TextError errorText={this.props.firstNameError} />;
  };

  renderErrorLastName = () => {
    if (this.props.isLastNameValid || this.props.isLastNameValid === null) {
      return null;
    }
    return <TextError errorText={this.props.lastNameError} />;
  };

  renderErrorEmail = () => {
    if (this.props.isEmailValid || this.props.isEmailValid === null) {
      return null;
    }
    return <TextError errorText={this.props.emailError} />;
  };

  renderErrorPassword = () => {
    if (this.props.isPasswordValid || this.props.isPasswordValid === null) {
      return null;
    }
    return <TextError errorText={this.props.passwordError} />;
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
  const { isFirstNameValid, firstNameError } = state.firstNameValidation;
  const { isLastNameValid, lastNameError } = state.lastNameValidation;
  const { isEmailValid, emailError } = state.emailValidation;
  const { isPasswordValid, passwordError } = state.passwordValidation;

  return {
    firstName,
    lastName,
    email,
    password,
    error,
    loading,
    isFirstNameValid,
    firstNameError,
    isLastNameValid,
    lastNameError,
    isEmailValid,
    emailError,
    isPasswordValid,
    passwordError
  };
};

const actions = {
  firstNameSignup,
  lastNameSignup,
  emailForSignUp,
  passwordForSignUp,
  signUserUp,
  checkFirstName,
  checkLastName,
  checkEmail,
  checkPassword
};

export default connect(
  mapStateToProps,
  actions
)(RegistrationForm);
