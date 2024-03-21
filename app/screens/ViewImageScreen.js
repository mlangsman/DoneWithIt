import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import colours from "../config/colours";

const ViewImageScreen = () => {
  return (
    <View style={styles.mainView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={[styles.topNavButton, styles.lhsButton]}>
            <Ionicons style={styles.icon} name="close-outline" size={32} />
          </View>
          <View style={[styles.topNavButton, styles.rhsButton]}>
            <Ionicons style={styles.icon} name="trash-outline" size={32} />
          </View>
        </View>
        <Image
          resizeMode="contain"
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
  },
  mainImage: {
    flex: -1,
    width: "100%",
  },
  buttonContainer: {
    flex: -1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },
  topNavButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "white",
  },
  lhsButton: {},
  rhsButton: {},
});

export default ViewImageScreen;
