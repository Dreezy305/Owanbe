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

export default function MessagePartner() {
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <Text>Send Message</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
