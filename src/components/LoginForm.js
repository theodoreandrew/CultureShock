import React from "react";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import {
  Container,
  CardSection,
  InputField,
  Button,
  Spinner,
  TextError
} from "./common";
import Header from "./Header";
import { inputUpdate, signUserIn } from "../actions";

class LoginForm extends React.Component {
  state = { isEmailValid: null, isPasswordValid: null };

  onButtonPress = () => {
    const { email, password, signUserIn } = this.props;

    if (this.validateInput()) {
      signUserIn(email, password);
    }
  };

  onSignupNavigationPress = () => {
    this.setState({
      isEmailValid: null,
      isPasswordValid: null
    });

    Actions.signup();
  };

  validateInput = () => {
    const { email, password } = this.props;

    const isEmailValid = email !== "" ? true : false;
    const isPasswordValid = password !== "" ? true : false;

    this.setState({ isEmailValid, isPasswordValid });

    return isEmailValid && isPasswordValid;
  };

  /**
   * This function renders an error message if email is not valid.
   */
  renderErrorEmail = () => {
    if (this.state.isEmailValid || this.state.isEmailValid === null) {
      return null;
    }
    return <TextError errorText="Please enter your email" />;
  };

  /**
   * This function renders an error message if password is not valid.
   */
  renderErrorPassword = () => {
    if (this.state.isPasswordValid || this.state.isPasswordValid === null) {
      return null;
    }
    return <TextError errorText="Please enter your password" />;
  };

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress}>Login</Button>;
  };

  render() {
    const { email, password, inputUpdate } = this.props;
    const { isEmailValid, isPasswordValid } = this.state;

    return (
      <Container>
        <Header />
        <CardSection style={{ marginBottom: 5 }}>
          {this.renderErrorEmail()}
          <InputField
            autoCapitalize="none"
            placeholder="email"
            onChangeText={value => inputUpdate({ prop: "email", value })}
            value={email}
            isValid={isEmailValid}
          />
        </CardSection>

        <CardSection style={{ marginBottom: 10 }}>
          {this.renderErrorPassword()}
          <InputField
            autoCapitalize="none"
            placeholder="password"
            onChangeText={value => inputUpdate({ prop: "password", value })}
            value={password}
            secureTextEntry
            isValid={isPasswordValid}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.textErrorStyle}>{this.props.errorSignIn}</Text>
          {this.renderButton()}
        </CardSection>

        <View style={{ alignSelf: "center" }}>
          <Text style={{ fontSize: 15 }}>
            Don't have account?{" "}
            <Text
              style={{ color: "blue", fontSize: 15 }}
              onPress={this.onSignupNavigationPress}
            >
              Sign up here
            </Text>
          </Text>
        </View>
      </Container>
    );
  }
}

const styles = {
  textErrorStyle: {
    color: "red",
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 15
  }
};

const mapStateToProps = state => {
  const { email, password, loading, errorSignIn } = state.auth;

  return {
    email,
    password,
    errorSignIn,
    loading
  };
};

const actions = { inputUpdate, signUserIn };

export default connect(
  mapStateToProps,
  actions
)(LoginForm);
