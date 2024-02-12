import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return <View style={styles.card}></View>;
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    backgroundColor: "black",
    height: 200,
    marginHorizontal: 16,
    marginVertical: 16,
  },
});
