import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { images, icons } from "../constants";
import {
  COLORS,
  TextAlignments,
  FontWeights,
} from "../constants/color_theme_styles";
import AppIntroSlider from "react-native-app-intro-slider";

export default function onBoarding({ navigation }) {
  const [count, setCount] = useState(0);
  // const [toggleText, setToggleText] = useState(0);

  const slides = [
    {
      key: "one",
      title: "",
      text: "Explore",
      image: images.explore,
      backgroundColor: "",
    },
    {
      key: "two",
      title: "",
      text: "Discover",
      image: images.discover,
      backgroundColor: "",
    },
    {
      key: "three",
      title: "",
      text: "Party Like No Other",
      image: images.party,
      backgroundColor: "",
    },
  ];

  const switchBG = () => {
    if (count < slides.length - 1) {
      setCount(count + 1);
    } else if (count == slides.length - 1) {
      setCount(slides.length - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={slides[count].image}
        resizeMode="cover"
        resizeMethod="scale"
        style={styles.image}
      >
        <Text style={styles.Text}>{slides[count].text}</Text>

        <View style={styles.NextContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={switchBG} style={styles.Touch}>
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
  container: { flex: 1 },
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
    fontFamily: "Avenir_Black",
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
  Next: { color: COLORS.white, fontSize: 18, fontFamily: "Roboto_Light" },
  NextIcon: {
    width: 20,
    height: 20,
    paddingTop: 20,
  },
  Touch: {
    display: "flex",
    flexDirection: "row",
    alignItems: TextAlignments.text_center,
  },
  PrevContainer: {},
  Prev: {},
  PrevIcon: {},
});
