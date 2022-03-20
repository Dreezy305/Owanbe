import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/home";
import React from "react";
import Tabs from "./Tabs";
import MyAccScreen from "../screens/MyAcc";
import MyFavScreen from "../screens/MyFavs";
import PubAccessScreen from "../screens/PublicAccess";

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={Tabs}
        options={{ headerShown: false }}
      />
      {/* <Drawer.Screen
        name="Help"
        component={<></>}
      /> */}
    </Drawer.Navigator>
  );
}
