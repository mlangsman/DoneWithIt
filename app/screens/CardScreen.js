import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import Card from "../components/Card";

const CardScreen = () => {
  return (
    <View style={styles.page}>
      <SafeAreaView style={styles.container}>
        <Card
          title="Classic Account"
          subTitle="£1,376"
          image={require("../assets/bankcard.jpg")}
        />
        <Card
          title="Mortgage"
          subTitle="£100,000"
          image={require("../assets/bankcard.jpg")}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#f8f4f4",
    width: "100%",
  },
  container: {
    marginTop: 16,
  },
});

export default CardScreen;
