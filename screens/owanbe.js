import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextAlignments } from "../constants/color_theme_styles";
import { images } from "../constants";

export default function Owanbe() {
  return (
    <View style={styles.container}>
      <Image
        source={images.owanbe_red}
        resizeMethod="scale"
        resizeMode="contain"
        style={styles.imgStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: TextAlignments.text_center,
    justifyContent: "center",
  },

  imgStyle: {
    padding: 20,
    width: 350,
    height: 350,
  },
});
