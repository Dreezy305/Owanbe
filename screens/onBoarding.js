import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Animated,
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

export default function onBoarding() {
  const [showApp, setShowApp] = useState(false);

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

  const renderAnimation = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment={"center"}
      >
        {slides.map((item) => (
          <View style={styles.container} key={item.key}>
            <ImageBackground
              source={item.image}
              resizeMode="contain"
              resizeMethod="resize"
              style={styles.image}
            >
              <Text style={styles.Text}>{item.text}</Text>
              <View style={styles.NextContainer}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.Next}>Next</Text>
                  <Image
                    style={styles.NextIcon}
                    source={icons.arrow_forwardLight}
                    resizeMethod="scale"
                    resizeMode="contain"
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </Animated.ScrollView>
    );
  };

  return (
    <>{renderAnimation()}</>
    // <View style={styles.container}>
    //   <ImageBackground
    //     source={images.explore}
    //     resizeMode="cover"
    //     resizeMethod="scale"
    //     style={styles.image}
    //   >
    //     <Text style={styles.Text}>Explore</Text>
    //     <View style={styles.NextContainer}>
    //       <View
    //         style={{
    //           display: "flex",
    //           flexDirection: "row",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Text style={styles.Next}>Next</Text>
    //         <Image
    //           style={styles.NextIcon}
    //           source={icons.arrow_forwardLight}
    //           resizeMethod="scale"
    //           resizeMode="contain"
    //         />
    //       </View>
    //     </View>
    //   </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
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
  PrevContainer: {},
  Next: { color: COLORS.white, fontSize: 18, fontFamily: "Roboto_Light" },
  NextIcon: {
    width: 20,
    height: 20,
    paddingTop: 20,
  },
});
