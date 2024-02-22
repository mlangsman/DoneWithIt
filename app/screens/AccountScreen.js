import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import colours from "../config/colours";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "Phone",
    subtitle: "0207 124 7654",
    icon: "call-outline",
    color: colours.primary,
  },
  {
    title: "Address",
    subtitle: "72, Graceland Ave",
    icon: "home-outline",
    color: colours.secondary,
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <ListItem
        title="Jane Bonjovi"
        subtitle="jane@bonjovi.com"
        style={styles.listItem}
        image={require("../assets/avatar2.jpg")}
      />

      <View style={styles.sectionContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={item.subtitle}
              IconComponent={
                <Icon name={item.icon} backgroundColor={item.color} />
              }
              onPress={() => {
                console.log(item);
              }}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colours.light,
  },
  listItem: {
    backgroundColor: colours.white,
    marginTop: 16,
  },
  sectionContainer: {
    marginTop: 16,
    flex: -1,
    backgroundColor: colours.white,
  },
});

export default AccountScreen;
