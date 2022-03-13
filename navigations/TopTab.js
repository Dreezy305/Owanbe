import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LoginScreen from "../screens/loginScreen";
import SignUpScreen from "../screens/SignupScreen";
import {
  COLORS,
  FontWeights,
  FontStyles,
} from "../constants/color_theme_styles";

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: COLORS.red, paddingVertical: 5 },
        swipeEnabled: false,
      }}
      keyboardDismissMode="auto"
      style={{ fontFamily: "Avenir_Roman" }}
    >
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          tabBarLabel: "SIGN IN",
          tabBarItemStyle: { fontFamily: "Avenir_Roman" },
          tabBarLabelStyle: {
            fontFamily: "Avenir_Roman",
            fontSize: 18,
            lineHeight: 18,
            color: COLORS.white,
            fontWeight: FontWeights.fw600,
          },
        }}
      />

      <Tab.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          tabBarLabel: "SIGN UP",
          tabBarItemStyle: { fontFamily: "Avenir_Roman" },
          tabBarLabelStyle: {
            fontFamily: "Avenir_Roman",
            fontSize: 18,
            lineHeight: 18,
            color: COLORS.white,
            fontWeight: FontWeights.fw600,
          },
        }}
      />
    </Tab.Navigator>
  );
}
