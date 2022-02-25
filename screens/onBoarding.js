import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { images } from "../constants";
import AppIntroSlider from "react-native-app-intro-slider";

export default function onBoarding() {
  const [showApp, setShowApp] = useState(false);

  const slides = [
    {
      key: "one",
      title: "",
      text: "Explore",
      image: images.owanbe_white,
      backgroundColor: "",
    },
    {
      key: "two",
      title: "",
      text: "Discover",
      image: images.owanbe_black,
      backgroundColor: "",
    },
    {
      key: "three",
      title: "Rocket guy",
      text: "Party Like No Other",
      image: images.owanbe_red,
      backgroundColor: "",
    },
  ];

  const onDone = () => {
    setShowApp(true);
  };

  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };

  const renderPrevButton = () => {};

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      renderPrevButton={renderPrevButton}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: "100%",
  },
});
