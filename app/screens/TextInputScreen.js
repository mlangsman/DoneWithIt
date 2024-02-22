import { StyleSheet, Text, View, TextInput } from "react-native";
import { React, useState } from "react";
import Screen from "../components/Screen";

import colours from "../config/colours";

const TextInputScreen = () => {
  const [firstName, setFirstName] = useState("");
  console.log(firstName);
  return (
    <Screen style={styles.screen}>
      <TextInput
        style={styles.textInput}
        placeholder="First name"
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
  },
  textInput: {
    borderBottomColor: colours.light,
    padding: 16,
    borderBottomWidth: 1,
  },
});
