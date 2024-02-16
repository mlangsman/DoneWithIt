import React from "react";
import { StyleSheet } from "react-native";

import CardScreen from "../screens/CardScreen";
import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import colours from "../config/colours";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: colours.primary }}>
      <Tab.Screen name="Accounts" component={CardScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Settings" component={AccountScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    color: colours.primary,
    backgroundColor: colours.primary,
  },
});
