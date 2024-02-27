import React from "react";
import {
  View,
  Button,
  Alert,
  Dimensions,
  Platform,
  Linking,
  SafeAreaView,
} from "react-native";
import Layout from "./Layout";

const DeviceInfoScreen = () => {
  const getDeviceInfo = () => {
    const { width, height } = Dimensions.get("window");
    const os = Platform.OS;
    const model = Platform.select({
      ios: "iPhone",
      android: "Samsung Galaxy",
      default: "Unknown",
    });

    Alert.alert(
      "Device Information",
      `OS: ${os}\nModel: ${model}\nWidth: ${width}\nHeight: ${height}`
    );
  };

  const callPhoneNumber = () => {
    const phoneNumber = "123456789"; // Здесь укажите ваш номер телефона
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <Layout title="Device Info">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Button title="Get Device Info" onPress={getDeviceInfo} />
        <Button title="Call Phone Number" onPress={callPhoneNumber} />
      </View>
    </Layout>
  );
};

export default DeviceInfoScreen;
