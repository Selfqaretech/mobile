import { View, Text } from "react-native";
import React from "react";
import { layout } from "@src/constants/layout";

const Spacing = (props: {
  vertical?: boolean;
  size?: number;
  flex?: boolean;
  minSize?: number;
}) => {
  return (
    <View
      style={{
        height: props.vertical
          ? 0
          : props.flex
          ? undefined
          : (props.size || 1) * layout.marginHorizontal(),
        width: props.vertical
          ? props.flex
            ? undefined
            : (props.size || 1) * layout.marginHorizontal()
          : 0,
        flex: props.flex ? 1 : undefined,
        minHeight:
          props.vertical || !props.minSize
            ? undefined
            : layout.marginHorizontal() * props.minSize,
        minWidth:
          !props.vertical || !props.minSize
            ? undefined
            : layout.marginHorizontal() * props.minSize,
      }}
    />
  );
};

export default Spacing;
