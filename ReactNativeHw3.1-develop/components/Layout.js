import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import Header from "./Header";

const Layout = ({ title, children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header title={title} />
      <View style={{ flex: 1 }}>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;
