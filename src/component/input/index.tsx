import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from "react-native";
import React, { useState } from "react";
import { Input, InputProps } from "@rneui/themed";
import useCustomTheme from "@src/hooks/useCustomTheme";

const CustomInput = React.forwardRef<TextInput, InputProps>((props, ref) => {
  const { theme } = useCustomTheme();

  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    props.onFocus?.(e);
    setFocused(true);
  };
  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    props.onBlur?.(e);
    setFocused(false);
  };

  return (
    <Input
      {...props}
      ref={ref}
      onFocus={handleFocus}
      onBlur={handleBlur}
      inputStyle={[
        props.inputStyle,
        {
          color: theme.colors.textPrimary,
        },
      ]}
      inputContainerStyle={[
        props.inputContainerStyle,
        {
          borderColor: focused ? theme.colors.primary : theme.colors.helperText,
        },
      ]}
      labelStyle={[
        props.labelStyle,
        {
          color: theme.colors.helperText,
        },
      ]}
    />
  );
});

export default CustomInput;
