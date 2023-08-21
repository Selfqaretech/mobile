import { View, Text } from "react-native";
import React from "react";
import { Stack, Slot } from "expo-router";

const OnboardingLayout = () => {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Slot />
    </>
  );
};

export default OnboardingLayout;
