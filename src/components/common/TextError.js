import React from "react";
import { Text } from "react-native";

const TextError = props => {
  return <Text style={{ color: "red" }}>{props.errorText}</Text>;
};

export { TextError };
