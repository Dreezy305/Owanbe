import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  TextAlignments,
  COLORS,
  SIZES,
  FontWeights,
  FontStyles,
  TextTransformations,
} from "../constants/color_theme_styles";

export default function Button({
  title = "",
  onPress = () => {},
  image = true || false,
  BorderRadius = Number,
  src = "",
  backgroundColor = "",
  Color = "",
  height = Number,
}) {
  return (
    <TouchableOpacity
      style={{
        ...styles.Button,
        borderRadius: BorderRadius || 12,
        backgroundColor: backgroundColor,
        color: Color,
        height: height || 60,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          padding: 20,
          color: COLORS.white,
          fontFamily: "Avenir_Book",
          fontWeight: FontWeights.fw600,
          fontSize: 16,
          lineHeight: 19,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    textAlign: TextAlignments.text_center,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,
  },
});
