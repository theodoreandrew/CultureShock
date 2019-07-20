import React from "react";
import { View, Text } from "react-native";

/**
 * This is the Header that contains title of each page.
 */
const Header = () => {
  const { containerStyle, textStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Culture</Text>
      <Text style={textStyle}>Shocks</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    marginTop: 20,
    marginLeft: 1,
    marginBottom: 20,
    alignSelf: "center"
  },
  textStyle: {
    color: "#535D7E",
    fontSize: 30,
    fontWeight: "700",
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.75)"
  }
};

export default Header;
