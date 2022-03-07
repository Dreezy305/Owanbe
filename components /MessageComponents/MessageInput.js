import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { images, icons } from "../../constants";
import {
  COLORS,
  SIZES,
  FontStyles,
  FontWeights,
  TextAlignments,
  TextTransformations,
} from "../../constants/color_theme_styles";

export default function MessageInput() {
  const [msg, setMsg] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput
        placeholder="Type here"
        style={{ ...styles.TextInput }}
        placeholderTextColor={COLORS.purple}
        selectTextOnFocus
        allowFontScaling
        autoCapitalize="none"
        value={msg}
        onChangeText={setMsg}
      />
      <Image />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.red,
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "rgba(220, 220, 220, 0.25)",
    fontFamily: "Avenir_Roman",
  },
});
