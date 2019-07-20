import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class PostList extends React.Component {
  render() {
    return (
      <View>
        <Text>Post 1</Text>
        <Text>Post 2</Text>
        <Text>Post 3</Text>
        <Text>Post 4</Text>
        <Text>Post 5</Text>
        <Text>Post 6</Text>
        <Text>Post 7</Text>
        <Text>Post 8</Text>
        <Text>Post 9</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.auth;

  return { user };
};

export default connect(mapStateToProps)(PostList);
