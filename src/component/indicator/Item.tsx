import React from "react";
import { useTheme } from "@rneui/themed";
import { MotiView } from "moti";

const IndicatorItem: React.FC<{ active?: boolean }> = (props) => {
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
