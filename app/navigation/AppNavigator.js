import React from "react";
import { StyleSheet } from "react-native";

import ListingScreen from "../screens/ListingScreen";
import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import colours from "../config/colours";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colours.primary,
        headerTitleStyle: {
          fontFamily: "Avenir",
        },
      }}
    >
      <Tab.Screen name="Home" component={ListingScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    color: colours.primary,
    backgroundColor: colours.primary,
  },
});
