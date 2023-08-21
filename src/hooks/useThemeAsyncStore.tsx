import { useCallback } from "react";
import * as SecureStore from "expo-secure-store";

type StoredTheme = "light" | "dark" | "default";
const themeStoreKey = "selfqare-the-mode";

const useThemeAsyncStore = () => {
  const storeTheme = async (mode: StoredTheme): Promise<void> => {
    try {
      await SecureStore.setItemAsync(themeStoreKey, mode);
    } catch (e) {
      console.log("Store Theme Error - ", e);
    }
  };
  const getTheme = async (): Promise<StoredTheme> => {
    try {
      return (
        ((await SecureStore.getItemAsync(
          themeStoreKey
        )) as StoredTheme | null) || "default"
      );
    } catch (e) {
      console.log("Fetch Stored Theme Error - ", e);
      return "light";
    }
  };

  const hasStoredTheme = useCallback(async (): Promise<boolean> => {
    try {
      const storedThemeMode = (await SecureStore.getItemAsync(
        themeStoreKey
      )) as StoredTheme | null;
      return !!storedThemeMode;
    } catch (e) {
      console.log("Check Stored Theme Error - ", e);
      return false;
    }
  }, []);

  return {
    storeTheme,
    getTheme,
    hasStoredTheme,
  };
};

export default useThemeAsyncStore;
