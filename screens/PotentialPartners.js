import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import {
  SIZES,
  TextAlignments,
  COLORS,
  FontWeights,
  FontStyles,
  TextTransformations,
} from "../constants/color_theme_styles";
import { icons, images } from "../constants";
import { Partners } from "../data/selectRegion";

export default function PotentialPartners({ navigation }) {
  const Back = () => {
    return (
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: TextAlignments.text_center,
        }}
        onPress={() => navigation.navigate("SingleOwanble")}
      >
        <Image
          source={icons.arrow_back}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ paddingRight: 10 }}
        />
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
    );
  };

  const ParterTypes = () => {
    return (
      <View style={styles.partnerContainer}>
        <TouchableOpacity
          style={{ ...styles.types, backgroundColor: COLORS.lightBlue }}
        >
          <Text style={styles.types_text}>new partner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.types,
            backgroundColor: COLORS.lightBrown,
            marginLeft: 10,
            // alignSelf: "flex-end",
            flexGrow: 1,
          }}
        >
          <Text style={styles.types_text}>existing partner</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Potentials = () => {
    const renderItem = ({ item }) => {
      return (
        <View style={styles.potentialContainer}>
          <View style={styles.avatar_text}>
            <Image source={item.image} />
            <Text style={styles.potentialName}>{item.name}</Text>
          </View>
          <View style={styles.potentialActionBox}>
            <TouchableOpacity
              style={{
                ...styles.common,
                backgroundColor: `${
                  item.status === "Offline" ? COLORS.purple : COLORS.red
                }`,
              }}
              onPress={() => navigation.navigate("MessagePartner")}
            >
              <Text
                style={{
                  ...styles.actionTexts,
                  color: COLORS.white,
                  textAlign: TextAlignments.text_center,
                  paddingHorizontal: 10,
                }}
              >
                Chat
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.common,
                backgroundColor: `${
                  item.status === "Offline" ? COLORS.ash : COLORS.purple
                }`,
                flexGrow: 1,
                marginHorizontal: 15,
              }}
            >
              <Text
                style={{
                  ...styles.actionTexts,
                  color: COLORS.white,
                  textAlign: TextAlignments.text_center,
                  textTransform: TextTransformations.text_capitalize,
                }}
              >
                {item.status}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.common,
                borderWidth: 1,
                borderColor: COLORS.lightBrown,
              }}
            >
              <Image
                source={icons.trash}
                resizeMethod="scale"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    };

    return (
      <FlatList
        data={Partners}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {Back()}
      <Text
        style={{
          ...styles.headline,
          paddingVertical: 20,
          textTransform: TextTransformations.text_capitalize,
        }}
      >
        Potential Partners found
      </Text>
      {ParterTypes()}
      {Potentials()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // CONTAINER
  container: {
    flex: 1,
    width: SIZES.width,
    backgroundColor: COLORS.bg,
    paddingLeft: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  back: {
    fontFamily: "Avenir_Book",
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.red,
    fontWeight: FontWeights.fw400,
    fontStyle: FontStyles.normal,
    paddingLeft: 10,
    paddingTop: 3,
  },

  //   POTENTIAL PARTNERS FOUND
  headline: {
    fontFamily: "Avenir_Book",
    fontSize: 20,
    lineHeight: 20,
    color: COLORS.red,
    fontWeight: FontWeights.fw600,
    fontStyle: FontStyles.normal,
    letterSpacing: 1,
  },

  //   PARTNER TYPE
  partnerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: TextAlignments.text_center,
    marginTop: 1,
  },
  types: {
    borderRadius: 10,
    padding: 15,
  },
  types_text: {
    fontFamily: "Avenir_Book",
    color: COLORS.white,
    fontWeight: FontWeights.fw600,
    letterSpacing: 1,
    fontSize: 15,
    lineHeight: 18,
    paddingHorizontal: 10,
    textAlign: TextAlignments.text_center,
  },

  //   POTENTIALS
  potentialContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },

  potentialName: {
    fontFamily: "Avenir_Roman",
    fontWeight: FontWeights.fw600,
    fontSize: 18,
    lineHeight: 22,
    color: COLORS.purple,
    textTransform: TextTransformations.text_capitalize,
  },

  avatar_text: {
    display: "flex",
    flexDirection: "row",
    alignItems: TextAlignments.text_center,
    justifyContent: "space-between",
    marginBottom: 15,
  },
  potentialActionBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: TextAlignments.text_center,
  },

  common: {
    borderRadius: 10,
    padding: 15,
  },

  actionTexts: {
    fontFamily: "Avenir_Roman",
    fontWeight: FontWeights.fw600,
    fontSize: 15,
    lineHeight: 18,
  },
});
