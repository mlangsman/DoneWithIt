import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

import colours from "../config/colours";
import AppText from "../components/Text";
import AppButton from "../components/Button";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const image = require("../assets/background.jpg");

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => navigation.navigate("AppNavigator")}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={require("../assets/logo-red.png")}
            />
          </TouchableOpacity>
          <AppText style={styles.text}>Done With It</AppText>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            buttonType="primary"
            title="Login"
            onPress={() => navigation.navigate("LoginScreen")}
          />
          <AppButton
            buttonType="secondary"
            title="Register"
            //onPress={() => navigation.navigate("AppNavigator")}
            onPress={() => navigation.navigate("RegisterUserScreen")}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  content: {
    flex: 1,
    rowGap: 20,
    alignItems: "center",
    top: "15%",
  },
  buttonContainer: {
    flex: -1,
    justifyContent: "center",
    alignItems: "stretch",
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 0,
    rowGap: 0,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "yellow",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    height: 692 / 5,
    width: 692 / 5,
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "900",
    color: "crimson",
  },
});

export default WelcomeScreen;
