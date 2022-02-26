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
import { SelectRegion, TodayOwanbe, PopularOwanbe } from "../data/selectRegion";

export default function HomeScreen({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const [todayId, setTodayId] = useState(null);
  const [popularId, setPopularId] = useState(null);

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
          onPress={() => {
            setSelectedId(item.id);
            console.log(selectedId);
          }}
          style={{
            textAlign: TextAlignments.text_center,
          }}
        >
          <View style={styles.renderImageBox}>
            <Image
              source={item.image}
              resizeMethod="scale"
              resizeMode="contain"
            />
          </View>
          <Text style={styles.renderName}>{item.name}</Text>
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
  const renderTodayOwanbe = () => {
    // RENDER FUNCTION FOR FLAST LIST COMPONENT
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => setTodayId(item.id)}
          style={{
            textAlign: TextAlignments.text_center,
          }}
        >
          <View style={{ marginEnd: 20 }}>
            <Image
              source={item.image}
              resizeMethod="scale"
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.regionContainer}>
        <Text style={styles.explore}>Explore today's Ówànbè</Text>

        <FlatList
          data={TodayOwanbe}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
      </View>
    );
  };

  const renderPopularOwanbe = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => setPopularId(item.id)}
          style={{
            borderRadius: 16,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
            maxWidth: "75%",
          }}
        >
          <View style={{ paddingVertical: 5 }}>
            <Image
              source={item.image}
              resizeMethod="scale"
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Avenir_Roman",
                fontSize: 14,
                lineHeight: 20,
                color: COLORS.blue,
                fontStyle: FontStyles.normal,
                paddingVertical: 5,
              }}
            >
              {item.venue}
            </Text>
            <Text
              style={{
                fontFamily: "Avenir_Roman",
                fontSize: 14,
                lineHeight: 20,
                color: COLORS.DarkBlue,
                fontStyle: FontStyles.normal,
                paddingVertical: 5,
              }}
            >
              {item.headline}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.regionContainer}>
        <View style={styles.popularContainer}>
          <Text style={styles.popular}>Popular Ówànbè</Text>
          <Text style={styles.more}>More</Text>
        </View>

        {/* FLATLIST */}
        <FlatList
          data={PopularOwanbe}
          horizontal={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 5 }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderSelectRegion()}
      {renderTodayOwanbe()}
      {renderPopularOwanbe()}
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
    alignItems: TextAlignments.text_center,
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

  // SELECT REGION
  regionContainer: {
    paddingTop: 30,
  },
  region: {
    fontFamily: "Avenir_Roman",
    fontSize: 19,
    lineHeight: 22,
    fontWeight: FontWeights.fw600,
    fontStyle: FontStyles.normal,
    color: COLORS.red,
    paddingBottom: 20,
  },
  renderImageBox: {
    padding: 3,
    borderRadius: 24,
    borderWidth: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: TextAlignments.text_center,
    marginEnd: 10,
    borderColor: COLORS.linearGrad_1,
  },
  renderName: {
    fontFamily: "Avenir_Book",
    color: COLORS.DarkBlue,
    fontSize: 12,
    lineHeight: 18,
    alignSelf: TextAlignments.text_center,
    paddingTop: 3,
  },

  // EXPLORE TODAY OWANBE
  explore: {
    fontFamily: "Avenir_Black",
    fontSize: 20,
    lineHeight: 22,
    fontWeight: FontWeights.fw800,
    fontStyle: FontStyles.normal,
    color: COLORS.purple,
  },

  // POPULAR OWANBE
  popularContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  popular: {
    fontFamily: "Avenir_Roman",
    fontSize: 20,
    lineHeight: 24,
    color: COLORS.linearGrad_1,
    fontStyle: FontStyles.normal,
    fontWeight: FontWeights.fw400,
  },
  more: {
    fontFamily: "Avenir_Roman",
    fontWeight: FontWeights.fw500,
    color: COLORS.red,
    fontSize: 14,
    lineHeight: 19,
    fontStyle: FontStyles.normal,
  },
});

/**
 * --> render header --> done
 * --> render select region --> done
 * --> render today's owanbe --> done
 * --> render popular owanbe
 */
