import { Dimensions } from "react-native";

const MARGIN = 0.07;

export const layout = {
  margin: MARGIN,
  screenDimensions: Dimensions.get("screen"),
  windowDimensions: Dimensions.get("window"),
  marginHorizontal: function (margin?: number) {
    return this.windowDimensions.width * (margin || MARGIN);
  },
  marginVertical: function (margin?: number) {
    return this.windowDimensions.width * (margin || MARGIN * 1.5);
  },
  screenWidth: function (width?: number): number {
    return this.screenDimensions.width * (width || 1);
  },
  screenHeight: function (height?: number): number {
    return this.screenDimensions.height * (height || 1);
  },
  windowWidth: function (width?: number): number {
    return this.windowDimensions.width * (width || 1);
  },
  windowHeight: function (height?: number): number {
    return this.windowDimensions.height * (height || 1);
  },
};
