import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import {
  TextAlignments,
  COLORS,
  FontStyles,
  FontWeights,
  SIZES,
} from "../constants/color_theme_styles";
import { images, icons } from "../constants";

export default function SingleOwanbe() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SingleOwanbe</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // CONTAINER
  container: {
    flex: 1,
    width: SIZES.width,
    backgroundColor: COLORS.bg,
    paddingLeft: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
});
