import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { FontAwesome } from "@expo/vector-icons";
import { images, icons } from "../../constants";
import {
  COLORS,
  SIZES,
  FontStyles,
  FontWeights,
  TextAlignments,
  TextTransformations,
} from "../../constants/color_theme_styles";

export default function MessageInput() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello, would you be interested in joining me for a party?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: images.avatar2,
        },
      },
      {
        _id: 2,
        text: "Hello",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: images.logo,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: COLORS.red,
            borderRadius: 20,
            paddingHorizontal: 20,
            textAlign: TextAlignments.text_center,
          },
          left: {
            backgroundColor: COLORS.purple,
            borderRadius: 20,
            paddingHorizontal: 20,
            textAlign: TextAlignments.text_center,
          },
        }}
        textStyle={{
          right: {
            color: COLORS.white,
            fontFamily: "Avenir_Roman",
            fontWeight: FontWeights.fw400,
            fontSize: 12,
            lineHeight: 14,
            letterSpacing: 1,
          },
          left: {
            color: COLORS.white,
            fontFamily: "Avenir_Roman",
            fontWeight: FontWeights.fw400,
            fontSize: 12,
            lineHeight: 14,
            letterSpacing: 1,
          },
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View
          style={{
            backgroundColor: COLORS.red,
            borderRadius: 10,
            padding: 8,
            marginBottom: 2,
            marginRight: 2,
          }}
        >
          <Image
            source={icons.plane}
            resizeMode="contain"
            resizeMethod="scale"
          />
        </View>
      </Send>
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-down" size={24} color={COLORS.purple} />;
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      isTyping={false}
      loadEarlier
      infiniteScroll
      placeholder="Type a message"
      alwaysShowSend
      showUserAvatar
      renderBubble={renderBubble}
      renderSend={renderSend}
      scrollToBottom
      textInputStyle={{
        fontFamily: "Avenir_Roman",
        color: COLORS.purple,
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: 1,
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        marginRight: 2,
        marginTop: 2,
        paddingLeft: 10,
        borderColor: COLORS.red,
      }}
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
}

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.red,
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "rgba(220, 220, 220, 0.25)",
    fontFamily: "Avenir_Roman",
  },
});
