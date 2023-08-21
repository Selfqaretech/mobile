import { View, TextInput, Alert, TextInputProps } from "react-native";
import React, {
  createRef,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import AuthScreenWraper from "@src/component/wrappers/Auth/Screen";
import CustomText from "@src/component/text";
import Spacing from "@src/component/spacing";
import CustomInput from "@src/component/input";
import useCustomTheme from "@src/hooks/useCustomTheme";
import { CustomButton } from "@src/component/button";
import { CustomLoginCurve } from "@src/component/icons/iconsax";
import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import OTPInput from "@src/component/input/OTP";

const onSubmit = (data: object) => {
  const string = Object.values(data).reduce(
    (prev, curr) => prev + (typeof curr === "string" ? curr : ""),
    ""
  );
  console.log(data, string);
};

const insertStringAt = (string: string, index: number, newSubstring: string) =>
  string.slice(0, index) + newSubstring + string.substring(index);
const deleteStringAt = (string: string, index: number) =>
  string.slice(0, index - 1 > 0 ? index - 1 : 0) + string.substring(index);

const OTP = () => {
  const { theme } = useCustomTheme();

  const [otpValue, setOtpValue] = useState("");

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const handleChange = useCallback(
    (string: string) => {
      setOtpValue(string);
    },
    [setOtpValue]
  );

  return (
    <AuthScreenWraper>
      <CustomText type="display2">OTP Authentication</CustomText>
      <CustomText color="textSecondary">
        An authentication code has been sent to (+234) 8186935279
      </CustomText>
      <Spacing size={3} />
      {/* todo break */}

      <Controller
        name="otp"
        control={control}
        rules={{
          required: { value: true, message: "OTP is required" },
          min: {
            value: 1000,
            message: "OTP should be a four digit number",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <OTPInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            autoFocus
            errorMessage={errors.otp?.message}
          />
        )}
      />

      {/* todo break */}

      <Spacing flex minSize={2} />
      <CustomButton
        uppercase
        icon={<CustomLoginCurve color={theme.colors.white} />}
        onPress={handleSubmit(onSubmit)}
      >
        Verify
      </CustomButton>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 16,
          marginBottom: 30,
        }}
      >
        <CustomText color="textSecondary">Didn’t receive code?</CustomText>
        <CustomButton
          type="clear"
          noPadding
          textColor="primaryText"
          width={100}
          onPress={() => {
            Alert.alert(
              "Message Sent",
              "An OTP code has been resent to your number."
            );
          }}
        >
          Resend again
        </CustomButton>
      </View>
    </AuthScreenWraper>
  );
};

export default OTP;
