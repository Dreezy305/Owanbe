import { View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import HomeScreen from "../screens/home";
import React from "react";
import Tabs from "./Tabs";
import MyAccScreen from "../screens/MyAcc";
import MyFavScreen from "../screens/MyFavs";
import PubAccessScreen from "../screens/PublicAccess";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        // onPress={() => Linking.openURL("https://mywebsite.com/help")}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={Tabs}
        options={{ headerShown: false, title: "Home" }}
      />
      <Drawer.Screen
        name="My account"
        component={MyAccScreen}
        options={{ headerShown: false, title: "My account" }}
      />
      <Drawer.Screen
        name="My favourites"
        component={MyFavScreen}
        options={{ headerShown: false, title: "My favourites" }}
      />
    </Drawer.Navigator>
  );
}
