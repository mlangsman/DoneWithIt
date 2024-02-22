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
    <View style={[styles(size, backgroundColor).icon]}>
      <Ionicons name={name} size={size / 2} color={color} />
    </View>
  );
};

const styles = (size, backgroundColor) =>
  StyleSheet.create({
    icon: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: size / 2,
      width: size,
      height: size,
      backgroundColor: backgroundColor,
    },
  });

export default Icon;
