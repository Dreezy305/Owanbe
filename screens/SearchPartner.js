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

export default function SearchPartner({ navigation }) {
  const [show, setShow] = useState(false);

  const loader = () => {
    setShow(true);
  };

  useEffect(() => {
    setTimeout(loader, 300);
    setTimeout(() => {
      navigation.navigate("PotentialPartners");
    }, 10000);
    clearTimeout(loader);
  }, [loader]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.party}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.loaderBox}>
          {show && (
            <ActivityIndicator
              size="large"
              color={COLORS.white}
              style={{
                alignSelf: TextAlignments.text_center,
                marginVertical: 10,
                width: 50,
                height: 50,
              }}
            />
          )}
          <Text style={{ ...styles.text, marginVertical: 10 }}>
            Searching for partners
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: TextAlignments.text_center,
  },
  loaderBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: COLORS.white,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: FontWeights.fw700,
    textAlign: TextAlignments.text_center,
  },
});
