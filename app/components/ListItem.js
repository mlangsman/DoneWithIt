import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from "./AppText";

const ListItem = () => {
  return (
    <View style={styles.listItem}>
      <Image style={styles.image} source={require("../assets/avatar.jpg")} />
      <View>
        <AppText style={styles.metaTitleText}>User Name</AppText>
        <AppText style={styles.metaSubtitleText}>5 Listings</AppText>
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
    borderRadius: 1000,
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
