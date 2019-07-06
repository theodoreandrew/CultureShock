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
import {
  firstNameSignup,
  lastNameSignup,
  emailForSignUp,
  passwordForSignUp,
  retypePasswordForSignUp,
  signUserUp
} from "../actions";
import ProfilePic from "./ProfilePic";
import { emailFollowsRegex } from "../util/Validation";

class RegistrationForm extends React.Component {
  state = {
    isFirstNameValid: null,
    isLastNameValid: null,
    isEmailValid: null,
    isPasswordValid: null,
    isRetypePasswordValid: null,
    firstNameText: "",
    lastNameText: "",
    errorEmailText: "",
    errorPasswordText: "",
    errorRetypePasswordText: ""
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

  onRetypePasswordChanged = retypePassword => {
    this.props.retypePasswordForSignUp(retypePassword);
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
    const { firstName, lastName } = this.props;

    const isFirstNameValid = firstName !== "";
    const isLastNameValid = lastName !== "";
    const isEmailValid = this.validateEmail();
    const isPasswordValid = this.validatePassword();
    const isRetypePasswordValid = this.validateRetypePassword();

    this.setState({
      isFirstNameValid,
      isLastNameValid,
      isEmailValid,
      isPasswordValid,
      isRetypePasswordValid
    });

    const isValid =
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isRetypePasswordValid;

    return isValid;
  };

  /**
   * This function validates email.
   * 1. If email is empty, set errorEmailText state to follow
   *    first expression in the ternary operator.
   * 2. If email does not follow correct format, set errorEmailText state to follow
   *    second expression in the ternary operator.
   */
  validateEmail = () => {
    const { email } = this.props;
    const emailFollowsPattern = emailFollowsRegex(email);
    const emailIsNotEmpty = email !== "";
    const errorEmailText = !emailIsNotEmpty
      ? "Email is required"
      : 'Email must follow format: "john.doe@gmail.com"';

    this.setState({
      errorEmailText
    });

    return emailFollowsPattern && emailIsNotEmpty;
  };

  validatePassword = () => {
    const { password } = this.props;
    const passwordIsNotEmpty = password !== "";
    const passwordFollowsMinCharacter = password.length >= 8;
    const errorPasswordText = !passwordIsNotEmpty
      ? "Password is required"
      : "Password must be at least 8 characters";

    this.setState({
      errorPasswordText
    });

    return passwordIsNotEmpty && passwordFollowsMinCharacter;
  };

  validateRetypePassword = () => {
    const { retypePassword, password } = this.props;
    const retypePasswordIsNotEmpty = retypePassword !== "";
    const retypeMustMatchWithPassword = retypePassword === password;
    const errorRetypePasswordText = !retypePasswordIsNotEmpty
      ? "Re-type password is required"
      : "Must match with password above";

    this.setState({
      errorRetypePasswordText
    });

    return retypePasswordIsNotEmpty && retypeMustMatchWithPassword;
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
    return <TextError errorText={this.state.errorEmailText} />;
  };

  /**
   * This function renders an error message if password is not valid.
   */
  renderErrorPassword = () => {
    if (this.state.isPasswordValid || this.state.isPasswordValid === null) {
      return null;
    }
    return <TextError errorText={this.state.errorPasswordText} />;
  };

  /**
   * This function renders an error message if password is not valid.
   */
  renderErrorRetypePassword = () => {
    if (
      this.state.isRetypePasswordValid ||
      this.state.isRetypePasswordValid === null
    ) {
      return null;
    }
    return <TextError errorText={this.state.errorRetypePasswordText} />;
  };

  render() {
    console.log(this.state.isFirstNameValid);
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
            isValid={this.state.isFirstNameValid}
          />
        </CardSection>

        <CardSection>
          {this.renderErrorLastName()}
          <InputField
            placeholder="last name"
            onChangeText={this.onLastNameChanged}
            value={this.props.lastName}
            isValid={this.state.isLastNameValid}
          />
        </CardSection>

        <CardSection>
          {this.renderErrorEmail()}
          <InputField
            autoCapitalize="none"
            placeholder="email"
            onChangeText={this.onEmailChanged}
            value={this.props.email}
            isValid={this.state.isEmailValid}
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
            isValid={this.state.isPasswordValid}
          />
        </CardSection>

        <CardSection>
          {this.renderErrorRetypePassword()}
          <InputField
            secureTextEntry
            placeholder="re-type password"
            onChangeText={this.onRetypePasswordChanged}
            value={this.props.retypePassword}
            autoCapitalize="none"
            editable={false}
            selectTextOnFocus={false}
            isValid={this.state.isRetypePasswordValid}
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
  const {
    firstName,
    lastName,
    email,
    password,
    retypePassword,
    error,
    loading
  } = state.auth;

  return {
    firstName,
    lastName,
    email,
    password,
    retypePassword,
    error,
    loading
  };
};

const actions = {
  firstNameSignup,
  lastNameSignup,
  emailForSignUp,
  passwordForSignUp,
  retypePasswordForSignUp,
  signUserUp
};

export default connect(
  mapStateToProps,
  actions
)(RegistrationForm);
