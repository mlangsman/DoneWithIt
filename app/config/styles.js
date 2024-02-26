import { Platform } from "react-native";
import colours from "./colours";

export default {
  colours,
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 14,
    color: colours.dark,
  },
};
