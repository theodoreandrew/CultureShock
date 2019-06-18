import React from "react";
import { View, Text } from "react-native";

/**
 * This is the Header that contains title of each page.
 */
const Header = () => {
  const { containerStyle, textStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Make Your Profile</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    marginTop: 49.05,
    marginLeft: 40
  },
  textStyle: {
    color: "#535D7E",
    fontSize: 26,
    fontWeight: "700",
    textShadowColor: "rgba(0, 0, 0, 0.75)"
  }
};

export default Header;
