import useCustomTheme from "@src/hooks/useCustomTheme";
import useThemeAsyncStore from "@src/hooks/useThemeAsyncStore";
import { useCallback, useMemo, useRef } from "react";
import { Alert, Appearance } from "react-native";

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

export default ChooseTheme;
