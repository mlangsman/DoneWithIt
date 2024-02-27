import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import AppButton from "./AppButton";

const AppPicker = ({ icon, placeholder = "None", ...otherProps }) => {
  const [pickerActive, setPickerActive] = useState(false);
  const press = () => {
    console.log(pickerActive);
    setPickerActive(!pickerActive);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setPickerActive(true)}>
        <View style={styles.container}>
          {icon && (
            <Ionicons
              size={20}
              name={icon}
              style={styles.icon}
              color={defaultStyles.colours.medium}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          {icon && (
            <Ionicons
              size={20}
              name="chevron-down-outline"
              color={defaultStyles.colours.medium}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={pickerActive} animationType="slide" onPress={press}>
        <Screen style={styles.modal}>
          <AppText>Blah</AppText>
          <AppButton onPress={() => setPickerActive(false)} title="Close" />
        </Screen>
      </Modal>
    </>
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
  text: {
    flex: 1, // Expand text so chevron sits on right edge
  },
  icon: {
    paddingRight: 16,
  },
  modal: {
    backgroundColor: defaultStyles.colours.white,
    paddingHorizontal: 16,
    paddingTop: 24,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    shadowOffset: -10,
    shadowColor: "lightgrey",
    shadowOpacity: 50,
  },
});

export default AppPicker;
