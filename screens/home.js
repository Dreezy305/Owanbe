import { View, Text, StyleSheet } from "react-native";
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
        <View>
          <Text></Text>
        </View>
        <View></View>
      </View>
    );
  };

  const renderSelectRegion = () => {};

  const renderTodayOwanbe = () => {};

  const renderPopularOwanbe = () => {};

  return (
    <View style={styles.container}>
      <Text>home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    backgroundColor: COLORS.bg,
    paddingLeft: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

/**
 * --> render header
 * --> render select region
 * --> render today's owanbe
 * --> render popular owanbe
 */
