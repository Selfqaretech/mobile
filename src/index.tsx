import { View, ViewProps } from "react-native";
import React, { useMemo } from "react";
import { container } from "./styles/container";

import {
  ThemeProvider as RNThemeProvider,
  DarkTheme,
  DefaultTheme,
  // useTheme,
} from "@react-navigation/native";
import useCustomTheme from "./hooks/useCustomTheme";
import { useGetUserQuery } from "./api/auth";
const Index: React.FC<ViewProps> = (props) => {
  const { mode, theme } = useCustomTheme();

  const {} = useGetUserQuery();

  const CustomThemeObject = useMemo(() => {
    return {
      primary: theme.colors.primary,
      background: theme.colors.background,
      card: theme.colors.paper,
      text: theme.colors.textPrimary,
      border: theme.colors.divider,
      notification: theme.colors.warning,
    };
  }, [theme]);

  const CustomDarkTheme = useMemo(() => {
    return {
      ...DarkTheme,
      ...CustomThemeObject,
    };
  }, [CustomThemeObject, DarkTheme]);

  const CustomDefaultTheme = useMemo(() => {
    return {
      ...DefaultTheme,
      ...CustomThemeObject,
    };
  }, [CustomThemeObject, DefaultTheme]);

  return (
    <RNThemeProvider
      value={mode === "light" ? CustomDefaultTheme : CustomDarkTheme}
    >
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
    </RNThemeProvider>
  );
};

export default Index;
