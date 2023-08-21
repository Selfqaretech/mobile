import { View, Text } from "react-native";
import React from "react";
import Trial from "@src/screens/Trial";
import { StatusBar } from "expo-status-bar";
import useCustomTheme from "@src/hooks/useCustomTheme";
import { Stack } from "expo-router";

const TestPage = () => {
  const { reverseMode } = useCustomTheme();
  return (
    <>
      <Stack.Screen
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Trial />
    </>
  );
};

export default TestPage;
