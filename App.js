import "react-native-gesture-handler";
import React, { useEffect, useState, useMemo, useReducer } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [authState, dispatch] = useReducer(loginReducer, initialState);

  const authContext = useMemo(
    () => ({
      signIn: () => {
        setIsLoading(false);
        setUserToken("abc");
        console.log("signin");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
        console.log("signout");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("abc");
        console.log("signup");
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
        {userToken !== null ? (
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={Tabs}
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
            <Stack.Screen
              name="TopTabBar"
              component={TopTab}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
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
          </Stack.Navigator>
        )}
        {/* <Stack.Navigator></Stack.Navigator> */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
