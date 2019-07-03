import React from "react";
import { TouchableHighlight, Text } from "react-native";

/**
 * Reusable component for button that can be used over and over.
 * @param {*} props
 */
const Button = props => {
  const {
    registrationButtonStyle,
    disabledButtonStyle,
    disabledTextStyle,
    registrationTextStyle
  } = styles;

  /**
   * Render button on the phone screen.
   */
  return (
    <TouchableHighlight
      style={props.isDisabled ? disabledButtonStyle : registrationButtonStyle}
      onPress={props.onPress}
      disabled={props.isDisabled}
    >
      <Text
        style={props.isDisabled ? disabledTextStyle : registrationTextStyle}
      >
        {props.children}
      </Text>
    </TouchableHighlight>
  );
};

// Styling for the button and the text inside the button.

/**
 * This is basic button style.
 */
const defaultButtonStyle = {
  borderWidth: 0,
  padding: 15,
  borderRadius: 5,
  flex: 1,
  alignSelf: "stretch",
  shadowColor: "#b2b2b2",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2
};

/**
 * This is basic text style inside the button.
 */
const defaultTextStyle = {
  textAlign: "center",
  fontSize: 18
};

/**
 * This object contains styling for 2 cases:
 *
 * case 1: If the input is not valid, use disabledButton and disabledText styles.
 * case 2: If the input is valid and ready to be processed, use registrationTextStyle and
 *         registrationButtonStyle
 */
const styles = {
  registrationButtonStyle: {
    ...defaultButtonStyle,
    backgroundColor: "#67BBE1"
  },
  registrationTextStyle: { ...defaultTextStyle, color: "#ffffff" },
  disabledButtonStyle: {
    ...defaultButtonStyle,
    backgroundColor: "#dee0e2"
  },
  disabledTextStyle: { ...defaultTextStyle, color: "#7c7c7c" }
};

export { Button };
