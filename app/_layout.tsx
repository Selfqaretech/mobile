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
import React, { useCallback } from "react";
import { ThemeProvider } from "@rneui/themed";
import { theme } from "@src/theme/main";
import Index from "../src";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import ChooseTheme from "@src/component/wrappers/Theme";

import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from "@tanstack/react-query";
import { AppStateStatus } from "react-native";
import { Platform } from "react-native";
import { useAppState } from "@src/hooks/tanstack/useAppState";
import { useOnlineManager } from "@src/hooks/tanstack/useOnlineManager";
import { SessionProvider } from "@src/component/wrappers/Auth/ctx";

SplashScreen.preventAutoHideAsync();

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
  useAppState(onAppStateChange);
  useOnlineManager();

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
    <SessionProvider>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Index onLayout={onLayoutRootView}>
              <Slot initialRouteName="/(auth)" />
              <ChooseTheme />
            </Index>
          </QueryClientProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </SessionProvider>
  );
}
