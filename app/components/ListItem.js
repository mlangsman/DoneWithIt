import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from "./AppText";

const ListItem = ({ image, title = "Title", subtitle = "Subtitle" }) => {
  return (
    <View style={styles.listItem}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.metaTitleText}>{title}</AppText>
        <AppText style={styles.metaSubtitleText}>{subtitle}</AppText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    marginTop: 32,
    flex: -1,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
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
    color: "grey",
  },
});

export default ListItem;
