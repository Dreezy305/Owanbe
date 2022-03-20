import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import {
  TextAlignments,
  COLORS,
  FontStyles,
  FontWeights,
} from "../constants/color_theme_styles";

export default function MyAccScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          textAlign: TextAlignments.text_center,
          fontFamily: "Avenir_Black",
          fontWeight: FontWeights.fw900,
          color: COLORS.lightBrown,
          fontSize: 30,
          lineHeight: 30,
        }}
      >
        Coming Soon
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: TextAlignments.text_center,
  },
});
