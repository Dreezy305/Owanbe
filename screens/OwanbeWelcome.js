import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Animated,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import { images, icons } from "../constants";
import {
  COLORS,
  TextAlignments,
  FontWeights,
  SIZES,
} from "../constants/color_theme_styles";
// import Onboarding from "react-native-onboarding-swiper";

export default function OwanbeWelcome({ navigation }) {
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
        <View style={styles.NextContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={styles.Touch}
              onPress={() => navigation.replace("Login")}
            >
              <Text style={styles.Next}>Next</Text>
              <Image
                style={styles.NextIcon}
                source={icons.arrow_forwardLight}
                resizeMethod="scale"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: TextAlignments.text_center,
    position: "relative",
  },
  Text: {
    color: COLORS.white,
    textAlign: TextAlignments.text_center,
    fontSize: 26,
    lineHeight: 31,
    fontFamily: "Roboto_Light",
    fontWeight: FontWeights.fw400,
    fontStyle: FontWeights.fwNormal,
  },
  NextContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  PrevContainer: {},
  Next: { color: COLORS.white, fontSize: 18, fontFamily: "Roboto_Light" },
  NextIcon: {
    width: 20,
    height: 20,
    paddingTop: 10,
  },
  Touch: {
    display: "flex",
    flexDirection: "row",
    alignItems: TextAlignments.text_center,
  },
});
