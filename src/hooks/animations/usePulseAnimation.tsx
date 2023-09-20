import { useMemo } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export const usePulseAnimation = (
  delay: number = 0,
  duration: number = 1000,
  pulseScale: number = 2
) => {
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  useMemo(() => {
    opacity.value = withDelay(
      delay,
      withRepeat(
        withTiming(opacity.value - 1, { duration: duration }),
        -1,
        false
      )
    );
    scale.value = withDelay(
      delay,
      withRepeat(
        withTiming(scale.value + (pulseScale - 1), { duration: duration }),
        -1,
        false
      )
    );
  }, []);

  return { animatedStyles };
};
