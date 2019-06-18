import React from "react";
import { View } from "react-native";

/**
 * Reusable component that can be used over and over.
 * @param {*} props
 */
const CardSection = props => {
  const { containerStyle } = styles;

  return <View style={containerStyle}>{props.children}</View>;
};

// Styling for card section.
const styles = {
  containerStyle: {
    marginBottom: 20
  }
};

export { CardSection };
