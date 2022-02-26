import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { images, icons } from "../constants";
import {
  COLORS,
  SIZES,
  FontStyles,
  FontWeights,
  TextAlignments,
  TextTransformations,
} from "../constants/color_theme_styles";

export default function HomeScreen({ navigation }) {
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerName}>Hi, Dunni</Text>

        <TouchableOpacity
          style={styles.notificationBox}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Image
            source={icons.bell}
            resizeMethod="scale"
            resizeMode="contain"
            style={{ paddingRight: 5 }}
          />
          <Text style={styles.signOut}>Sign out</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSelectRegion = () => {};

  const renderTodayOwanbe = () => {};

  const renderPopularOwanbe = () => {};

  return <SafeAreaView style={styles.container}>{renderHeader()}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    backgroundColor: COLORS.bg,
    paddingLeft: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerName: {
    fontFamily: "Avenir_Book",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: FontWeights.fw400,
    fontStyle: FontStyles.normal,
    color: COLORS.purple,
  },

  notificationBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  signOut: {
    fontFamily: "Avenir_Book",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: FontWeights.fw400,
    fontStyle: FontStyles.normal,
    color: COLORS.DarkBlue,
    paddingLeft: 10,
  },
});

/**
 * --> render header
 * --> render select region
 * --> render today's owanbe
 * --> render popular owanbe
 */
