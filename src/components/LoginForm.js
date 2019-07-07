import React from "react";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import { Container, CardSection, InputField, Button, Spinner } from "./common";
import Header from "./Header";
import { inputSignupUpdate, signUserIn } from "../actions";

class LoginForm extends React.Component {
  // state = { isValid: true };

  onButtonPress = () => {
    const { email, password, signUserIn } = this.props;
    signUserIn(email, password);
  };

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress}>Login</Button>;
  };

  render() {
    const { email, password, inputSignupUpdate } = this.props;

    return (
      <Container>
        <Header />
        <CardSection>
          <InputField
            autoCapitalize="none"
            placeholder="email"
            onChangeText={value => inputSignupUpdate({ prop: "email", value })}
            value={email}
            isValid
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
            isValid
          />
        </CardSection>

        <CardSection>
          <Text style={styles.textErrorStyle}>{this.props.errorSignIn}</Text>
          {this.renderButton()}
        </CardSection>

        <View>
          <Text style={{ fontSize: 20 }}>
            Don't have account?{" "}
            <Text
              style={{ color: "blue", fontSize: 20 }}
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
