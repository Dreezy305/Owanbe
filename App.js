import "react-native-gesture-handler";
import React, { useEffect, useState, useMemo, useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FONTS } from "./constants/color_theme_styles";
import { useFonts } from "expo-font";
import Owanbe from "./screens/owanbe";
import LoginScreen from "./screens/loginScreen";
import HomeScreen from "./screens/home";
import OnboardingScreen from "./screens/OnBoardingScreen";
import AvailableOwanbe from "./screens/availableOwanbe";
import SingleOwanbe from "./screens/SingleOwanbe";
import TagPartner from "./screens/tagPartner";
import SearchPartner from "./screens/SearchPartner";
import PotentialPartners from "./screens/PotentialPartners";
import MessagePartner from "./screens/Message";
import Tabs from "./navigations/Tabs";
import OrganizeScreen from "./screens/organize";
import ChatScreen from "./screens/chat";
import MenuScreen from "./screens/menu";
import TopTab from "./navigations/TopTab";
import DrawerScreen from "./navigations/Drawers";
import { AuthContext } from "./contexts/AuthContext";
import { loginReducer, initialState } from "./contexts/AuthReducer";

const Stack = createNativeStackNavigator();

export default function App() {
  const [authState, dispatch] = useReducer(loginReducer, initialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItemAsync("userToken");
      } catch (e) {
        return e;
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  const [loaded] = useFonts(FONTS);

  if (!loaded) {
    return null;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Owanbe}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TopTabBar"
            component={TopTab}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="HomeScreen"
            component={DrawerScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OrganizeScreen"
            component={OrganizeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MenuScreen"
            component={MenuScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AvailableOwanble"
            component={AvailableOwanbe}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SingleOwanble"
            component={SingleOwanbe}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SearchPartner"
            component={SearchPartner}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PotentialPartners"
            component={PotentialPartners}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MessagePartner"
            component={MessagePartner}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
