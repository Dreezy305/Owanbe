import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { images, icons } from "../constants";
import {
  COLORS,
  SIZES,
  FontStyles,
  FontWeights,
  TextAlignments,
  TextTransformations,
} from "../constants/color_theme_styles";
import { SelectRegion } from "../data/selectRegion";

export default function HomeScreen({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);

  // RENDERS HEADER
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerName}>Hi, Dunni</Text>

        <TouchableOpacity
          style={styles.notificationBox}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Image
            source={icons.bell}
            resizeMethod="scale"
            resizeMode="contain"
            style={{ paddingRight: 5 }}
          />
          <Text style={styles.signOut}>Sign out</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // RENDER REGIONS FOR SELECTION
  const renderSelectRegion = () => {
    // RENDER FUNCTION FOR FLAST LIST COMPONENT
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => setSelectedId(item.id)}
          style={{
            textAlign: TextAlignments.text_center,
          }}
        >
          <View
            style={{
              padding: 3,
              borderRadius: 24,
              borderWidth: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 10,
              borderColor: COLORS.linearGrad_1,
            }}
          >
            <Image
              source={item.image}
              resizeMethod="scale"
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              fontFamily: "Avenir_Book",
              color: COLORS.DarkBlue,
              fontSize: 12,
              lineHeight: 18,
              alignSelf: "center",
              paddingTop: 3,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.regionContainer}>
        <Text style={styles.region}>Select Region</Text>

        <FlatList
          data={SelectRegion}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 5 }}
        />
      </View>
    );
  };

  // RENDER TODAY OWANBE
  const renderTodayOwanbe = () => {};

  const renderPopularOwanbe = () => {};

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderSelectRegion()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    backgroundColor: COLORS.bg,
    paddingLeft: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  // HEADER SECTION
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerName: {
    fontFamily: "Avenir_Book",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: FontWeights.fw400,
    fontStyle: FontStyles.normal,
    color: COLORS.purple,
  },

  notificationBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
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

  // SELECT REGION
  regionContainer: {
    paddingTop: 30,
  },
  region: {
    fontFamily: "Avenir_Book",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: FontWeights.fw600,
    fontStyle: FontStyles.normal,
    color: COLORS.red,
    paddingBottom: 20,
  },
});

/**
 * --> render header
 * --> render select region
 * --> render today's owanbe
 * --> render popular owanbe
 */
