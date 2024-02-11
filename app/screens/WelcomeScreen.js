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
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

const image = require("../assets/background.jpg");

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../assets/logo-red.png")}
          />
          <AppText style={styles.text}>Done With It</AppText>
        </View>
        <AppButton buttonType="primary" />
        <AppButton buttonType="secondary" />
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
    flex: 1,
    width: "70%",
    backgroundColor: "orange",
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
