import { useCallback, useMemo } from "react";
import { useTheme } from "@rneui/themed";

const useCustomTheme = () => {
  const themeObj = useTheme();

  const toggleTheme = useCallback(() => {
    themeObj.updateTheme({
      mode: themeObj.theme.mode === "light" ? "dark" : "light",
    });
  }, [themeObj.theme]);

  const reverseMode: "light" | "dark" = useMemo(
    () => (themeObj.theme.mode === "dark" ? "light" : "dark"),
    [themeObj.theme]
  );

  const setTheme = useCallback((mode: "light" | "dark") => {
    themeObj.updateTheme?.({
      mode,
    });
  }, []);

  return {
    ...themeObj,
    toggleTheme,
    mode: themeObj.theme.mode,
    reverseMode,
    setTheme,
  };
};

export default useCustomTheme;
