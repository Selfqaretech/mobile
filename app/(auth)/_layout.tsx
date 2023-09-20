import React, { useEffect } from "react";
import { Stack, router } from "expo-router";
import useCustomTheme from "@src/hooks/useCustomTheme";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Location } from "iconsax-react-native";
import CustomText from "@src/component/text";
import { useSession } from "@src/component/wrappers/Auth/ctx";

const Layout = () => {
  const { theme } = useCustomTheme();
  const { top } = useSafeAreaInsets();

  const { isLoggedIn, isLoading } = useSession() || {};

  useEffect(() => {
    if (isLoggedIn && !isLoading) {
      router.replace("/(main)/(home)/home");
    }
  }, [isLoggedIn, isLoading]);

  if (isLoading) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        statusBarTranslucent: false,
        header: () => (
          <View
            style={{
              padding: 16,
              paddingTop: 16 + top,
              backgroundColor: theme.colors.paper,
              gap: 8,
              flexDirection: "row",
            }}
          >
            <Location variant="Bold" color={theme.colors.textPrimary} />
            <CustomText>Location Rd, Port Harcourt</CustomText>
          </View>
        ),
      }}
    />
  );
};

export default Layout;
