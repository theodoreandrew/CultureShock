import React from "react";
import { connect } from "react-redux";

import { Container, CardSection, Button, InputField } from "./common";
import ProfilePic from "./ProfilePic";

import { emailForSignUp, passwordForSignUp } from "../actions";

class RegistrationForm extends React.Component {
  /**
   * Call action creator when user types on InputField.
   */
  onEmailChanged = email => {
    this.props.emailForSignUp(email);
  };

  onPasswordChanged = password => {
    this.props.passwordForSignUp(password);
  };

  render() {
    console.log(this.props.password);
    return (
      <Container>
        <CardSection>
          <ProfilePic />
        </CardSection>

        <CardSection>
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
        </CardSection>
      </Container>
    );
  }
}

/**
 * Reducers return an object with state in it. In this mapStateToProps,
 * this function will need email and password for now.
 *
 * @param {*} state state that is updated by reducer.
 */
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(
  mapStateToProps,
  { emailForSignUp, passwordForSignUp }
)(RegistrationForm);
