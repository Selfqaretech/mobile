import { layout } from "@src/constants/layout";
import { Dimensions, StyleSheet } from "react-native";

export const container = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    height: layout.screenWidth(),
    width: layout.screenWidth(),
  },
});
