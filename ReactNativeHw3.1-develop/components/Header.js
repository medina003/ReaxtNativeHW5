import React from "react";
import { View, Text } from "react-native";

const Header = ({ title }) => {
  return (
    <View
      style={{
        height: 50,
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{title}</Text>
    </View>
  );
};

export default Header;
