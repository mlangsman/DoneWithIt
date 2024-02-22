import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import React from "react";

import Card from "../components/Card";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Product A",
    subTitle: "£100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Product B",
    subTitle: "£100",
    image: require("../assets/jacket.jpg"),
  },
];

const ListingScreen = () => {
  return (
    <Screen style={styles.page}>
      <FlatList
        style={styles.container}
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
      />
    </Screen>
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

export default ListingScreen;
