import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import {
  TextAlignments,
  COLORS,
  FontStyles,
  FontWeights,
  SIZES,
} from "../../constants/color_theme_styles";
import { images, icons } from "../../constants";

export default function MessageHead() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Image source={images.logo} resizeMethod="scale" resizeMode="contain" />
        <Image
          source={images.avatar2}
          resizeMethod="scale"
          resizeMode="contain"
        />
      </View>
      <View style={styles.rightSide}>
        <Text style={{}}>Onome Rose</Text>
        <Text style={{}}>Dunni Olowu</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: TextAlignments.text_center,
    justifyContent: "space-between",
  },

  leftSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: TextAlignments.text_center,
  },

  rightSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: TextAlignments.text_center,
  },

  text: {},
});
