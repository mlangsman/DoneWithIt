import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, style, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <Ionicons
          size={20}
          name={icon}
          style={styles.icon}
          color={defaultStyles.colours.medium}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colours.medium}
        style={[defaultStyles.text, styles.textInput, style]}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colours.light,
    borderRadius: 24,
    flexDirection: "row",
    padding: 16,
    marginVertical: 8,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
  },
  icon: {
    paddingRight: 16,
  },
});

export default AppTextInput;
