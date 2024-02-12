import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import AppText from "../components/AppText";

import colours from "../config/colours";
import ListItem from "../components/ListItem";

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
        <ListItem image={require("../assets/avatar.jpg")} />
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
});

export default ListingDetailScreen;
