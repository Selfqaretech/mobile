import React from "react";

import { Eye, EyeSlash, IconProps } from "iconsax-react-native";

const PasswordToggle: React.FC<
  IconProps & {
    visible?: boolean;
  }
> = (props) => {
  const Icon = props.visible ? EyeSlash : Eye;
  return <Icon {...props} />;
};

export default PasswordToggle;
