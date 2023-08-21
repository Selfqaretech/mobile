import { View, Text } from "react-native";
import React from "react";
import { MotiView } from "moti";
import useCustomTheme from "@src/hooks/useCustomTheme";

const ThrobbingWrapper = (props: {
  pulses?: number;
  children?: React.ReactElement;
}) => {
  const { theme } = useCustomTheme();
  const SIZE = 70;
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: SIZE * 1.5,
        width: SIZE * 1.5,
      }}
    >
      {[...Array(props.pulses || 3).keys()].map((_, index) => (
        <MotiView
          key={index}
          from={{
            opacity: 1,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 1.5,
          }}
          transition={{
            duration: 2000,
            delay: index * 600,
            repeatReverse: false,
            loop: true,
            type: "timing",
          }}
          style={{
            position: "absolute",
            height: SIZE,
            width: SIZE,
            backgroundColor: theme.colors.primary,
            borderRadius: SIZE / 2,
          }}
        />
      ))}
      <View
        style={{
          position: "absolute",
          height: SIZE,
          width: SIZE,
          backgroundColor: theme.colors.primary,
          borderRadius: SIZE / 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

export default ThrobbingWrapper;
