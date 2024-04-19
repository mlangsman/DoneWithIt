import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/FormPicker";

const validationScheme = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().required().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Item 1", value: 1 },
  { label: "Item 2", value: 2 },
  { label: "Item 3", value: 3 },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.screen}>
      <AppForm
        validationSchema={validationScheme}
        onSubmit={(values) => console.log(values)}
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
      >
        <AppFormField
          name="title"
          maxLength={255}
          autoCapitalize="words"
          autoCorrect={false}
          icon=""
          keyboardType="default"
          placeholder="Title"
        />
        <AppFormField
          name="price"
          maxLength={8}
          icon=""
          keyboardType="numeric"
          placeholder="Price"
        />
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Category"
        />
        <AppFormField
          name="description"
          autoCapitalize="none"
          autoCorrect={false}
          icon=""
          placeholder="Description"
          maxLength={8}
          multiline
          numberOfLines={3}
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
