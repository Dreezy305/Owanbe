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
}) {
  return (
    <TouchableOpacity
      style={{ ...styles.Button, borderRadius: BorderRadius || 12 }}
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
      {image && (
        <View>
          <Image source={src} resizeMethod="scale" resizeMode="contain" />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    textAlign: TextAlignments.text_center,
    backgroundColor: COLORS.red,
    color: COLORS.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginVertical: 25,
    height: 60,
  },
});
