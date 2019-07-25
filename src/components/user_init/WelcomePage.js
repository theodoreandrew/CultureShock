import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

import { Container, Button } from "../common";
import { fetchUserProfile } from "../../actions/UserActions";

class WelcomePage extends React.Component {
  componentDidMount() {
    this.props.fetchUserProfile();
  }

  onPressToDescribeYourself = () => {
    Actions.userDescription();
  };

  render() {
    const { userProfile } = this.props;

    return (
      <Container>
        <Text>Welcome To Culture Shock {userProfile.fullName}</Text>

        <Button onPress={this.onPressToDescribeYourself}>
          Describe Yourself !!
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const userProfile = state.userProfile;

  return { userProfile };
};

export default connect(
  mapStateToProps,
  { fetchUserProfile }
)(WelcomePage);
