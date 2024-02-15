import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import Card from "../components/Card";

const CardScreen = () => {
  return (
    <View style={styles.page}>
      <SafeAreaView style={styles.container}>
        <Card
          title="Jacket for sale"
          subTitle="£100"
          image={require("../assets/jacket.jpg")}
        />
        <Card
          title="Jacket for sale"
          subTitle="£100"
          image={require("../assets/jacket.jpg")}
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
