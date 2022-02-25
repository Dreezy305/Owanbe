import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React, { useState } from "react";
import { images } from "../constants";
import {
  COLORS,
  TextAlignments,
  FontWeights,
} from "../constants/color_theme_styles";
import AppIntroSlider from "react-native-app-intro-slider";

export default function onBoarding() {
  const [showApp, setShowApp] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.explore}
        resizeMode="cover"
        resizeMethod="scale"
        style={styles.image}
      >
        <Text style={styles.Text}>Explore</Text>
        <View></View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: TextAlignments.text_center,
  },
  Text: {
    color: COLORS.white,
    textAlign: TextAlignments.text_center,
    fontSize: 26,
    lineHeight: 31,
    fontFamily: "Avenir_Black",
    fontWeight: FontWeights.fw400,
    fontStyle: FontWeights.fwNormal,
  },
  buttonContainer: {},
  button: {},
});
