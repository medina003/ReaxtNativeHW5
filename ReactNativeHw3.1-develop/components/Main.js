import React, { lazy } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useEffect, useState } from "react";

const Main = () => {
  const [nameValue, setNameValue] = useState("");

  const handleNameChange = (text) => {
    setNameValue(text);
  };

  const [emailValue, setEmailValue] = useState("");

  const handleEmailChange = (text) => {
    setEmailValue(text);
  };

  const [pswValue, setPswValue] = useState("");

  const handlePswChange = (text) => {
    setPswValue(text);
  };
  const [showPassword, setShowPassword] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  function toggleBtn() {
    setIsChecked(!isChecked);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.miniTextLeft}>X</Text>
        <Text style={styles.largeText}>Sign Up</Text>
        <Text style={styles.miniTextRight}>Login</Text>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={nameValue}
            onChangeText={handleNameChange}
            maxLength={100}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            maxLength={100}
            value={emailValue}
            onChangeText={handleEmailChange}
          ></TextInput>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            maxLength={100}
            value={pswValue}
            onChangeText={handlePswChange}
            secureTextEntry={!showPassword}
          />
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <Text style={styles.green}>{showPassword ? "Hide" : "Show"}</Text>
          </Pressable>
        </View>
        <Text style={styles.gray}>
          <Icon name="square-o"> </Icon>I would like to receive your newsletter
          and other promotional information.
        </Text>

        <View style={styles.bottomContainer}>
          <Pressable style={styles.btnContainer}>
            <Text style={styles.heading}>Sign up</Text>
          </Pressable>
          <Text style={styles.green}>Forgot your password?</Text>
        </View>
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
  btnContainer: {
    width: "100%",
    backgroundColor: "#5DB075",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 8,
    marginVertical: 20,
  },
  heading: {
    fontSize: 20,
    color: "white",
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 80,
    alignItems: "center",
  },
  miniTextLeft: {
    fontSize: 16,
    lineHeight: 19.36,
    color: "gray",
  },
  miniTextRight: {
    fontSize: 16,
    lineHeight: 19.36,
    color: "#5DB075",
  },
  largeText: {
    fontSize: 30,
    lineHeight: 36.31,
  },
  inputsContainer: {
    marginVertical: 30,
    flex: 1,
    flexDirection: "column",
    gap: 15,
  },
  inputContainer: {
    backgroundColor: "#F6F6F6",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  passwordContainer: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "lightgrey",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 8,
    padding: 5,
  },
  input: {
    fontSize: 16,
    color: "gray",
  },
  green: {
    color: "green",
  },
  gray: {
    color: "grey",
  },
});

export default Main;
