import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  width,
  height,
};

export const COLORS = {
  red: "#E20000",
  purple: "#19235B",
  white: "#fff",
  offPurple: "#D9DFEB",
  bg: "#E5E5E5",
  DarkBlue: "#2D4379",
  linearGrad_1: "#0D253C",
  linearGrad_2: "#49B0E2",
  blue: "#376AED",
  lightBlue: "#03A9F1",
  lightBrown: "#F18303",
};

export const FONTS = {
  Roboto_Black: require("../assets/fonts/Roboto/Roboto-Black.ttf"),
  Roboto_Bold: require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
  Roboto_Light: require("../assets/fonts/Roboto/Roboto-Light.ttf"),
  Roboto_Medium: require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
  Roboto_Thin: require("../assets/fonts/Roboto/Roboto-Thin.ttf"),
  Avenir_Black: require("../assets/fonts/Avenir-Font/avenir_ff/AvenirLTStd-Black.otf"),
  Avenir_Book: require("../assets/fonts/Avenir-Font/avenir_ff/AvenirLTStd-Book.otf"),
  Avenir_Roman: require("../assets/fonts/Avenir-Font/avenir_ff/AvenirLTStd-Roman.otf"),
};

export const FontStyles = { normal: "normal", italic: "italic" };

export const FontWeights = {
  fwNormal: "normal",
  fwBold: "bold",
  fw100: "100",
  fw200: "200",
  fw300: "300",
  fw400: "400",
  fw500: "500",
  fw600: "600",
  fw700: "700",
  fw800: "800",
  fw900: "900",
};

export const TextAlignments = {
  text_auto: "auto",
  text_left: "left",
  text_right: "right",
  text_center: "center",
  text_justify: "justify",
};

export const TextDecorationLines = {
  none: "none",
  underline: "underline",
  line_through: "line-through",
  underline_linethrough: "underline line-through",
};

export const TextDecorationStyles = {
  solid: "solid",
  double: "double",
  dotted: "dotted",
  dashed: "dashed",
};

export const TextTransformations = {
  text_none: "none",
  text_uppercase: "uppercase",
  text_lowercase: "lowercase",
  text_capitalize: "capitalize",
};

export const TextAlignmentsVertical = {
  auto: "auto",
  top: "top",
  bottom: "bottom",
  center: "center",
};
