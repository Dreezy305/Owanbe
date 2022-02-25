import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FONTS } from "./constants/color_theme_styles";
import { useFonts } from "expo-font";
import Owanbe from "./screens/owanbe";
import onBoarding from "./screens/onBoarding";
import Auth from "./screens/auth";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts(FONTS);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Owanbe}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoarding"
          component={onBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
