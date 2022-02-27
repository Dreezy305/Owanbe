import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import OrganizeScreen from "../screens/organize";
import ChatScreen from "../screens/chat";
import MenuScreen from "../screens/menu";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Organize"
        component={OrganizeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
