import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import Card from "../components/Card";

const CardScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Card></Card>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});

export default CardScreen;
