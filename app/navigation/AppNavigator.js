import React from "react";

import CardScreen from "../screens/CardScreen";
import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={CardScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
