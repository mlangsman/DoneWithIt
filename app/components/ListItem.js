import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Ionicons } from "@expo/vector-icons";

import colours from "../config/colours";

const ListItem = ({
  image = require("../assets/avatar2.jpg"),
  title = "Title",
  subtitle = "Subtitle",
  onPress,
  renderRightActions,
  style,
  icon,
}) => {
  console.log(icon);
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colours.light}>
        <View style={[styles.listItem, style]}>
          {!icon ? (
            <Image style={styles.image} source={image} />
          ) : (
            <View style={styles.icon}>
              <Ionicons name={icon} size={24} color={colours.white} />
            </View>
          )}

          <View>
            <AppText style={styles.metaTitleText}>{title}</AppText>
            <AppText style={styles.metaSubtitleText}>{subtitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  listItem: {
    flex: -1,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
    padding: 16,
  },
  image: {
    height: null,
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  metaTitleText: {
    fontWeight: "600",
    fontSize: 14,
  },
  metaSubtitleText: {
    color: colours.medium,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    height: null,
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: colours.primary,
  },
});

export default ListItem;
