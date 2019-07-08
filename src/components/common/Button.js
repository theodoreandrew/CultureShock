import React from "react";
import { TouchableHighlight, Text } from "react-native";

class Button extends React.Component {
  state = { isButtonPressed: false };

  render() {
    const {
      buttonPressed,
      buttonNotPressed,
      textNotPressed,
      textPressed
    } = styles;
    const { isButtonPressed } = this.state;

    return (
      <TouchableHighlight
        style={isButtonPressed ? buttonPressed : buttonNotPressed}
        activeOpacity={1}
        underlayColor={"#528ea8"}
        onPress={this.props.onPress}
        onHideUnderlay={() => this.setState({ isButtonPressed: false })}
        onShowUnderlay={() => this.setState({ isButtonPressed: true })}
      >
        <Text style={isButtonPressed ? textPressed : textNotPressed}>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    );
  }
}

// Styling for the button and the text inside the button.

const defaultButton = {
  padding: 15,
  borderRadius: 5,
  alignSelf: "stretch",
  shadowColor: "#b2b2b2",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2
};

const defaultText = { textAlign: "center", fontSize: 18 };

/**
 * This object contains styling for 2 cases:
 *
 * case 1: If the input is not valid, use disabledButton and disabledText styles.
 * case 2: If the input is valid and ready to be processed, use registrationTextStyle and
 *         registrationButtonStyle
 */
const styles = {
  buttonNotPressed: {
    ...defaultButton,
    borderWidth: 0,
    backgroundColor: "#67BBE1"
  },
  buttonPressed: {
    ...defaultButton
  },
  textNotPressed: { ...defaultText, color: "#ffffff" },
  textPressed: { ...defaultText, color: "#dbdbdb" }
};

export { Button };
