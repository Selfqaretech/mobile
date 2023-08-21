import { TextProps } from "@rneui/base";

export type CustomTextProps = TextProps & {
  type?:
    | "display1"
    | "display2"
    | "title1"
    | "title2"
    | "title3"
    | "title4"
    | "Body24"
    | "Body20"
    | "Body18"
    | "Body14"
    | "Body13"
    | "Body"
    | "Caption"
    | "Tiny";
  bold?: boolean;
  color?: "primary" | "secondary" | "textPrimary" | "textSecondary";
  center?: boolean;
};
