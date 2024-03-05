import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import Screen from "../components/Screen";

const LoginScreen = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    height: 80,
    width: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});
