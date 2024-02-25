import { View, Text, TextInput, StyleSheet, Platform } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import Icon from "./Icon";
import colours from "../config/colours";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <Ionicons
          size={20}
          name={icon}
          style={styles.icon}
          color={colours.medium}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.light,
    borderRadius: 24,
    flexDirection: "row",
    width: "100%",
    padding: 16,
    marginVertical: 8,
    alignItems: "center",
  },
  textInput: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
    flex: 1,
    color: colours.dark,
  },
  icon: {
    paddingRight: 16,
  },
});

export default AppTextInput;
