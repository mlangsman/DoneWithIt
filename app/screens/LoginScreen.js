import { StyleSheet, Text, View, Image } from "react-native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";
import colours from "../config/colours";

const validationScheme = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationScheme}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="mail-outline"
              keyboardType="email-address"
              textContentType="emailAddress"
              placeholder="Email"
              onChangeText={handleChange("email")}
            />
            <AppText style={styles.error}>{errors.email}</AppText>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock-closed-outline"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              onChangeText={handleChange("password")}
            />
            <AppText style={styles.error}>{errors.password}</AppText>
            <AppButton
              buttonType="primary"
              title="Login"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 24,
  },
  logo: {
    resizeMode: "contain",
    height: 80,
    width: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
  error: {
    color: "red",
  },
});
