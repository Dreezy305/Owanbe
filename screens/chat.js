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

export default function ChatScreen({ navigation }) {
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
        Chats
      </Text>
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

  headline: {
    fontFamily: "Avenir_Book",
    fontSize: 20,
    lineHeight: 20,
    color: COLORS.red,
    fontWeight: FontWeights.fw600,
    fontStyle: FontStyles.normal,
    letterSpacing: 1,
    textTransform: TextTransformations.text_capitalize,
  },
});
