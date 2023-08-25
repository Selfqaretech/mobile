import { View } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import { CustomButton } from "@src/component/button";
import useCustomTheme from "@src/hooks/useCustomTheme";
import CustomText from "@src/component/text";
import Spacing from "@src/component/spacing";

const Index = () => {
  const { toggleTheme, theme } = useCustomTheme();

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
            router.push("/onboarding");
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
        <Spacing />
        <CustomButton width={300} type="clear" onPress={toggleTheme}>
          Toggle Theme
        </CustomButton>
      </View>
    </>
  );
};

export default Index;
