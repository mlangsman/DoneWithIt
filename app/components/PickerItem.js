import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./Text";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    paddingVertical: 8,
  },
});
