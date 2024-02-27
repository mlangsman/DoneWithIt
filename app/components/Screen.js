import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Constants from "expo-constants";

export default function Screen({ style, children }) {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
  },
});
