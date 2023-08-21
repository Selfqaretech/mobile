import {
  useFonts as unboundedUseFonts,
  Unbounded_500Medium,
  Unbounded_700Bold,
} from "@expo-google-fonts/unbounded";
import {
  useFonts as urbanistUseFonts,
  Urbanist_500Medium,
  Urbanist_700Bold,
} from "@expo-google-fonts/urbanist";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { ThemeProvider } from "@rneui/themed";
import { theme } from "@src/theme/main";
import Index from "../src";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot, Stack } from "expo-router";
import { Alert, Appearance } from "react-native";
import useCustomTheme from "@src/hooks/useCustomTheme";
import useThemeAsyncStore from "@src/hooks/useThemeAsyncStore";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [unboundedFontsLoaded, unboundedFontError] = unboundedUseFonts({
    Unbounded_500Medium,
    Unbounded_700Bold,
  });
  const [urbanistFontsLoaded, urbanistFontError] = urbanistUseFonts({
    Urbanist_500Medium,
    Urbanist_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (
      (unboundedFontsLoaded && urbanistFontsLoaded) ||
      unboundedFontError ||
      urbanistFontError
    ) {
      await SplashScreen.hideAsync();
    }
  }, [unboundedFontsLoaded, urbanistFontsLoaded]);

  if (
    !(unboundedFontsLoaded && urbanistFontsLoaded) &&
    !unboundedFontError &&
    !urbanistFontError
  )
    return null;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Index onLayout={onLayoutRootView}>
          <Stack
            screenOptions={{ headerShown: false, statusBarTranslucent: true }}
          />
          <ChooseTheme />
        </Index>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const ChooseTheme = () => {
  const { setTheme, theme } = useCustomTheme();
  const { getTheme, storeTheme, hasStoredTheme } = useThemeAsyncStore();

  const firstPass = useRef(true);

  useMemo(async () => {
    if (!(await hasStoredTheme())) {
      Alert.alert(
        "Choose Theme",
        "What theme  mode would you like to use on the app?.",
        [
          {
            text: "Light",
            onPress: async () => {
              Appearance.setColorScheme("light");
              setTheme("light");
              await storeTheme("light");
            },
          },
          {
            text: "Dark",
            onPress: async () => {
              Appearance.setColorScheme("dark");
              setTheme("dark");
              await storeTheme("dark");
            },
          },
          {
            text: "System Default",
            onPress: async () => {
              const systemThemeMode = Appearance.getColorScheme();
              setTheme(systemThemeMode || "light");
              await storeTheme("default");
            },
          },
        ]
      );
    } else {
      const storedThemeMode = await getTheme();
      const systemThemeMode = Appearance.getColorScheme();
      console.log(
        storedThemeMode,
        "STRORED THEME MODE>>>",
        systemThemeMode,
        "SYSTEM THEME >>>"
      );
      setTheme(
        storedThemeMode === "default"
          ? systemThemeMode || "light"
          : storedThemeMode
      );
      if (storedThemeMode !== "default") {
        Appearance.setColorScheme(storedThemeMode);
      }
    }
  }, []);

  useCallback(async () => {
    if (!firstPass.current) {
      Appearance.setColorScheme(theme.mode);
      await storeTheme(theme.mode);
    }
    firstPass.current = false;
  }, [theme.mode])();

  return null;
};
