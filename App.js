import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FONTS } from "./constants/color_theme_styles";
import { useFonts } from "expo-font";
import Owanbe from "./screens/owanbe";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts(FONTS);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Owanbe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
