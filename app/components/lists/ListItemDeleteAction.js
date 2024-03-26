import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import colours from "../../config/colours";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name="trash-outline" size={35} color={colours.white} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.destructive,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default ListItemDeleteAction;
