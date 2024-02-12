import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import Card from "../components/Card";

const CardScreen = () => {
  return (
    <View style={styles.page}>
      <SafeAreaView style={styles.container}>
        <Card />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#f8f4f4",
    width: "100%",
    height: "100%",
  },
  container: {},
});

export default CardScreen;
