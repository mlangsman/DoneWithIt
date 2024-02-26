import { StyleSheet, Text, View, TextInput } from "react-native";
import { React, useState } from "react";

import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import colours from "../config/colours";

const TextInputScreen = () => {
  const [firstName, setFirstName] = useState("");
  console.log(firstName);
  return (
    <Screen style={styles.screen}>
      <AppTextInput
        placeholder="Purchase Date"
        icon="calendar-clear-outline"
        clearButtonMode="always"
        onChangeText={(text) => setFirstName(text)}
      />
      <AppTextInput
        placeholder="Card number"
        icon="card-outline"
        clearButtonMode="always"
        onChangeText={(text) => setFirstName(text)}
      />
    </Screen>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colours.white,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  textInput: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
    flex: 1,
    color: colours.dark,
  },
  textInput: {
    borderBottomColor: colours.light,
    padding: 16,
    borderBottomWidth: 1,
  },
});
