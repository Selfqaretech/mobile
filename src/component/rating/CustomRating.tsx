import { View, ViewStyle } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import { IconProps } from "iconsax-react-native";
import useCustomTheme from "@src/hooks/useCustomTheme";
import { Icon } from "@rneui/themed";

const CustomRating: React.FC<
  ViewStyle & {
    rating?: number;
    max?: number;
    onRate?: (rate: number) => void;
    size?: number;
  }
> = (props) => {
  const [intRating, setIntRating] = useState<number>(props.rating || 5);

  const RATING = typeof props.rating === "number" ? props.rating : intRating;

  const SIZE = props.size || 10;

  const handleRate = useCallback(
    (rate: number) => {
      props.onRate ? props.onRate(rate) : setIntRating(rate);
    },
    [props.onRate]
  );

  useMemo(() => {
    if (typeof props.rating === "number") {
      setIntRating(props.rating);
    }
  }, [props.rating]);

  return (
    <View style={[props, { flexDirection: "row", gap: SIZE / 2.5 }]}>
      {[...Array(props.max || 5).keys()].map((_, index) => (
        <CustomRatingStar
          key={index}
          active={index <= RATING - 1}
          onPress={
            typeof props.onRate !== "undefined"
              ? () => handleRate(index + 1)
              : undefined
          }
          size={SIZE}
        />
      ))}
    </View>
  );
};

const CustomRatingStar: React.FC<
  Pick<IconProps, "onPress"> & { active?: boolean; size?: number }
> = (props) => {
  const { theme } = useCustomTheme();
  return (
    <Icon
      name={props.active ? "star-fill" : "star"}
      type="octicon"
      onPress={props.onPress}
      size={props.size}
      color={props.active ? theme.colors.warning : theme.colors.grey4}
    />
  );
};

export default CustomRating;
