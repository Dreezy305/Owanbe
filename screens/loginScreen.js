import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import {
  COLORS,
  SIZES,
  TextAlignments,
  FontWeights,
} from "../constants/color_theme_styles";
import { images } from "../constants";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={images.owanbe_red}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ width: 240, height: 240 }}
        />
      </View>
      <View style={styles.loginCard}>
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>Welcome back</Text>
          <Text style={styles.signIn}>Sign in with your account</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.labelInputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              placeholder=""
              keyboardType="name-phone-pad"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
          </View>
          <View style={styles.labelInputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder=""
              keyboardType="name-phone-pad"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.password}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    display: "flex",
    // flexDirection: "column",
    // alignItems: TextAlignments.text_center,
  },
  topImageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: TextAlignments.text_center,
    margin: "auto",
  },
  loginCard: {
    width: "100%",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.red,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    flex: 1,
  },
  textContainer: {
    textAlign: TextAlignments.text_left,
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  welcome: {
    fontFamily: "Avenir_Black",
    fontWeight: FontWeights.fw800,
    fontSize: 24,
    lineHeight: 32,
    color: COLORS.purple,
    paddingBottom: 10,
  },
  signIn: {
    fontFamily: "Avenir_Book",
    fontSize: 14,
    lineHeight: 18,
    color: COLORS.purple,
    paddingTop: 10,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    // height: "50%",
    backgroundColor: COLORS.white,
  },
  labelInputContainer: {
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  label: {
    fontFamily: "Avenir_Book",
    fontSize: 19,
    lineHeight: 19,
    color: COLORS.purple,
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: COLORS.offPurple,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  password: {
    height: 50,
    borderWidth: 2,
    borderColor: COLORS.red,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
});
