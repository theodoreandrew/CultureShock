import React from "react";
import { connect } from "react-redux";
import { View, TextInput, TouchableHighlight, Text } from "react-native";

import { addPost } from "../../actions/PostActions";

class PostAdd extends React.Component {
  state = { post: "" };

  static navigationOptions = ({ navigation }) => {
    const { buttonStyle, textButtonStyle } = styles;
    const { params = {} } = navigation.state;
    return {
      headerRight: (
        <TouchableHighlight
          title="Add"
          style={buttonStyle}
          onPress={() => params.handleAddPost()}
        >
          <Text style={textButtonStyle}>Add</Text>
        </TouchableHighlight>
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handleAddPost: this._handleAddPost
    });
  }

  _handleAddPost = () => {
    const { post } = this.state;
    this.props.addPost(post);
  };

  handleUserTypingDescription = post => {
    this.setState({ post });
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
          placeholder={"What's on your mind?"}
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
  const posts = state.posts;

  return { posts };
};

export default connect(
  mapStateToProps,
  { addPost }
)(PostAdd);
