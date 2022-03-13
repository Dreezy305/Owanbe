import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
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
import { BackHandler } from "react-native";
const Stack = createNativeStackNavigator();

export default function App() {
  const [firstLaunch, setFirstLaunch] = useState(null);

  const [loaded] = useFonts(FONTS);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Drawer"
          component={DrawerScreen}
          options={{ headerShown: false }}
        /> */}
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
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
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
        {/* <Stack.Screen
          name="TagPartner"
          component={TagPartner}
          options={{ headerShown: false }}
        /> */}
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
    </NavigationContainer>
  );
}
