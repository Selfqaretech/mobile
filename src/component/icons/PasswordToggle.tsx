import { View, Text } from "react-native";
import React from "react";

import { Eye, EyeSlash, IconProps } from "iconsax-react-native";

const PasswordToggle = (
  props: IconProps & {
    visible?: boolean;
  }
) => {
  const Icon = props.visible ? EyeSlash : Eye;
  return <Icon {...props} />;
};

export default PasswordToggle;
