import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FONTS } from "./constants/color_theme_styles";
import { useFonts } from "expo-font";
import Owanbe from "./screens/owanbe";
import onBoarding from "./screens/onBoarding";
import Login from "./screens/loginScreen";

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
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
