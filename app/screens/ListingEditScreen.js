import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";

const validationScheme = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().positive().label("Price"),
  description: Yup.string().required().label("Description"),
});

const ListingEditScreen = () => {
  return (
    <Screen style={styles.screen}>
      <AppForm
        validationSchema={validationScheme}
        onSubmit={(values) => console.log(values)}
        initialValues={{ title: "", price: "", description: "" }}
      >
        <AppFormField
          name="title"
          autoCapitalize="words"
          autoCorrect={false}
          icon=""
          keyboardType="default"
          placeholder="Title"
        />
        <AppFormField
          name="price"
          autoCapitalize="none"
          autoCorrect={false}
          icon=""
          keyboardType="numeric"
          placeholder="Price"
        />
        <AppFormPicker name="category" />
        <AppFormField
          name="description"
          autoCapitalize="none"
          autoCorrect={false}
          icon=""
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 24,
  },
});
