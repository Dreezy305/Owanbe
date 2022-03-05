import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  TextAlignments,
  COLORS,
  FontStyles,
  FontWeights,
} from "../constants/color_theme_styles";
import { images, icons } from "../constants";
import React from "react";

export default function AvailableOwanbe() {
  return (
    <View>
      <TouchableOpacity></TouchableOpacity>
      <TouchableOpacity style={styles.notificationBox}>
        <Image
          source={icons.bell}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ paddingRight: 5 }}
        />
        <Text style={styles.signOut}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: TextAlignments.text_center,
  },
});
