import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React from "react";
import useCustomTheme from "@src/hooks/useCustomTheme";
import { layout } from "@src/constants/layout";
import { ViewProps } from "react-native";
import Animated from "react-native-reanimated";

const CustomBottomSheet = React.forwardRef<
  View,
  ViewProps & { height?: number; onNotchPress?: () => void }
>((props, ref) => {
  const { theme } = useCustomTheme();
  return (
    <View
      ref={ref}
      style={{
        height: layout.windowHeight(),
        position: "absolute",
        top: layout.windowHeight() - (props.height || 0),
        backgroundColor: theme.colors.paper,
        width: layout.windowWidth(),
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        justifyContent: "flex-start",
      }}
    >
      <CustomBottomSheetNotch onPress={props.onNotchPress} />
      {props.children}
    </View>
  );
});

const CustomBottomSheetNotch: React.FC<TouchableOpacityProps> = (props) => {
  const { theme, mode } = useCustomTheme();
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.6}
      style={{
        height: 8,
        flexShrink: 0,
        backgroundColor:
          mode === "light" ? theme.colors.grey1 : theme.colors.divider,
        width: layout.windowWidth(0.15),
        alignSelf: "center",
        margin: 8,
        borderRadius: 4,
      }}
    />
  );
};

export default CustomBottomSheet;

export const AnimatedCustomBottomSheet =
  Animated.createAnimatedComponent(CustomBottomSheet);
