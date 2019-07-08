import React from "react";
import { View } from "react-native";

/**
 * Reusable component that can be used over and over.
 * @param {*} props
 */
const Container = props => {
  const { containerStyle } = styles;

  return <View style={[containerStyle, props.style]}>{props.children}</View>;
};

// Styling for container
const styles = {
  containerStyle: {
    // marginLeft: 40,
    // marginRight: 40,
    marginTop: 150,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: "#ddd",
    // backgroundColor: "#fff"
  }
};

export { Container };
