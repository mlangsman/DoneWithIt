import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

const categories = [
  {
    label: "Item 1",
    value: 1,
  },
  {
    label: "Item 2",
    value: 2,
  },
  {
    label: "Item 3",
    value: 3,
  },
];

const AppFormPicker = ({ name }) => {
  const { setFieldTouched, handleChange, touched, errors } = useFormikContext();

  return (
    <>
      <AppPicker items={categories} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
