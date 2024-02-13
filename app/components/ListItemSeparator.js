import { View, StyleSheet } from "react-native";
import React from "react";

import colours from "../config/colours";

export default function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginVertical: 8,
    width: "100%",
    backgroundColor: colours.light,
  },
});
