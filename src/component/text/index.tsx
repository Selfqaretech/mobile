import { Text } from "react-native";
import React from "react";
import { CustomTextProps } from "@src/@types/text";
import useTextStyling from "@src/hooks/useTextStyling";

import Animated from "react-native-reanimated";

const CustomText = React.forwardRef<Text, CustomTextProps>((props, ref) => {
  const { style } = useTextStyling(props);
  return (
    <Text {...props} ref={ref} style={style}>
      {props.children}
    </Text>
  );
});

export const AnimatedCustomText = Animated.createAnimatedComponent(CustomText);

export default CustomText;
