import React from "react";
import { View } from "react-native";

/**
 * Reusable component that can be used over and over.
 * @param {*} props
 */
const CardSection = props => {
  const { cardStyle } = styles;

  return <View style={cardStyle}>{props.children}</View>;
};

// Styling for card section.
const styles = {
  cardStyle: {
    marginBottom: 20
  }
};

export { CardSection };
