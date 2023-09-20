import { GreyType } from "@rneui/themed";

// Blue Color
const primary = {
  100: "#D4DBFC",
  200: "#A9B8FA",
  300: "#7C90F1",
  400: "#5A6FE4",
  500: "#2940D3",
  600: "#1443C3",
  700: "#142297",
  800: "#0D177A",
  900: "#070F65",
};

// Pumpkin Color
const secondary = {
  100: "#C4F8EE",
  200: "#B9F0E6",
  300: "#50D6BE",
  400: "#6BE1CC",
  500: "#83E8D6",
  600: "#50FED0",
  700: "#00FCB9",
  800: "#037859",
  900: "#035E45",
};

const grey: GreyType = {
  100: "#f5f5f780",
  200: "#E3E6EB",
  300: "#BABFC5",
  400: "#82868C",
  500: "#3A3C40",
  600: "#2A2E37",
  700: "#1D212E",
  800: "#0C122F",
  900: "#0B0E1E",
};

const reverseGrey: GreyType = ((): GreyType => {
  const greyValues: string[] = Object.values(grey);
  const greyKeys = Object.keys(grey);
  const reverseGreyValues = greyValues.reverse();
  return greyKeys.reduce<GreyType>((prev, curr, index) => {
    return { ...prev, [curr]: reverseGreyValues[index] };
  }, {});
})();

const common = {
  white: "#FFF",
  black: "#171717",
  buttonText: "#F9F8FD",
  backgroundLight: "#F9F8FD",
  textLight1: "#171717",
  textLight2: "#1717179A",
  textLightHelper: "#8F92A1",
  backgroundDark: grey[900],
  textDark1: "#F9F8FD",
  textDark2: "#F9F8FD90",
  textDarkHelper: "#ffffff44",
  warning: "#FBBC05",
};

export default {
  primary,
  primaryMain: primary[600],
  secondary,
  secondaryMain: secondary[700],
  grey,
  reverseGrey,
  common,
};
