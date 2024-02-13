import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";

import AppText from "./AppText";
import colours from "../config/colours";

const ListItem = ({
  image,
  title = "Title",
  subtitle = "Subtitle",
  onPress,
}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colours.light}>
      <View style={styles.listItem}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.metaTitleText}>{title}</AppText>
          <AppText style={styles.metaSubtitleText}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
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
});

export default ListItem;
