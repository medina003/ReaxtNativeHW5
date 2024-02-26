import React, { lazy } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Card from "./Card";
import { useEffect, useState } from "react";

const Main = () => {
  const [textValue, setTextValue] = useState("");

  const handleInputChange = (text) => {
    setTextValue(text);
  };

  useEffect(() => {
    console.log("textValue", textValue);
  }, [textValue]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.miniText}>Back</Text>
        <Text style={styles.largeText}>Content</Text>
        <Text style={styles.miniText}>Filter</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={textValue}
          onChangeText={handleInputChange}
        ></TextInput>
      </View>

      <View style={styles.itemsBox}>
        <ScrollView>
          <Card imageSource="https://www.uniza.sk/images/fotogaleria/oznamy-pre-studentov/2019/11032019_iPhone-XR.jpg"></Card>
          <Card imageSource="https://pbs.twimg.com/media/D_2iAI0W4AAX40e.jpg:large"></Card>
          <Card imageSource="https://www.uniza.sk/images/fotogaleria/oznamy-pre-studentov/2019/11032019_iPhone-XR.jpg"></Card>
          <Card imageSource="https://pbs.twimg.com/media/D_2iAI0W4AAX40e.jpg:large"></Card>
          <Card imageSource="https://www.uniza.sk/images/fotogaleria/oznamy-pre-studentov/2019/11032019_iPhone-XR.jpg"></Card>
          <Card imageSource="https://pbs.twimg.com/media/D_2iAI0W4AAX40e.jpg:large"></Card>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    flexDirection: "column",
  },
  itemsBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  header: {
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 80,
    alignItems: "center",
  },
  miniText: {
    fontSize: 16,
    lineHeight: 19.36,
    color: "#5DB075",
  },
  largeText: {
    fontSize: 30,
    lineHeight: 36.31,
  },

  searchContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 15,
    width: 380,
    height: 40,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 20,
  },
  input: {
    fontSize: 16,
    color: "gray",
  },
});

export default Main;
