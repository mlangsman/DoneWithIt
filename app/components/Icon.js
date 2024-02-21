import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import colours from "../config/colours";

const Icon = ({
  name,
  size = 50,
  backgroundColor = colours.primary,
  color = colours.white,
}) => {
  return (
    <View style={[styles(size).icon, { backgroundColor: backgroundColor }]}>
      <Ionicons name={name} size={size / 2} color={color} />
    </View>
  );
};

const styles = (size) =>
  StyleSheet.create({
    icon: {
      justifyContent: "center",
      alignItems: "center",
      height: null,
      borderRadius: size / 2,
      width: size,
      height: size,
    },
  });

export default Icon;
