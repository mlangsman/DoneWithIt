import { StyleSheet, Switch } from "react-native";
import { React, useState } from "react";

import AppTextInput from "../components/TextInput";
import Screen from "../components/Screen";
import colours from "../config/colours";
import AppPicker from "../components/Picker";
import CategoryPickerItem from "../components/CategoryPickerItem";

const categories = [
  {
    label: "Item 1",
    value: 1,
    icon: "call-outline",
  },
  {
    label: "Item 2",
    value: 2,
    icon: "mail-outline",
  },
  {
    label: "Item 3",
    value: 3,
    icon: "mail-outline",
  },
];

const TextInputScreen = () => {
  const [switchValue, setSwitchValue] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [category, setCategory] = useState();

  console.log(firstName);
  console.log(switchValue);

  return (
    <Screen style={styles.screen}>
      <AppTextInput
        placeholder="Purchase Date"
        icon="calendar-clear-outline"
        clearButtonMode="always"
        onChangeText={(text) => setFirstName(text)}
        width="50%"
      />
      <AppTextInput
        placeholder="Card number"
        icon="card-outline"
        clearButtonMode="always"
        onChangeText={(text) => setFirstName(text)}
      />
      <AppPicker
        icon="mail-outline"
        placeholder="Select item"
        PickerItemComponent={CategoryPickerItem}
        items={categories}
        numberOfColumns={3}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        width="50%"
      />
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
