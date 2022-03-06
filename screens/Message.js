import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import {
  TextAlignments,
  COLORS,
  FontStyles,
  FontWeights,
  SIZES,
} from "../constants/color_theme_styles";
import { images, icons } from "../constants";
import MessageHead from "../components /MessageComponents/MessageHead";
import MessageInput from "../components /MessageComponents/MessageInput";
import MessageList from "../components /MessageComponents/MessageList";

export default function MessagePartner({ navigation }) {
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <MessageHead />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    backgroundColor: COLORS.bg,
    // paddingLeft: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
});
