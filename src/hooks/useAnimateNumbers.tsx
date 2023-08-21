import React, { useEffect } from "react";
import { Animated, Easing } from "react-native";

const useAnimateNumbers = (
  startValue: number,
  endValue: number,
  duration: number,
  {
    easing,
    pauseInitial,
  }: {
    easing?: ((value: number) => number) | undefined;
    pauseInitial?: boolean;
  }
) => {
  const value: Animated.Value = React.useRef(
    new Animated.Value(startValue)
  ).current;
  const animation = Animated.timing(value, {
    toValue: endValue,
    duration,
    easing: easing || Easing.linear,
    useNativeDriver: true,
  });
  const startAnimation = () => {
    animation.start();
  };

  useEffect(() => {
    pauseInitial !== true && startAnimation();
  }, []);

  return { value, startAnimation, animations: [animation] };
};

export default useAnimateNumbers;
