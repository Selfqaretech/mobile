import { View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import useCustomTheme from "@src/hooks/useCustomTheme";
import { layout } from "@src/constants/layout";
import CustomText from "../text";
import CustomRating from "../rating/CustomRating";
import { Icon } from "@rneui/themed";

type CustomTitleCardProps = {
  title: string;
  subtitle?: string;
  rating: number;
  align?: "left" | "center";
  phoneNumber?: string;
  openStatus?: "Opened" | "Closed";
  openTime?: string;
  closeTime?: string;
  services?: string[];
};

const CustomTitleCard = React.forwardRef<
  TouchableOpacity,
  CustomTitleCardProps & Pick<TouchableOpacityProps, "onPress">
>((props, ref) => {
  const { theme } = useCustomTheme();
  return (
    <TouchableOpacity
      ref={ref}
      activeOpacity={0.8}
      style={{
        padding: 16,
        backgroundColor: theme.colors.grey0,
        width: layout.windowWidth(0.9),
        alignSelf: "center",
        margin: 16,
        borderRadius: 16,
        alignItems: props.align === "center" ? "center" : "flex-start",
        gap: 8,
      }}
      onPress={props.onPress}
    >
      <CustomText type="title3" numberOfLines={1} adjustsFontSizeToFit>
        {props.title}
      </CustomText>
      {props.subtitle && (
        <CustomText type="Caption" numberOfLines={1} adjustsFontSizeToFit>
          {props.subtitle}
        </CustomText>
      )}
      <View style={{ flexDirection: "row", gap: 8 }}>
        {props.services?.map?.((service, index) => (
          <CustomText
            key={index}
            type="Tiny"
            style={{
              backgroundColor: theme.colors.grey1,
              paddingVertical: 4,
              paddingHorizontal: 8,
            }}
          >
            {service}
          </CustomText>
        ))}
      </View>
      <CustomRating rating={props.rating} size={15} marginVertical={2} />
      <View
        style={{
          flexDirection: props.align === "center" ? "row" : "row-reverse",
          gap: 4,
          alignItems: "center",
        }}
      >
        <CustomText type="Caption" color="secondary">
          {props.openStatus}
        </CustomText>
        <CustomText type="Caption" color="textSecondary">
          {props.align === "center"
            ? `- Close at ${props.closeTime}`
            : `${props.openTime} -  ${props.closeTime}`}
        </CustomText>
      </View>
      {props.phoneNumber && (
        <TouchableOpacity
          onPress={() => {
            alert(`Calling ${props.phoneNumber}`);
          }}
          style={{
            alignSelf: "flex-end",
            position: "absolute",
            bottom: 16,
            right: 16,
            padding: 4,
            borderRadius: 50,
          }}
        >
          <Icon
            type="material"
            name="phone"
            color={theme.colors.primary}
            size={28}
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
});

export default CustomTitleCard;
