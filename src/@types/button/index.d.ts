import { ButtonProps } from "@rneui/base";
import { GestureResponderEvent } from "react-native";

export type CustomButtonProps = ButtonProps & {
  fullWidth?: boolean;
  rounded?: boolean;
  fontLight?: boolean;
  noPadding?: boolean;
  textColor?: "primary" | "primaryText" | "secondary" | "secondaryText";
  width?: number;
};
