import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  COLORS,
  SIZES,
  TextAlignments,
  FontWeights,
} from "../constants/color_theme_styles";
import { images } from "../constants";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={images.owanbe_red}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ width: 240, height: 240 }}
        />
      </View>
      <View style={styles.loginCard}>
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>Welcome back</Text>
          <Text style={styles.signIn}>Sign in with your account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    display: "flex",
    flexDirection: "column",
    alignItems: TextAlignments.text_center,
  },
  topImageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: TextAlignments.text_center,
    margin: "auto",
  },
  loginCard: {
    width: "100%",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.red,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    flex: 1,
  },
  textContainer: {
    textAlign: TextAlignments.text_left,
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  welcome: {
    fontFamily: "Avenir_Black",
    fontWeight: FontWeights.fw800,
    fontSize: 24,
    lineHeight: 32,
    color: COLORS.purple,
    paddingBottom: 10,
  },
  signIn: {},
});
