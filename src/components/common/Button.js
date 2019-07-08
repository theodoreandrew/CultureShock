import React from "react";
import { TouchableHighlight, Text } from "react-native";

/**
 * Reusable component for button that can be used over and over.
 * @param {*} props
 */
// const Button = props => {
//   const { registrationButtonStyle, registrationTextStyle } = styles;

//   /**
//    * Render button on the phone screen.
//    */
//   return (
//     <TouchableHighlight style={registrationButtonStyle} onPress={props.onPress}>
//       <Text style={registrationTextStyle}>{props.children}</Text>
//     </TouchableHighlight>
//   );
// };

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
        underlayColor={"#ededed"}
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

/**
 * This object contains styling for 2 cases:
 *
 * case 1: If the input is not valid, use disabledButton and disabledText styles.
 * case 2: If the input is valid and ready to be processed, use registrationTextStyle and
 *         registrationButtonStyle
 */
const styles = {
  buttonNotPressed: {
    borderWidth: 0,
    padding: 15,
    borderRadius: 5,
    alignSelf: "stretch",
    shadowColor: "#b2b2b2",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    backgroundColor: "#67BBE1"
  },
  buttonPressed: {
    borderWidth: 1,
    borderColor: "#c7c7c7",
    padding: 15,
    borderRadius: 5,
    alignSelf: "stretch",
    shadowColor: "#b2b2b2",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2
  },
  textNotPressed: { textAlign: "center", fontSize: 18, color: "#ffffff" },
  textPressed: { textAlign: "center", fontSize: 18, color: "#999999" }
};

export { Button };
