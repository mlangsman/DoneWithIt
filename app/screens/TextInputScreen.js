import { StyleSheet, Text, View, TextInput, Switch } from "react-native";
import { React, useState } from "react";

import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import colours from "../config/colours";
import AppPicker from "../components/AppPicker";

const TextInputScreen = () => {
  const [switchValue, setSwitchValue] = useState(true);
  const [firstName, setFirstName] = useState("");

  console.log(firstName);
  console.log(switchValue);

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
      <AppPicker icon="mail-outline" placeholder="Email" />
      <Switch
        value={switchValue}
        onValueChange={(value) => setSwitchValue(value)}
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
    borderBottomColor: colours.light,
    padding: 16,
    borderBottomWidth: 1,
  },
});
