import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <Ionicons
          size={20}
          name={icon}
          style={styles.icon}
          color={defaultStyles.colours.medium}
        />
      )}
      <TextInput
        style={[defaultStyles.text, styles.textInput]}
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
    width: "100%",
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
