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
  checkLastName
} from "../actions";

class RegistrationForm extends React.Component {
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

    this.props.checkFirstName(firstName);
    this.props.checkLastName(lastName);
  };

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress}>Register</Button>;
  };

  render() {
    return (
      <Container>
        <CardSection>
          <ProfilePic />
        </CardSection>

        <CardSection>
          <TextError errorText={this.props.firstNameError} />
          <InputField
            placeholder="first name"
            onChangeText={this.onFirstNameChanged}
            value={this.props.firstName}
          />
        </CardSection>

        <CardSection>
          <TextError errorText={this.props.lastNameError} />
          <InputField
            placeholder="last name"
            onChangeText={this.onLastNameChanged}
            value={this.props.lastName}
          />
        </CardSection>

        {/* <CardSection>
          <InputField
            autoCapitalize="none"
            placeholder="email"
            onChangeText={this.onEmailChanged}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <InputField
            secureTextEntry
            placeholder="password"
            onChangeText={this.onPasswordChanged}
            value={this.props.password}
            autoCapitalize="none"
            editable={false}
            selectTextOnFocus={false}
          />
        </CardSection> */}

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
    lastNameError
  };
};

const actions = {
  firstNameSignup,
  lastNameSignup,
  emailForSignUp,
  passwordForSignUp,
  signUserUp,
  checkFirstName,
  checkLastName
};

export default connect(
  mapStateToProps,
  actions
)(RegistrationForm);
