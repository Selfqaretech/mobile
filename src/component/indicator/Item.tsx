import { View, Text, Animated } from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import useAnimateHexColors from "@src/hooks/useAnimateHexColors";
import { useTheme } from "@rneui/themed";
import useAnimateNumbers from "@src/hooks/useAnimateNumbers";
import useColorAnimation from "@src/hooks/useAnimateColors";
import { MotiView } from "moti";

const IndicatorItem = (props: { active?: boolean }) => {
  const { active } = props;
  const { theme } = useTheme();
  const ACTIVE_COLOR: string = theme.colors.secondary;
  const INACTIVE_COLOR: string = theme.colors.grey5;
  const ACTIVE_WIDTH: number = 16;
  const INACTIVE_WIDTH: number = 8;

  return (
    <MotiView
      animate={{
        width: active ? ACTIVE_WIDTH : INACTIVE_WIDTH,
        backgroundColor: active ? ACTIVE_COLOR : INACTIVE_COLOR,
      }}
      style={{
        height: 5,
        borderRadius: 2.5,
        width: active ? ACTIVE_WIDTH : INACTIVE_WIDTH,
        backgroundColor: active ? ACTIVE_COLOR : INACTIVE_COLOR,
      }}
    />
  );
};

export default IndicatorItem;
