import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import OrganizeScreen from "../screens/organize";
import ChatScreen from "../screens/chat";
import MenuScreen from "../screens/menu";
import {
  COLORS,
  FONTS,
  FontWeights,
  FontStyles,
} from "../constants/color_theme_styles";
import { icons, images } from "../constants";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = () => {};

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: "Avenir_Roman",
            fontWeight: FontWeights.fw800,
            color: COLORS.purple,
            fontSize: 12,
            lineHeight: 12,
            letterSpacing: 0.12,
            fontStle: FontStyles.normal,
          },
          tabBarIcon: () => {
            return (
              <TouchableOpacity style={{}}>
                <View>
                  <Image
                    source={icons.home}
                    resizeMethod="scale"
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Organize"
        component={OrganizeScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: "Avenir_Roman",
            fontWeight: FontWeights.fw800,
            fontStle: FontStyles.normal,
            color: COLORS.purple,
            fontSize: 12,
            lineHeight: 12,
            letterSpacing: 0.12,
          },
          tabBarIcon: () => {
            return (
              <TouchableOpacity>
                <View>
                  <Image
                    source={icons.chart}
                    resizeMethod="scale"
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: "Avenir_Roman",
            fontWeight: FontWeights.fw800,
            fontStle: FontStyles.normal,
            color: COLORS.purple,
            fontSize: 12,
            lineHeight: 12,
            letterSpacing: 0.12,
          },
          tabBarIcon: () => {
            return (
              <TouchableOpacity>
                <View>
                  <Image
                    source={icons.chat}
                    resizeMethod="scale"
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: "Avenir_Roman",
            fontWeight: FontWeights.fw800,
            fontStle: FontStyles.normal,
            color: COLORS.purple,
            fontSize: 12,
            lineHeight: 12,
            letterSpacing: 0.12,
          },
          tabBarIcon: () => {
            return (
              <TouchableOpacity>
                <View>
                  <Image
                    source={icons.upload}
                    resizeMethod="scale"
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
