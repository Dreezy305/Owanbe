import { NavigationContainer } from "@react-navigation/native";
import { FONTS } from "./constants/color_theme_styles";
import { useFonts } from "expo-font";
import Owanbe from "./screens/owanbe";

export default function App() {
  const [loaded] = useFonts(FONTS);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Owanbe />
    </>
  );
}
