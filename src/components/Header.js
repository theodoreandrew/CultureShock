import React from "react";
import { View, Text } from "react-native";

/**
 * This is the Header that contains title of each page.
 */
const Header = () => {
  const { containerStyle, textStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Welcome To Culture Shock</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    marginTop: 49.05,
    marginLeft: 1,
    marginBottom: 10,
    // margin: "0 auto",
    alignSelf: "center"
  },
  textStyle: {
    color: "#535D7E",
    fontSize: 20,
    fontWeight: "700",
    textShadowColor: "rgba(0, 0, 0, 0.75)"
  }
};

export default Header;
