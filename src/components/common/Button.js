import React from "react";
import { TouchableHighlight, Text } from "react-native";

/**
 * Reusable component for button that can be used over and over.
 * @param {*} props
 */
const Button = props => {
  const { registrationButtonStyle, buttonText } = styles;

  return (
    <TouchableHighlight style={registrationButtonStyle} onPress={props.onPress}>
      <Text style={buttonText}>{props.children}</Text>
    </TouchableHighlight>
  );
};

// Styling for the button and the text inside the button.
const styles = {
  registrationButtonStyle: {
    borderWidth: 1,
    padding: 15,
    borderColor: "#A9AEBE",
    borderRadius: 5,
    backgroundColor: "#67BBE1"
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18
  }
};

export { Button };
