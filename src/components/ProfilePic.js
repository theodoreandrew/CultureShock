import React from "react";
import { View, Text } from "react-native";

const ProfilePic = () => {
  const { containerStyle, textStyle } = styles;

  // Diameter circle : 96

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Add Profile Pic</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    marginTop: 24,
    marginBottom: 10
  },
  textStyle: {
    color: "#535D7E",
    fontSize: 17
  }
};

export default ProfilePic;
