import { View, Text, Image } from "react-native";
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
import { icons } from "../constants";
import {
  TextAlignments,
  COLORS,
  FontWeights,
  FontStyles,
} from "../constants/color_theme_styles";

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
    <Drawer.Navigator screenOptions={{}}>
      <Drawer.Screen
        name="HomeScreen"
        component={Tabs}
        options={{
          headerShown: false,
          title: "Home",
          drawerIcon: ({ props }) => {
            return (
              <View>
                <Image
                  source={icons.home}
                  resizeMethod="scale"
                  resizeMode="contain"
                  style={{ width: 20 }}
                  {...props}
                />
              </View>
            );
          },
          drawerLabelStyle: {
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: "Avenir_Black",
            fontSize: 14,
            fontWeight: FontWeights.fw800,
            fontStyle: FontStyles.normal,
            background: "rgba(226, 0, 0, 0.2)",
          },
        }}
      />
      <Drawer.Screen
        name="My account"
        component={MyAccScreen}
        options={{
          headerShown: false,
          title: "My account",
          drawerIcon: ({ props }) => {
            return (
              <View>
                <Image
                  source={icons.myAcc}
                  resizeMethod="scale"
                  resizeMode="contain"
                  style={{ width: 20 }}
                  {...props}
                />
              </View>
            );
          },
          drawerLabelStyle: {
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: "Avenir_Black",
            fontSize: 14,
            fontWeight: FontWeights.fw800,
            fontStyle: FontStyles.normal,
            background: "rgba(226, 0, 0, 0.2)",
          },
        }}
      />
      <Drawer.Screen
        name="My favourites"
        component={MyFavScreen}
        options={{
          headerShown: false,
          title: "My favourites",
          drawerIcon: ({ props }) => {
            return (
              <View>
                <Image
                  source={icons.home}
                  resizeMethod="scale"
                  resizeMode="contain"
                  style={{ width: 20 }}
                  {...props}
                />
              </View>
            );
          },
          drawerLabelStyle: {
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: "Avenir_Black",
            fontSize: 14,
            fontWeight: FontWeights.fw800,
            fontStyle: FontStyles.normal,
            background: "rgba(226, 0, 0, 0.2)",
          },
        }}
      />

      <Drawer.Screen
        name="PubAccessScreen"
        component={PubAccessScreen}
        options={{
          headerShown: false,
          title: "Public Access",
          drawerIcon: ({ props }) => {
            return (
              <View>
                <Image
                  source={icons.nearest}
                  resizeMethod="scale"
                  resizeMode="contain"
                  {...props}
                  style={{ width: 20 }}
                />
              </View>
            );
          },
          drawerLabelStyle: {
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: "Avenir_Black",
            fontSize: 14,
            fontWeight: FontWeights.fw800,
            fontStyle: FontStyles.normal,
            background: "rgba(226, 0, 0, 0.2)",
          },
        }}
      />
    </Drawer.Navigator>
  );
}
