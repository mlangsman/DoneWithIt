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
} from "react-native";

const image = require("./assets/background.jpg");

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <SafeAreaView>
        <View style={styles.content}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("./assets/logo-red.png")}
          />
          <Text style={styles.text}>Marketplace App</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: "100%",
  },
  content: {
    flex: 1,
    rowGap: 20,
    alignItems: "center",
    top: "15%",
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
    fontFamily: "Helvetica",
    fontSize: 16,
    letterSpacing: 1.2,
  },
});

export default WelcomeScreen;
