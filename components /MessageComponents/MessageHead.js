import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  TextAlignments,
  COLORS,
  FontStyles,
  FontWeights,
  SIZES,
  TextTransformations,
} from "../../constants/color_theme_styles";
import { images, icons } from "../../constants";

export default function MessageHead() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Image
          source={images.logo}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ marginRight: 4 }}
        />
        <Image
          source={images.avatar2}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ marginLeft: 4 }}
        />
      </View>
      <View style={styles.rightSide}>
        <Text style={{ ...styles.text, color: COLORS.red }}>Onome Rose</Text>
        <Text style={{ ...styles.text, color: COLORS.purple }}>
          Dunni Olowu
        </Text>
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

  text: {
    fontFamily: "Avenir_Roman",
    fontWeight: FontWeights.fw600,
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: 1,
    textTransform: TextTransformations.text_capitalize,
  },
});
