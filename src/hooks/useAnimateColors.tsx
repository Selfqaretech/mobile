import { hexToRGBString } from "@src/utils/color";
import { useCallback, useEffect } from "react";
import { Animated, Easing } from "react-native";

const useColorAnimation = (
  startColor: string,
  endColor: string,
  duration: number,
  {
    easing,
    pauseInitial,
  }: {
    easing?: (value: number) => number;
    pauseInitial?: boolean;
  }
) => {
  const color: Animated.Value = new Animated.Value(0);

  const colorAnimation: Animated.CompositeAnimation = Animated.timing(color, {
    toValue: 1,
    duration: duration,
    easing: easing || Easing.linear,
    useNativeDriver: false,
  });

  const interpolatedColor: Animated.AnimatedInterpolation<string> =
    color.interpolate({
      inputRange: [0, 300],
      outputRange: [hexToRGBString(startColor), hexToRGBString(endColor)],
    });

  const startAnimation = useCallback(() => {
    colorAnimation.start();
  }, [colorAnimation]);

  return {
    value: interpolatedColor,
    startAnimation,
    animations: [colorAnimation],
  };
};

export default useColorAnimation;
