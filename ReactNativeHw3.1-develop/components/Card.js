import React, { lazy } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Image } from "expo-image";
const Card = ({ imageSource, productInfo }) => {
  const handlePress = () => {
    Alert.alert("Info about item", productInfo);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container2}>
        <View style={styles.box}>
          <Image style={styles.image} source={imageSource} />
        </View>
        <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap" }}>
          <Text style={{ fontSize: 14, lineHeight: 16.94 }}>Item #1 Name</Text>
          <Text style={{ fontSize: 14, lineHeight: 16.94 }}>Goes here</Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 14,

              lineHeight: 16.94,
            }}
          >
            $19.99
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },
  box: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
  image: {
    flex: 1,
    width: "100%",
  },
});

export default Card;
