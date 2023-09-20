import React from "react";
import { TabProps } from "@rneui/base";
import { Tab, TabItemProps } from "@rneui/themed";
import useCustomTheme from "@src/hooks/useCustomTheme";
import { StyleSheet } from "react-native";
import ErrorBoundary from "../errorboundary/ErrorBoundary";

const CustomTab: React.FC<TabProps> = (props) => {
  const { theme } = useCustomTheme();
  const titleStyle = StyleSheet.flatten([
    props.titleStyle,
    {
      color: theme.colors.textPrimary,
      fontFamily: "Unbounded_500Medium",
      fontSize: 12,
      transform: [{ translateX: 0 }],
    },
  ]);
  return (
    <ErrorBoundary>
      <Tab
        {...props}
        indicatorStyle={[
          props.indicatorStyle,
          {
            backgroundColor: theme.colors.primary,
            height: 4,
          },
        ]}
        titleStyle={titleStyle}
      />
    </ErrorBoundary>
  );
};

export const CustomTabItem: React.FC<TabItemProps> = (props) => {
  const { theme } = useCustomTheme();
  const titleStyle = StyleSheet.flatten([
    props.titleStyle,
    {
      color: theme.colors.textPrimary,
      fontFamily: "Unbounded_500Medium",
      fontSize: 12,
      transform: [{ translateX: 0 }],
    },
  ]);

  return <Tab.Item {...props} titleStyle={titleStyle} />;
};

export default CustomTab;
