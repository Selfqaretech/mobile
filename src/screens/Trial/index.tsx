import { CustomButton } from "@src/component/button";
import {
  CustomArrowRight,
  CustomLoginCurve,
} from "@src/component/icons/iconsax";
import CustomText from "@src/component/text";
import useColorAnimation from "@src/hooks/useAnimateColors";
import useAnimateHexColors from "@src/hooks/useAnimateHexColors";
import useAnimateNumbers from "@src/hooks/useAnimateNumbers";
import { container } from "@src/styles/container";
import { Button } from "@rneui/base";
import { useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import {
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { router } from "expo-router";

const Trial = () => {
  const { theme, updateTheme } = useTheme();
  const [scaleValues, setScaleValues] = useState({
    start: 0.5,
    end: 2,
  });
  const [borderRadiusValues, setBorderRadiusValues] = useState({
    start: 0,
    end: 20,
  });
  const [colorValues, setColorValues] = useState({
    start: "#ffffff",
    end: "#000000",
  });

  const [radius, setRadius] = useState(new Animated.Value(0));

  const {
    value: scale,
    startAnimation: startScaleAnimation,
    animations: scaleAnimations,
  } = useAnimateNumbers(scaleValues.start, scaleValues.end, 500, {
    pauseInitial: true,
  });
  const {
    value: borderRadius,
    startAnimation: startBorderRadiusAnimation,
    animations: borderRadiusAnimations,
  } = useAnimateNumbers(borderRadiusValues.start, borderRadiusValues.end, 500, {
    pauseInitial: true,
  });
  const {
    value: color,
    startAnimation: startColorRadiusAnimation,
    animations: colorAnimations,
  } = useColorAnimation(colorValues.start, colorValues.end, 500, {
    pauseInitial: true,
  });

  const startAnimations = useCallback(() => {
    Animated.parallel([
      ...scaleAnimations,
      ...borderRadiusAnimations,
      // ...colorAnimations,
    ]).start();
  }, [scaleAnimations, borderRadiusAnimations]);

  return (
    <View
      style={{
        ...container.center,
        backgroundColor: "transparent",
      }}
    >
      <CustomText>Open up App.tsx to start working on your app!</CustomText>
      <CustomButton
        type="solid"
        title="Try This"
        // noPadding
        icon={<CustomLoginCurve />}
        // rounded
        // fullWidth
        onPress={() =>
          updateTheme({ mode: theme.mode === "light" ? "dark" : "light" })
        }
      />
      <Button
        type="clear"
        title="Try this"
        // onPress={() => router.push("(auth)/(map)/chooselocation")}
      />
      <Button
        title="Scale"
        onPress={() => {
          startAnimations();
          setScaleValues((prevValues) => ({
            start: prevValues.end,
            end: prevValues.start,
          }));
          setBorderRadiusValues((prevValues) => ({
            start: prevValues.end,
            end: prevValues.start,
          }));
          setColorValues((prevValues) => ({
            start: prevValues.end,
            end: prevValues.start,
          }));
        }}
      />
      <TouchableWithoutFeedback onPress={() => router.replace("/")}>
        <Animated.View
          style={{
            padding: 20,
            backgroundColor: color, //theme.colors.paper,
            transform: [{ scale }],
            borderRadius,
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Trial;
