import { View, StyleSheet, Modal } from "react-native";
import React, { useState } from "react";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import AppButton from "./AppButton";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  items,
  onSelectItem,
  selectedItem,
  placeholder = "None",
  ...otherProps
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Ionicons
              size={20}
              name={icon}
              style={styles.icon}
              color={defaultStyles.colours.medium}
            />
          )}
          <AppText
            style={
              selectedItem ? styles.text : [styles.text, styles.placeholder]
            }
          >
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <Ionicons
            size={20}
            name="chevron-down-outline"
            color={defaultStyles.colours.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen style={styles.modal}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          ></FlatList>
          <AppButton onPress={() => setModalVisible(false)} title="Close" />
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
  placeholder: {
    color: defaultStyles.colours.medium,
  },
});

export default AppPicker;
