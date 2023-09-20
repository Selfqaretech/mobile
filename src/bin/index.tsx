import { View } from "react-native";
import React from "react";
import { Link,  } from "expo-router";
import { CustomButton } from "@src/component/button";
import useCustomTheme from "@src/hooks/useCustomTheme";
import CustomText from "@src/component/text";
import Spacing from "@src/component/spacing";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  const { toggleTheme, theme, reverseMode } = useCustomTheme();

  return (
    <>
      <StatusBar style={reverseMode} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background,
        }}
      >
        <CustomText>Index</CustomText>
        <Link href={"/onboarding"} asChild>
          <CustomButton width={300}>Onboarding</CustomButton>
        </Link>
        <Spacing />
        <Link href="/otp" asChild>
          <CustomButton width={300}>OTP</CustomButton>
        </Link>
        <Spacing />
        <Link href="/chooselocation" asChild>
          <CustomButton width={300}>Location</CustomButton>
        </Link>
        <Spacing />
        <Link href="/(main)/(home)/home" asChild>
          <CustomButton width={300}>Index</CustomButton>
        </Link>
        <Spacing />
        <Link href="/(main)/(home)/details" asChild>
          <CustomButton width={300}>Details</CustomButton>
        </Link>
        <Spacing />

        <CustomButton width={300} type="clear" onPress={toggleTheme}>
          Toggle Theme
        </CustomButton>
      </View>
    </>
  );
};

export default Index;
