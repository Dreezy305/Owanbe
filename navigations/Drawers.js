import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import HomeScreen from "../screens/home";
import React from "react";
import Tabs from "./Tabs";
import MyAccScreen from "../screens/MyAcc";
import MyFavScreen from "../screens/MyFavs";
import { icons, images } from "../constants";
import {
  TextAlignments,
  COLORS,
  FontWeights,
  FontStyles,
} from "../constants/color_theme_styles";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1, marginTop: 0 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ height: "40%" }}>
          <ImageBackground
            source={images.DrawerBg}
            resizeMode="cover"
            resizeMethod="scale"
            style={{ height: "100%", justifyContent: "center" }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
              }}
            >
              <Image
                source={images.DrawerAvatar}
                resizeMethod="scale"
                resizeMode="contain"
                style={{ paddingVertical: 30 }}
              />
              <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                <Image
                  source={icons.close_square}
                  resizeMethod="scale"
                  resizeMode="contain"
                  style={{ paddingVertical: 30 }}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem label={""} />
      </DrawerContentScrollView>
      <View
        style={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: "#f6f6f6",
          padding: 20,
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <Image
            source={icons.nearest}
            resizeMethod="scale"
            resizeMode="contain"
            style={{ width: 20 }}
          />
          <Text
            style={{
              flexGrow: 1,
              color: "rgba(0, 0, 0, 0.87)",
              fontFamily: "Avenir_Black",
              fontSize: 14,
              fontWeight: FontWeights.fw800,
              fontStyle: FontStyles.normal,
              background: "rgba(226, 0, 0, 0.2)",
              paddingLeft: 30,
            }}
          >
            Nearest Ówànbè
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
          <Image
            source={icons.nearest}
            resizeMethod="scale"
            resizeMode="contain"
            style={{ width: 20 }}
          />
          <Text
            style={{
              flexGrow: 1,
              color: "rgba(0, 0, 0, 0.87)",
              fontFamily: "Avenir_Black",
              fontSize: 14,
              fontWeight: FontWeights.fw800,
              fontStyle: FontStyles.normal,
              background: "rgba(226, 0, 0, 0.2)",
              paddingLeft: 30,
            }}
          >
            Public access
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function DrawerScreen({ navigation }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return <CustomDrawerContent {...props} />;
      }}
      screenOptions={{ swipeEnabled: true, keyboardDismissMode: "none" }}
    >
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
          drawerActiveBackgroundColor: { backgroundColor: COLORS.red },
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
                  source={icons.bag}
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
                  source={icons.myFavs}
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
    </Drawer.Navigator>
  );
}
