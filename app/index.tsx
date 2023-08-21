import { View, Text, Alert } from "react-native";
import React, { useMemo } from "react";
import { Link, Stack, router } from "expo-router";
import { CustomButton } from "@src/component/button";
import useCustomTheme from "@src/hooks/useCustomTheme";
import CustomText from "@src/component/text";
import { StatusBar } from "expo-status-bar";
import Spacing from "@src/component/spacing";

const Index = () => {
  const { toggleTheme, theme, reverseMode, updateTheme } = useCustomTheme();

  return (
    <>
      <Stack.Screen options={{ statusBarTranslucent: true }} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background,
        }}
      >
        <CustomText>Index</CustomText>
        <CustomButton
          width={300}
          onPress={() => {
            router.replace("/onboarding");
          }}
        >
          Onboarding
        </CustomButton>
        <Spacing />
        <CustomButton
          width={300}
          onPress={() => {
            router.push("/otp");
          }}
        >
          OTP
        </CustomButton>
        <Spacing />
        <CustomButton
          width={300}
          onPress={() => {
            router.push("/chooselocation");
          }}
        >
          Location
        </CustomButton>
        <CustomButton width={300} type="clear" onPress={toggleTheme}>
          Toggle Theme
        </CustomButton>
      </View>
    </>
  );
};

export default Index;
