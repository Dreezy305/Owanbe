import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
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
      <View>
        <Text>Sign Up screen</Text>
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
});
