import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FONTS } from "./constants/color_theme_styles";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts(FONTS);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Avenir_Book", fontSize: 30 }}>Owambe</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
