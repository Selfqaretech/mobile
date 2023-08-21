import { layout } from "@src/constants/layout";
import { StyleSheet } from "react-native";

export const onboarding = StyleSheet.create({
  content: {
    flex: 1,
    marginHorizontal: layout.marginHorizontal(),
    position: "relative",
    alignItems: "center",
    gap: 16,
  },
  image: {
    height: 600,
    width: layout.screenWidth(0.8),
    marginBottom: layout.screenHeight(0.08),
  },
  text: {
    marginHorizontal: 26,
  },
  indicatorItem: {
    width: 8,
    height: 5,
    borderRadius: 2.5,
    opacity: 0.2,
  },
  activeInidcatorItem: {
    width: 16,
  },
  indicatorContainer: {
    gap: 8,
  },
});
