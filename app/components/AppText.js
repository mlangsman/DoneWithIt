import { Platform, StyleSheet, Text } from "react-native";
import React from "react";

export default function AppText({ children, style }) {
  return <Text style={[style, styles.text]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
