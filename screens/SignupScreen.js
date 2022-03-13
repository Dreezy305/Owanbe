import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import {
  SIZES,
  TextAlignments,
  COLORS,
  FontWeights,
  FontStyles,
  TextTransformations,
} from "../constants/color_theme_styles";
import { icons, images } from "../constants";

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={images.owanbe_red}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ width: 240, height: 150 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    backgroundColor: COLORS.bg,
    // paddingLeft: 20,
    // paddingHorizontal: 20,
    // paddingTop: 30,
  },
  topImageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: TextAlignments.text_center,
    margin: "auto",
  },
});
