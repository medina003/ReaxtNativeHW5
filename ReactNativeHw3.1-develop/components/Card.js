import React, { lazy } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Image } from "expo-image";
const Card = ({ imageSource }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={imageSource}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.heading}>Header</Text>
      <Text>
        He'll want to use your yacht, and I don't wat this thing smelling like
        fish
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
    borderRadius: 3,
    marginVertical: 5,
  },
  img: {
    height: 200,
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderColor: "grey",
    borderRadius: 3,
    marginVertical: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
  },
});

export default Card;
