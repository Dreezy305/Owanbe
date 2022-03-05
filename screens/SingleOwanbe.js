import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import {
  TextAlignments,
  COLORS,
  FontStyles,
  FontWeights,
  SIZES,
} from "../constants/color_theme_styles";
import { images, icons } from "../constants";

export default function SingleOwanbe() {
  const renderGallery = () => {
    return (
      <View style={styles.gallery}>
        <Image
          source={images.bride}
          resizeMethod="scale"
          resizeMode="contain"
        />
        <Image
          source={images.invitation}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ borderRadius: 10, marginVertical: 10 }}
        />
        <Image
          source={images.party_dancer}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ borderRadius: 10, marginVertical: 10 }}
        />
        <Image
          source={images.bride}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ marginVertical: 10 }}
        />
      </View>
    );
  };

  const renderWeddingDetails = () => {
    return <View></View>;
  };

  return (
    <SafeAreaView style={styles.container}>{renderGallery()}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // CONTAINER
  container: {
    flex: 1,
    width: SIZES.width,
    backgroundColor: COLORS.bg,
    paddingLeft: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  // GALLERY
  gallery: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: TextAlignments.text_center,
  },
});
