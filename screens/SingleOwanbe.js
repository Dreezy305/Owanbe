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

export default function SingleOwanbe({ navigation }) {
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
          style={{ borderRadius: 10, marginVertical: 25 }}
        />
        <Image
          source={images.party_dancer}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ borderRadius: 10, marginVertical: 25 }}
        />
        <Image
          source={images.bride}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ marginVertical: 25 }}
        />
      </View>
    );
  };

  const renderWeddingDetails = () => {
    return (
      <View style={styles.weddingCard}>
        <View style={styles.hubby_and_wife}>
          <Text style={styles.headline}>ADEJOBI WEDS RONKE</Text>
          <Text style={styles.abb}>ADERO 2022</Text>

          <Text style={styles.weddingAnnouncement}>
            Adejobi and Ronke weds today, join them in celebrating their happy
            matrimony.
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 100,
            }}
          >
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Image
                source={icons.arrow_back}
                resizeMethod="scale"
                resizeMode="contain"
                style={{ paddingRight: 10 }}
              />
              <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("TagPartner")}
            >
              <Text style={{ ...styles.back, paddingRight: 10 }}>Next</Text>
              <Image
                source={icons.arrow_forward}
                resizeMethod="scale"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ width: SIZES.width }}>
      {renderGallery()}
      {renderWeddingDetails()}
    </View>
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
  },

  hubby_and_wife: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 40,
    paddingVertical: 20,
  },

  headline: {
    fontFamily: "Avenir_Roman",
    fontSize: 24,
    lineHeight: 32,
    color: COLORS.purple,
    fontWeight: FontWeights.fw400,
    fontStyle: FontStyles.normal,
    marginBottom: 20,
    marginTop: 10,
  },

  abb: {
    fontFamily: "Avenir_Roman",
    fontSize: 18,
    lineHeight: 18,
    color: COLORS.red,
    fontWeight: FontWeights.fw400,
    fontStyle: FontStyles.normal,
  },

  weddingAnnouncement: {
    marginTop: 30,
    color: COLORS.DarkBlue,
    fontFamily: "Avenir_Roman",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "left",
    width: "95%",
    fontStyle: FontStyles.normal,
  },

  //   BACK AND NEXT
  back: {
    fontFamily: "Avenir_Book",
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.red,
    fontWeight: FontWeights.fw400,
    fontStyle: FontStyles.normal,
    paddingLeft: 10,
  },
});
