import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { images, icons } from "../constants";

import {
  COLORS,
  TextAlignments,
  FontWeights,
  SIZES,
} from "../constants/color_theme_styles";

const onBoardings = [
  {
    title: "Explore",
    img: images.explore,
  },
  {
    title: "Discover",
    img: images.discover,
  },
  {
    title: "Party Like No Other",
    img: images.party,
  },
];

function Boarding({ navigation }) {
  const [completed, setCompleted] = React.useState(false);

  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    scrollX.addListener(({ value }) => {
      console.log(value);
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  // Render

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {onBoardings.map((item, index) => (
          <View
            //center
            //bottom
            key={`img-${index}`}
            style={styles.imageAndTextContainer}
          >
            <View
              style={{
                flex: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.img}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto_Light",
                  fontSize: 26,
                  color: COLORS.white,
                  lineHeight: 31,
                }}
              >
                {item.title}
              </Text>
            </View>
            {/* Button */}
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                justifyContent: "center",
                marginVertical: 20,
                marginHorizontal: 20,
              }}
              onPress={() => navigation.replace("Login")}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: "Roboto_Light",
                  fontSize: 18,
                  lineHeight: 21,
                }}
              >
                {completed ? "Get Started" : "Skip"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageAndTextContainer: {
    width: SIZES.width,
  },
});

export default Boarding;
