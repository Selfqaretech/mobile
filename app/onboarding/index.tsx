import { View } from "react-native";
import React from "react";
import Onboarding from "@src/screens/Onboard";
import useCustomTheme from "@src/hooks/useCustomTheme";
import { Stack } from "expo-router";

const OnboardingPage = () => {
  const { theme } = useCustomTheme();
  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <Stack.Screen
        options={{ headerShown: false, statusBarTranslucent: true }}
      />
      <Onboarding />
    </View>
  );
};

export default OnboardingPage;
