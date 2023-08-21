import { Text } from "react-native";
import React from "react";
import { CustomTextProps } from "@src/@types/text";
import useTextStyling from "@src/hooks/useTextStyling";

const CustomText = (props: CustomTextProps) => {
  const { style } = useTextStyling(props);

  return (
    <Text {...props} style={style}>
      {props.children}
    </Text>
  );
};

export default CustomText;
