import React from "react";
import { TextInput, View } from "react-native";

/**
 * Re-usable component for future purposes.
 * @param {String} placeholder placeholder for specific field.
 * @param {String} value value that specific text input contains.
 * @param {function} onChangeText function that is invoked when user types in the text input.
 * @param {boolean} secureTextEntry to hide the content of the text input.
 * @param {String} autoCapitalize specifier whether to start with upper case character when
 *        user first type into text input field.
 */
const InputField = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize
}) => {
  const { inputStyle } = styles;

  return (
    <View>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
      />
    </View>
  );
};

// Styling for the text input
const styles = {
  inputStyle: {
    borderWidth: 1,
    padding: 15,
    borderColor: "#A9AEBE",
    borderRadius: 5,
    fontSize: 15
  }
};

export { InputField };
