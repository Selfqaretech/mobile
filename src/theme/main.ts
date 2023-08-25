import colors from "@src/constants/colors";
import { createTheme } from "@rneui/themed";

export const theme = createTheme({
  lightColors: {
    primary: colors.primaryMain,
    secondary: colors.secondaryMain,
    background: colors.common.backgroundLight,
    textPrimary: colors.common.textLight1,
    textSecondary: colors.common.textLight2,
    paper: colors.common.white,
    white: colors.common.white,
    black: colors.common.black,
    helperText: colors.common.textLightHelper,
  },
  darkColors: {
    primary: colors.primaryMain,
    secondary: colors.secondaryMain,
    background: colors.common.backgroundDark,
    textPrimary: colors.common.textDark1,
    textSecondary: colors.common.textDark2,
    paper: colors.common.black,
    white: colors.common.white,
    black: colors.common.black,
    helperText: colors.common.textDarkHelper,
  },
  mode: "light",
  components: {
    Button: {
      raised: true,
      buttonStyle: {
        paddingVertical: 20,
        paddingHorizontal: 60,
        borderRadius: 5,
      },
      titleStyle: {
        fontFamily: "Urbanist_700Bold",
        fontSize: 16,
      },
      containerStyle: {
        borderRadius: 6,
      },
    },
    Input: {
      labelStyle: {
        fontFamily: "Urbanist_500Medium",
      },
      inputStyle: {
        fontFamily: "Urbanist_500Medium",
        fontSize: 21,
      },
      leftIconContainerStyle: {
        marginRight: 8,
      },
      errorStyle: {
        fontSize: 14,
      },
    },
    CheckBox: {
      textStyle: {
        marginLeft: 8,
      },
      containerStyle: {
        paddingTop: 0,
      },
      wrapperStyle: {
        gap: 12,
        alignItems: "flex-start",
      },
    },
  },
});
