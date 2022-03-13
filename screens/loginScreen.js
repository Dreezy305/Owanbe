import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  COLORS,
  SIZES,
  TextAlignments,
  FontWeights,
  TextDecorationStyles,
  TextDecorationLines,
  TextTransformations,
} from "../constants/color_theme_styles";
import { images, icons } from "../constants";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState("");

  const socials = [
    { id: 1, icon: icons.google },
    { id: 2, icon: icons.facebook },
    { id: 3, icon: icons.twitter },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={images.owanbe_red}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ width: 240, height: 150 }}
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

            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => {
                navigation.replace("HomeScreen");
              }}
            >
              <Text
                style={{
                  padding: 20,
                  color: COLORS.white,
                  fontFamily: "Avenir_Book",
                  fontWeight: FontWeights.fw600,
                  fontSize: 16,
                  lineHeight: 19,
                }}
              >
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.forgotResetContainer}>
            <Text style={styles.forgot}>Forgot your password?</Text>
            <Text style={styles.reset}>Reset here</Text>
          </View>
          <View style={styles.otherOptions}>
            <Text style={styles.signWith}>Or sign in with</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            {socials.map((item, index) => (
              <>
                <Image
                  source={item.icon}
                  key={index}
                  resizeMethod="scale"
                  resizeMode="contain"
                  style={{
                    marginHorizontal: 20,
                    paddingVertical: 3,
                  }}
                />
              </>
            ))}
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
    paddingBottom: 40,
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.red,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    flex: 1,
  },
  loginCardShadow: {
    shadowColor: COLORS.red,
    shadowOffset: { width: 40, height: 40 },
    shadowOpacity: 0.1,
    shadowRadius: 22,
    elevation: 5,
    borderTopColor: COLORS.red,
  },
  textContainer: {
    textAlign: TextAlignments.text_left,
    paddingTop: 40,
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
    paddingTop: 50,
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
  forgotResetContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 10,
    alignItems: TextAlignments.text_center,
    textAlign: TextAlignments.text_center,
  },
  forgot: {
    fontFamily: "Avenir_Book",
    fontSize: 14,
    lineHeight: 19,
    color: COLORS.purple,
    marginRight: 5,
  },
  reset: {
    fontFamily: "Avenir_Book",
    fontSize: 14,
    lineHeight: 19,
    color: COLORS.red,
    marginLeft: 5,
  },
  otherOptions: {
    marginTop: 15,
    alignItems: TextAlignments.text_center,
    textAlign: TextAlignments.text_center,
  },
  signWith: {
    fontFamily: "Avenir_Book",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 1.75,
    textTransform: TextTransformations.text_uppercase,
  },
  signInButton: {
    textAlign: TextAlignments.text_center,
    backgroundColor: COLORS.red,
    color: COLORS.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginVertical: 25,
    height: 60,
  },
  // SIGN IN TAB
  tabContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: TextAlignments.text_center,
    alignItems: TextAlignments.text_center,
    backgroundColor: COLORS.red,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: 20,
  },
  tabContent: {
    fontFamily: "Avenir_Roman",
    fontSize: 18,
    lineHeight: 18,
    fontWeight: FontWeights.fw600,
    paddingTop: 25,
    paddingBottom: 25,
    marginHorizontal: 20,
    color: COLORS.white,
  },
});
