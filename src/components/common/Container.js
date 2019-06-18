import React from "react";
import { View } from "react-native";

/**
 * Reusable component that can be used over and over.
 * @param {*} props
 */
const Container = props => {
  const { containerStyle } = styles;

  return <View style={containerStyle}>{props.children}</View>;
};

// Styling for container
const styles = {
  containerStyle: {
    marginLeft: 40,
    marginRight: 40
  }
};

export { Container };
