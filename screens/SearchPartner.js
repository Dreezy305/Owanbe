import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from "react-native";
import {
  TextAlignments,
  COLORS,
  FontStyles,
  FontWeights,
  SIZES,
} from "../constants/color_theme_styles";
import { images, icons } from "../constants";

export default function SearchPartner() {
  return (
    <SafeAreaView>
      <Text>SearchPartner</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
  },
});
