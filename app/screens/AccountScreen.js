import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import colours from "../config/colours";
import ListItem from "../components/ListItem";
import { Ionicons } from "@expo/vector-icons";

const menuItems = [
  {
    id: 1,
    title: "Phone",
    subtitle: "0207 124 7654",
    icon: "call-outline",
    color: colours.secondary,
  },
  {
    id: 2,
    title: "Address",
    subtitle: "72, Graceland Ave",
    icon: "home-outline",
    color: colours.secondary,
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <ListItem
        title="Jane Bonjovi"
        subtitle="jane@bonjovi.com"
        style={styles.listItem}
      />

      <View style={styles.sectionContainer}>
        <FlatList
          style={styles.section}
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              onPress={() => {
                console.log(item);
              }}
            />
          )}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colours.light,
  },
  listItem: {
    backgroundColor: colours.white,
    marginTop: 16,
  },
  section: {},
  sectionContainer: {
    marginTop: 16,
    flex: -1,
    height: 200,
    backgroundColor: colours.white,
  },
});

export default AccountScreen;
