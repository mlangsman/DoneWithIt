import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { TextInput } from "react-native-gesture-handler";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="mail-outline"
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock-closed-outline"
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
      />
      <AppButton
        buttonType="primary"
        title="Login"
        onPress={() => console.log(email, password)}
      />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 24,
  },
  logo: {
    resizeMode: "contain",
    height: 80,
    width: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});
