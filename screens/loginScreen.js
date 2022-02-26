import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SIZES, TextAlignments } from "../constants/color_theme_styles";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>auth</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    justifyContent: TextAlignments.text_center,
  },
});
