import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";

const PickerItem = ({ label, onPress, icon, colour }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    paddingVertical: 8,
  },
});
