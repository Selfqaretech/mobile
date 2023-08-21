import { View, Text } from "react-native";
import React from "react";
import { Stack, Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import useCustomTheme from "@src/hooks/useCustomTheme";

const Layout = () => {
  const {} = useCustomTheme();
  return (
    <>
      <Stack.Screen
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Slot />
    </>
  );
};

export default Layout;
