import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import AppText from "./AppText";

export default class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={require("../assets/jacket.jpg")}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <AppText>Title</AppText>
          <AppText>Price</AppText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    backgroundColor: "white",
    marginHorizontal: 16,
    marginVertical: 16,
    overflow: "hidden",
  },
  cardImage: {
    flexBasis: 200,
    width: null,
    flexDirection: "row",
  },
  content: {
    padding: 16,
    rowGap: 8,
  },
});
