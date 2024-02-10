import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

const image = require("./assets/background.jpg");

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default WelcomeScreen;
