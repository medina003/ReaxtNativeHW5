import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import Main from "./components/Main";
const App = () => {
  return (
    <View style={styles.container}>
      <Main></Main>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default App;
