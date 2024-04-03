import { StyleSheet, Text, View, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { useNavigation } from "@react-navigation/native";

const validationScheme = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const navigation = useNavigation();

  const loginHandler = (values) => {
    console.log(values);
    navigation.navigate("AppNavigator");
  };

  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={loginHandler}
        validationSchema={validationScheme}
      >
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

        <SubmitButton title="Login" />
      </AppForm>
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
