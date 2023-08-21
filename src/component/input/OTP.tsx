import { View, Text, TextInput } from "react-native";
import React, { LegacyRef, RefObject, createRef, useMemo, useRef } from "react";
import CustomInput from ".";
import { layout } from "@src/constants/layout";
import { InputProps } from "@rneui/base";

const OTPInput = (props: InputProps) => {
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
};

export default OTPInput;
