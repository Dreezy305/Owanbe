import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
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
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.party}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.loaderBox}>
          <Image
            source={images.loader}
            resizeMethod="scale"
            resizeMode="contain"
            style={{ alignSelf: "center", marginVertical: 10 }}
          />
          <Text style={{ ...styles.text, marginVertical: 10 }}>
            Searching for partners
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: TextAlignments.text_center,
  },
  loaderBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: COLORS.white,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: FontWeights.fw700,
    textAlign: TextAlignments.text_center,
  },
});
