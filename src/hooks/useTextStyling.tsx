import { CustomTextProps } from "@src/@types/text";
import { useTheme } from "@rneui/themed";
import React, { useMemo } from "react";
import { StyleProp, StyleSheet, TextStyle } from "react-native";

const fontSizes = {
  display1: 68,
  display2: 40,
  title1: 30,
  title2: 24,
  title3: 20,
  title4: 16,
  Body24: 24,
  Body20: 20,
  Body18: 18,
  Body14: 14,
  Body13: 13,
  Body: 18,
  Caption: 12,
  Tiny: 10,
};

const unboundTypes = [
  "display1",
  "display2",
  "title1",
  "title2",
  "title3",
  "title4",
];

const useTextStyling = (
  props: Pick<CustomTextProps, "style" | "type" | "color" | "bold" | "center">
): { style: StyleProp<TextStyle> } => {
  const { theme } = useTheme();
  const textColors = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    textPrimary: theme.colors.textPrimary,
    textSecondary: theme.colors.textSecondary,
  };

  const modifiedStyle: StyleProp<TextStyle> = useMemo(() => {
    const flatStyle: TextStyle | undefined = StyleSheet.flatten(props.style);

    const fontSize: TextStyle["fontSize"] =
      flatStyle?.fontSize ||
      (props.type ? fontSizes[props.type!] : fontSizes.Body);

    let style: StyleProp<TextStyle> = [
      props.style,
      {
        fontSize,
        fontFamily:
          flatStyle?.fontFamily ||
          (props.type &&
            unboundTypes.includes(props.type) &&
            ((props.bold && "Unbounded_700Bold") || "Unbounded_500Medium")) ||
          (props.bold && "Urbanist_700Bold") ||
          "Urbanist_500Medium",
        color: textColors[props.color || "textPrimary"],
        lineHeight: (fontSize < 45 ? 1.4 : 1.2) * fontSize,
      },
      props.center && { textAlign: "center" },
    ];
    return style;
  }, [props, theme]);

  return { style: modifiedStyle };
};

export default useTextStyling;
