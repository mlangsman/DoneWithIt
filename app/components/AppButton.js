import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

import colours from "../config/colours";
import AppText from "./AppText";

const AppButton = ({ title = "App Button", buttonType = "primary" }) => {
  return (
    <View
      style={[
        styles.button,
        buttonType === "primary" ? styles.primary : styles.secondary,
      ]}
    >
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  primary: {
    backgroundColor: colours.primary,
  },
  secondary: {
    backgroundColor: colours.secondary,
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default AppButton;
