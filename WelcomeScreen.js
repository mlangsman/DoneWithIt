import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
  Button,
} from "react-native";

const image = require("./assets/background.jpg");

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
            source={require("./assets/logo-red.png")}
          />
          <Text style={styles.text}>Done With It</Text>
        </View>
        <View style={styles.primaryButton} />
        <View style={styles.secondaryButton} />
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
    width: "100%",
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
    fontSize: 18,
    letterSpacing: 1.2,
  },
  primaryButton: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: 44,
  },
  secondaryButton: {
    backgroundColor: "#4ECDC4",
    width: "100%",
    height: 44,
  },
});

export default WelcomeScreen;
