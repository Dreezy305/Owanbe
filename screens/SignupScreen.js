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

export default function Scrn() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 50,
          //   borderTopLeftRadius: 28,
          //   borderTopRightRadius: 28,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            // marginBottom: 20,
            backgroundColor: COLORS.red,
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            elevation: 1,
            shadowColor: COLORS.purple,
            shadowRadius: 1,
            shadowOffset: 1,
          }}
        >
          <Text style={{}}>SIGN UP</Text>
          <Text style={{}}>SIGN IN</Text>
        </View>

        <View
          style={{
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor: "#000",
          }}
        >
          <Text>Hello</Text>
        </View>
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
