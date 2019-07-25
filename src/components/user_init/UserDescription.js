import React from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import { addDescription } from "../../actions/UserActions";
import { Button } from "../common";

class UserDescription extends React.Component {
  state = { description: "" };

  static navigationOptions = ({ navigation }) => {
    const { buttonStyle, textButtonStyle } = styles;
    const { params = {} } = navigation.state;
    return {
      headerRight: (
        <TouchableHighlight
          title="Save"
          style={buttonStyle}
          onPress={() => params.handleAddDescription()}
        >
          <Text style={textButtonStyle}>Save</Text>
        </TouchableHighlight>
        // <Button style={{padding : 10}} onPress={() => params.handleAddDescription()}>Save</Button>
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
          style={{ height: 600, borderWidth: 0, fontSize: 15 }}
          multiline={true}
          numberOfLines={100}
          editable
          placeholder={"Add Description"}
        />
      </View>
    );
  }
}

const styles = {
  buttonStyle: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#67BBE1",
    marginRight: 10
  },
  textButtonStyle: {
    fontSize: 15,
    color: "#ffffff"
  }
};

const mapStateToProps = state => {
  const userProfile = state.userProfile;

  return { userProfile };
};

export default connect(
  mapStateToProps,
  { addDescription }
)(UserDescription);
