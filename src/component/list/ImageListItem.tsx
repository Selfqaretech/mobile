import { View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { Image } from "react-native";
import CustomText from "../text";
import { Icon } from "@rneui/themed";
import useCustomTheme from "@src/hooks/useCustomTheme";

type ImageListItemProps = TouchableOpacityProps & {
  image: string;
  title: string;
  subtitle: string;
  rating: number;
};

const ImageListItem = React.forwardRef<TouchableOpacity, ImageListItemProps>(
  (props, ref) => {
    const { theme } = useCustomTheme();
    return (
      <TouchableOpacity
        {...props}
        ref={ref}
        style={{
          padding: 16,
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Image
          style={{
            height: 80,
            width: 80,
            borderRadius: 16,
            resizeMode: "cover",
          }}
          source={{ uri: props.image }}
          alt={props.title}
        />
        <View>
          <CustomText type="Body20" bold>
            {props.title}
          </CustomText>
          <CustomText type="Body14" color="textSecondary">
            {props.subtitle}
          </CustomText>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <View
              style={{
                padding: 4,
                backgroundColor: `${theme.colors.warning}33`,
                borderRadius: 8,
              }}
            >
              <Icon
                name="star-fill"
                type="octicon"
                size={16}
                color={theme.colors.warning}
              />
            </View>
            <CustomText type="Body13">
              {props.rating}
              <CustomText type="Body13" color="textSecondary">
                /5
              </CustomText>
            </CustomText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
);

export default ImageListItem;
