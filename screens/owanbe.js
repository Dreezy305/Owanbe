import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextAlignments } from "../constants/color_theme_styles";
import { images, icons } from "../constants";

// contains the splash screen
export default function Owanbe({ navigation }) {
  const [currentImage, setCurrentImage] = useState(0);

  const imgArray = [
    images.owanbe_white,
    images.owanbe_black,
    images.owanbe_red,
  ];

  const switchImage = () => {
    if (currentImage < imgArray.length) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setInterval(switchImage, 2000);

    setTimeout(() => {
      navigation.navigate("LoginScreen");
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={imgArray[currentImage]}
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
