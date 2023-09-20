import { View, TextInput } from "react-native";
import React from "react";
import CustomInput from ".";
import { InputProps } from "@rneui/base";

const OTPInput = React.forwardRef<TextInput, InputProps>((props, ref) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
        justifyContent: "space-evenly",
      }}
    >
      <CustomInput
        {...props}
        ref={ref}
        maxLength={4}
        keyboardType="numeric"
        value={props.value}
        onChangeText={props.onChangeText}
        inputStyle={[
          {
            textAlign: "center",
            fontSize: 50,
            padding: 16,
            letterSpacing: 50,
          },
        ]}
      />
    </View>
  );
});

export default OTPInput;
