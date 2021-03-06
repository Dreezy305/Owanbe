import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import {
  TextAlignments,
  COLORS,
  FontStyles,
  FontWeights,
  SIZES,
} from "../constants/color_theme_styles";
import { images, icons } from "../constants";
import { parties } from "../data/selectRegion";

export default function AvailableOwanbe({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            source={icons.arrow_back}
            resizeMethod="scale"
            resizeMode="contain"
            style={{ paddingRight: 10 }}
          />
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.notificationBox}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Image
            source={icons.bell}
            resizeMethod="scale"
            resizeMode="contain"
            style={{ paddingRight: 10 }}
          />
          <Text style={styles.signOut}>Sign out</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderAvailableOwanbe = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={styles.thumbnailContainer}
          onPress={() => navigation.navigate("SingleOwanble")}
        >
          <Image
            source={item.image}
            resizeMethod="scale"
            resizeMode="contain"
            style={{ paddingRight: 30 }}
          />
          <View
            style={{
              marginLeft: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.headline}>{item.headline}</Text>
            <Text style={styles.abb}>{item.abb}</Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.availableContainer}>
        <Text style={styles.city}>Lagos</Text>
        <Text style={styles.OwanbeAvailable}>??w??nb?? available</Text>

        <FlatList
          data={parties}
          horizontal={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginBottom: 20 }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderAvailableOwanbe()}
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

  // HEADER
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: TextAlignments.text_center,
  },
  backContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  notificationBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: TextAlignments.text_center,
  },
  signOut: {
    fontFamily: "Avenir_Book",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: FontWeights.fw400,
    fontStyle: FontStyles.normal,
    color: COLORS.DarkBlue,
    paddingLeft: 10,
  },
  back: {
    fontFamily: "Avenir_Book",
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.red,
    fontWeight: FontWeights.fw400,
    fontStyle: FontStyles.normal,
    paddingLeft: 10,
  },

  //   AVAILABLE
  availableContainer: {
    marginTop: 40,
  },

  city: {
    fontFamily: "Avenir_Book",
    fontSize: 18,
    lineHeight: 22,
    color: COLORS.red,
    fontWeight: FontWeights.fw600,
    fontStyle: FontStyles.normal,
    paddingBottom: 20,
  },

  OwanbeAvailable: {
    fontFamily: "Avenir_Black",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: FontWeights.fw800,
    fontStyle: FontStyles.normal,
    color: COLORS.DarkBlue,
    marginBottom: 10,
  },

  // RENDER ITEM --> OWANBE AVAILABLE
  thumbnailContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: TextAlignments.text_center,
    marginVertical: 15,
  },
  headline: {
    fontFamily: "Avenir_Roman",
    fontSize: 15,
    lineHeight: 20,
    color: COLORS.purple,
    fontWeight: FontWeights.fw400,
    fontStyle: FontStyles.normal,
    marginVertical: 5,
  },
  abb: {
    fontFamily: "Avenir_Roman",
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.red,
    fontWeight: FontWeights.fw400,
    fontStyle: FontStyles.normal,
  },
});
