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
          style={{ borderRadius: 10, marginVertical: 5 }}
        />
        <Image
          source={images.party_dancer}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ borderRadius: 10, marginVertical: 5 }}
        />
        <Image
          source={images.bride}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ marginVertical: 5 }}
        />
      </View>
    );
  };

  const renderWeddingDetails = () => {
    return (
      <View style={styles.weddingCard}>
        <View style={styles.hubby_and_wife}>
          <Text>ADEJOBI WEDS RONKE</Text>
          <Text>ADERO 2022</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {renderGallery()}
      {renderWeddingDetails()}
    </>
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
    marginVertical: 20,
  },

  //   WEDDING DETAILS
  weddingCard: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    width: "100%",
  },

  hubby_and_wife: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 40,
  },
});
