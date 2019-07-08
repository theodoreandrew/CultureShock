import React from "react";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import { Container, CardSection, InputField, Button, Spinner } from "./common";
import Header from "./Header";
import { inputSignupUpdate, signUserIn } from "../actions";

class LoginForm extends React.Component {
  state = { isEmailValid: null, isPasswordValid: null };

  onButtonPress = () => {
    const { email, password, signUserIn } = this.props;

    if (this.validateInput()) {
      signUserIn(email, password);
    }
  };

  validateInput = () => {
    const { email, password } = this.props;

    const isEmailValid = email !== "" ? true : false;
    const isPasswordValid = password !== "" ? true : false;

    this.setState({ isEmailValid, isPasswordValid });

    return isEmailValid && isPasswordValid;
  };

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress}>Login</Button>;
  };

  render() {
    const { email, password, inputSignupUpdate } = this.props;
    const { isEmailValid, isPasswordValid } = this.state;

    return (
      <Container>
        <Header />
        <CardSection>
          <InputField
            autoCapitalize="none"
            placeholder="email"
            onChangeText={value => inputSignupUpdate({ prop: "email", value })}
            value={email}
            isValid={isEmailValid}
          />
        </CardSection>

        <CardSection>
          <InputField
            autoCapitalize="none"
            placeholder="password"
            onChangeText={value =>
              inputSignupUpdate({ prop: "password", value })
            }
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
              onPress={() => Actions.signup()}
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

const actions = { inputSignupUpdate, signUserIn };

export default connect(
  mapStateToProps,
  actions
)(LoginForm);
