import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LoginScreen from "../screens/loginScreen";

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SignUpScreen" component={SignUpScreen} />
      <Tab.Screen name="LoginScreen" component={LoginScreen} />
    </Tab.Navigator>
  );
}
