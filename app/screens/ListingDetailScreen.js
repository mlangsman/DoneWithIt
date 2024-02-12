import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import AppText from "../components/AppText";

import colours from "../config/colours";

const ListingDetailScreen = () => {
  return (
    <View style={styles.page}>
      <Image
        resizeMode="cover"
        style={styles.headerImage}
        source={require("../assets/jacket.jpg")}
      />
      <View style={styles.content}>
        <AppText style={styles.titleText}>Jacket for sale</AppText>
        <AppText style={styles.subtitleText}>£100</AppText>
        <View style={styles.avatarBlock}>
          <Image
            style={styles.avatar}
            source={require("../assets/avatar.jpg")}
          />
          <View style={styles.avatarMeta}>
            <AppText style={styles.metaTitleText}>User Name</AppText>
            <AppText style={styles.metaSubtitleText}>5 Listings</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: -1,
    rowGap: 8,
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  headerImage: {
    flex: -1,
    width: null,
    height: "38%",
  },
  titleText: {
    fontWeight: "800",
    fontSize: 18,
  },
  subtitleText: {
    fontSize: 16,
    color: colours.secondary,
    fontWeight: "800",
  },
  avatarBlock: {
    marginTop: 32,
    flex: -1,
    flexDirection: "row",

    alignItems: "center",
    columnGap: 16,
  },
  avatar: {
    height: null,
    borderRadius: 1000,
    width: 50,
    height: 50,
  },
  avatarMeta: {},
  metaTitleText: {
    fontWeight: "600",
    fontSize: 14,
  },
  metaSubtitleText: {
    color: "grey",
  },
});

export default ListingDetailScreen;
