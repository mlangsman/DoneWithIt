import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";

import colours from "../config/colours";
import AppText from "./Text";

const defaultAction = () => console.log("Pressed");

const AppButton = ({
  title = "App Button",
  buttonType = "primary",
  onPress = defaultAction,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        buttonType === "primary" ? styles.primary : styles.secondary,
      ]}
    >
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 8,
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
