import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import AppText from "./Text";

import colours from "../config/colours";

const Card = ({ title = "Title", subTitle = "Subtitle", image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={image} resizeMode="cover" />
      <View style={styles.content}>
        <AppText style={styles.headerText} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.priceText} numberOfLines={1}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 16,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
    flexDirection: "row",
  },
  content: {
    padding: 16,
    rowGap: 4,
  },
  headerText: {
    fontWeight: "800",
  },
  priceText: {
    fontWeight: "800",
    color: colours.secondary,
  },
});

export default Card;
