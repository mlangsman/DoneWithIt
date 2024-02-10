import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Image,
  Button,
  Platform,
  StatusBar,
  useWindowDimensions,
} from "react-native";

import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  console.log(useDeviceOrientation());

  const height = {
    height: useDeviceOrientation() === "landscape" ? "100%" : "50%",
  };

  const handlePress = () => {
    console.log("wee");
  };
  let x = 1;
  x.toString();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, height]}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "100%",
    height: "30%",
  },
});
