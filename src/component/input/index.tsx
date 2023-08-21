import {
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import React, { PropsWithChildren, createRef, useRef, useState } from "react";
import { Input, InputProps } from "@rneui/themed";
import useCustomTheme from "@src/hooks/useCustomTheme";

const CustomInput = (props: InputProps) => {
  const { theme } = useCustomTheme();
  const ref: React.Ref<PropsWithChildren<TextInput>> =
    props.ref || createRef<TextInput>();

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
};

export default CustomInput;
