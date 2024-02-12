import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import AppText from "./AppText";

import colours from "../config/colours";

const Card = ({ title = "Title", subTitle = "Subtitle", image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={image} resizeMode="cover" />
      <View style={styles.content}>
        <AppText style={styles.headerText}>{title}</AppText>
        <AppText style={styles.priceText}>{subTitle}</AppText>
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
    flexBasis: 200,
    width: null,
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
