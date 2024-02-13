import { View, StyleSheet } from "react-native";
import React from "react";

import colours from "../config/colours";

export default function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    marginLeft: 16,
    backgroundColor: colours.light,
  },
});
