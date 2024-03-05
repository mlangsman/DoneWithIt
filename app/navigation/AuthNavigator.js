import React from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import AppNavigator from "./AppNavigator";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="AppNavigator"
        component={AppNavigator}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}
