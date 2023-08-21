import { View, Text, Animated } from "react-native";
import React from "react";
import IndicatorItem from "./Item";

const IndicatorWrapper = (props: { index: number; total: number }) => {
  return (
    <View style={{ gap: 8, flexDirection: "row", marginVertical: 24 }}>
      {new Array(props.total).fill(props.total).map((_, index) => (
        <IndicatorItem key={index} active={index === props.index} />
      ))}
    </View>
  );
};

export default IndicatorWrapper;
