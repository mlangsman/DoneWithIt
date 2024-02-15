import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import colours from "../config/colours";
import ListItem from "../components/ListItem";
import { Ionicons } from "@expo/vector-icons";

const menuItems = [
  {
    id: 1,
    title: "My Listings",
    icon: "trash-outline",
    color: colours.secondary,
  },
  {
    id: 2,
    title: "My Messages",
    icon: "email",
    color: colours.secondary,
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <ListItem
        title="Jon Bonjovi"
        subtitle="jon@bonjovi.com"
        style={styles.listItem}
      />

      <FlatList
        style={styles.section}
        data={menuItems}
        keyExtractor={(menuItem) => menuItem.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            onPress={() => {
              console.log(item);
            }}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colours.light,
  },
  listItem: {
    backgroundColor: colours.white,
  },
  section: {
    backgroundColor: colours.white,
  },
});

export default AccountScreen;
