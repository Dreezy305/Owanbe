import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  SIZES,
  TextAlignments,
  COLORS,
  FontWeights,
  FontStyles,
  TextTransformations,
} from "../constants/color_theme_styles";
import { icons } from "../constants";
import React from "react";

export default function PotentialPartners({ navigation }) {
  const Back = () => {
    return (
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: TextAlignments.text_center,
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
    );
  };

  const ParterTypes = () => {
    return (
      <View style={styles.partnerContainer}>
        <TouchableOpacity
          style={{ ...styles.types, backgroundColor: COLORS.lightBlue }}
        >
          <Text style={styles.types_text}>new partner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.types,
            backgroundColor: COLORS.lightBrown,
            marginLeft: 20,
          }}
        >
          <Text style={styles.types_text}>existing partner</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Potentials = () => {};

  return (
    <SafeAreaView style={styles.container}>
      {Back()}
      <Text
        style={{
          ...styles.headline,
          paddingVertical: 20,
          textTransform: TextTransformations.text_capitalize,
        }}
      >
        Potential Partners found
      </Text>
      {ParterTypes()}
    </SafeAreaView>
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

  back: {
    fontFamily: "Avenir_Book",
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.red,
    fontWeight: FontWeights.fw400,
    fontStyle: FontStyles.normal,
    paddingLeft: 10,
    paddingTop: 3,
  },

  //   POTENTIAL PARTNERS FOUND
  headline: {
    fontFamily: "Avenir_Book",
    fontSize: 20,
    lineHeight: 20,
    color: COLORS.red,
    fontWeight: FontWeights.fw600,
    fontStyle: FontStyles.normal,
    letterSpacing: 1,
  },

  //   PARTNER TYPE
  partnerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: TextAlignments.text_center,
    // justifyContent: "space-around",
    marginTop: 20,
  },
  types: {
    borderRadius: 10,
    padding: 15,
  },
  types_text: {
    fontFamily: "Avenir_Book",
    color: COLORS.white,
    fontWeight: FontWeights.fw600,
    letterSpacing: 1,
    fontSize: 15,
    lineHeight: 18,
    paddingHorizontal: 10,
  },
});
