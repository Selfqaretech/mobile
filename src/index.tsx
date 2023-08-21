import { View, Text, ViewProps } from "react-native";
import React from "react";
import { container } from "./styles/container";
import { useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";

const Index = (props: ViewProps) => {
  const { theme } = useTheme();
  return (
    <View
      onLayout={props.onLayout}
      style={[
        container.main,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      {props.children}
    </View>
  );
};

export default Index;
