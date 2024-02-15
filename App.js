import "react-native-gesture-handler";

import React from "react";
import { View } from "react-native";
import AuthNavigator from "./app/navigation/AuthNavigator";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
