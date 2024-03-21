import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const RegisterUserScreen = () => {
  return (
    <Screen style={styles.screen}>
      <AppForm
        onSubmit={(values) => console.log(values)}
        initialValues={{ email: "", password: "", name: "" }}
      >
        <AppFormField
          name="name"
          autoCapitalize="words"
          autoCorrect={false}
          icon="person-outline"
          keyboardType="default"
          textContentType="name"
          placeholder="Name"
        />
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="mail-outline"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Email"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock-closed-outline"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

export default RegisterUserScreen;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 24,
  },
});
