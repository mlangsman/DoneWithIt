import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={styles.mainView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={[styles.topNavButton, styles.lhsButton]} />
          <View style={[styles.topNavButton, styles.rhsButton]} />
        </View>
        <Image
          resizeMode="cover"
          source={require("../assets/chair.jpg")}
          style={styles.mainImage}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  container: {
    height: "100%",
    width: "100%",
    //backgroundColor: "yellow",
  },
  mainImage: {
    height: "80%",
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    //backgroundColor: "green",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },
  topNavButton: {
    width: 44,
    height: 44,
  },
  lhsButton: {
    backgroundColor: "#fc5c65",
  },
  rhsButton: {
    backgroundColor: "#4ECDC4",
  },
});

export default ViewImageScreen;
