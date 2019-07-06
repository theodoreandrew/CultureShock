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

  onFirstNameChanged = firstName => {
    this.props.firstNameSignup(firstName);
  };

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

  onButtonPress = () => {
    // Include firstName props for validation purposes.
    const { firstName, lastName, email, password } = this.props;

    // const firstNameValid = this.checkFirstName(firstName);
    // const lastNameValid = this.checkLastName(lastName);
    // const emailValid = this.checkEmail(email);
    // const passwordValid = this.checkPassword(password);
    const inputValid = this.inputValidation(
      firstName,
      lastName,
      email,
      password
    );

    if (inputValid) {
      this.props.signUserUp(email, password);
    }
  };

  inputValidation = (firstName, lastName, email, password) => {
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

    const validity =
      isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid;

    return validity;
  };

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress}>Register</Button>;
  };

  renderErrorFirstName = () => {
    if (this.state.isFirstNameValid || this.state.isFirstNameValid === null) {
      return null;
    }
    return <TextError errorText="First name is required" />;
  };

  renderErrorLastName = () => {
    if (this.state.isLastNameValid || this.state.isLastNameValid === null) {
      return null;
    }
    return <TextError errorText="Last name is required" />;
  };

  renderErrorEmail = () => {
    if (this.state.isEmailValid || this.state.isEmailValid === null) {
      return null;
    }
    return <TextError errorText="Email is required" />;
  };

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
