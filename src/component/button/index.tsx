import { CustomButtonProps } from "@src/@types/button";
import { Button, ButtonProps, useTheme } from "@rneui/themed";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import React from "react";

export const CustomButton = React.forwardRef<ButtonProps, CustomButtonProps>(
  (props, _) => {
    const { theme } = useTheme();

    const getTextColor = (
      textColor: string | undefined
    ): string | undefined => {
      switch (textColor) {
        case "primary":
          return theme.colors.primary;
        case "secondary":
          return theme.colors.secondary;
        case "primaryText":
          return theme.colors.textPrimary;
        case "secondaryText":
          return theme.colors.textSecondary;
        default:
          return undefined;
      }
    };

    const textColor = getTextColor(props.textColor);

    const titleStyle: StyleProp<TextStyle> = [
      props.titleStyle,
      {
        ...(props.fontLight && { fontFamily: "Urbanist_500Medium" }),
      },
      {
        ...(textColor && { color: textColor }),
      },
    ];
    const buttonStyle: StyleProp<ViewStyle> = [
      props.buttonStyle,
      {
        ...(props.noPadding && {
          paddingHorizontal: 0,
          paddingVertical: 0,
        }),
        ...(props.rounded && {
          borderRadius: 100,
        }),
        ...(props.type === "outline" && { borderWidth: 1.5 }),
        ...(props.width && { width: props.width }),
      },
    ];

    const containerStyle: StyleProp<ViewStyle> = [
      props.containerStyle,
      {
        ...(props.rounded && {
          borderRadius: 100,
        }),
        ...(props.fullWidth && {
          width: "100%",
        }),
        ...(props.width && { width: props.width }),
      },
    ];
    return (
      <Button
        {...props}
        titleStyle={titleStyle}
        buttonStyle={buttonStyle}
        containerStyle={containerStyle}
      />
    );
  }
);
