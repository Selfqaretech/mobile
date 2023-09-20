import { View, ViewProps } from "react-native";
import React from "react";
import useCustomTheme from "@src/hooks/useCustomTheme";
import Animated from "react-native-reanimated";
import { usePulseAnimation } from "@src/hooks/animations/usePulseAnimation";

const PulseWrapper: React.FC<{
  pulses?: number;
  size?: number;
  children?: React.ReactElement;
  pulseScale?: number;
}> = (props) => {
  const { theme } = useCustomTheme();
  const SIZE = props.size || 70;
  const PULSE_SIZE = props.pulseScale || 1.5;

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: SIZE * PULSE_SIZE,
        width: SIZE * PULSE_SIZE,
      }}
    >
      {[...Array(props.pulses || 3).keys()].map((_, index) => (
        <PulsingCircle
          key={index}
          index={index}
          delay={index * 600}
          duration={2000}
          pulseSize={PULSE_SIZE}
          style={{
            position: "absolute",
            height: SIZE,
            width: SIZE,
            backgroundColor: theme.colors.primary,
            borderRadius: SIZE / 2,
          }}
        />
      ))}
      <View
        style={{
          position: "absolute",
          height: SIZE,
          width: SIZE,
          backgroundColor: theme.colors.primary,
          borderRadius: SIZE / 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

const PulsingCircle: React.FC<
  ViewProps & {
    index: number;
    duration?: number;
    delay?: number;
    pulseSize?: number;
  }
> = (props) => {
  const { animatedStyles } = usePulseAnimation(
    props.delay,
    props.duration,
    props.pulseSize
  );
  return <Animated.View style={[props.style, animatedStyles]} />;
};

export default PulseWrapper;
