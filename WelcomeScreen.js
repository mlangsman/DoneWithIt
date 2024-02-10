import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  StatusBar,
} from "react-native";

const image = require("./assets/background.jpg");

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("./assets/logo-red.png")}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  logo: {
    height: 692 / 4,
    width: 692 / 4,
    top: StatusBar.currentHeight + 150,
  },
});

export default WelcomeScreen;
