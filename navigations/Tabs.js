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
    <Tab.Navigator tabBar={}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="OrganizeScreen" component={OrganizeScreen} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="MenuScreen" component={MenuScreen} />
    </Tab.Navigator>
  );
}
