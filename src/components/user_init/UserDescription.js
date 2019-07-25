import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import { addDescription } from "../../actions/UserActions";

class UserDescription extends React.Component {
  state = { description: "" };

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: (
        <TouchableHighlight
          title="Save"
          style={{ paddingRight: 10 }}
          onPress={() => params.handleAddDescription()}
        >
          <Text style={{ fontSize: 20 }}>Save</Text>
        </TouchableHighlight>
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handleAddDescription: this._handleAddDescription
    });
  }

  _handleAddDescription = () => {
    const { description } = this.state;

    this.props.addDescription(description);
  };

  handleUserTypingDescription = description => {
    this.setState({ description });
  };

  render() {
    return (
      <View style={{ backgroundColor: "#ffffff" }}>
        <TextInput
          autoCorrect={false}
          onChangeText={this.handleUserTypingDescription}
          value={this.state.description}
          style={{ height: 600, borderWidth: 0 }}
          multiline={true}
          numberOfLines={100}
          editable
          placeholder={"Add Description"}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const userProfile = state.userProfile;

  return { userProfile };
};

export default connect(
  mapStateToProps,
  { addDescription }
)(UserDescription);
