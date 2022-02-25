import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextAlignments } from "../constants/color_theme_styles";
import { images } from "../constants";

// contains the splash screen

export default function Owanbe({ navigation }) {
  const imgArray = [
    images.owanbe_white,
    images.owanbe_black,
    images.owanbe_red,
  ];

  setTimeout(() => {
    navigation.navigate("OnBoarding");
  }, 4000);

  return (
    <View style={styles.container}>
      <Image
        source={images.owanbe_white}
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
