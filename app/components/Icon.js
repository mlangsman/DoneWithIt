import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import colours from "../config/colours";

const Icon = ({
  name,
  size = 24,
  backgroundColor = colours.primary,
  color = colours.white,
}) => {
  return (
    <View style={[styles.icon, { backgroundColor: backgroundColor }]}>
      <Ionicons name={name} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
    height: null,
    borderRadius: 25,
    width: 50,
    height: 50,
  },
});

export default Icon;
