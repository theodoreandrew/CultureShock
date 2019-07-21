import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { Button } from "./common";

class WelcomePage extends React.Component {
  render() {
    const { user, firstName, lastName } = this.props;

    return (
      <View>
        <Text>
          Welcome To Culture Shock {firstName} {lastName}
        </Text>

        <Button>Describe Yourself !!</Button>
      </View>
    );
  }
}

// const mapStateToProps = state => {
//   const { user } = state.auth;

//   return { user };
// };

export default connect(null)(WelcomePage);
