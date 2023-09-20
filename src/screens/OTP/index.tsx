import { View, Alert } from "react-native";
import React from "react";
import AuthScreenWraper from "@src/component/wrappers/Auth/Screen";
import CustomText from "@src/component/text";
import Spacing from "@src/component/spacing";
import useCustomTheme from "@src/hooks/useCustomTheme";
import { CustomButton } from "@src/component/button";
import { CustomLoginCurve } from "@src/component/icons/iconsax";
import { useForm, Controller } from "react-hook-form";

import { CustomOTP } from "@src/component/input/CustomOTP";

const onSubmit = (data: object) => {
  const string = Object.values(data).reduce(
    (prev, curr) => prev + (typeof curr === "string" ? curr : ""),
    ""
  );
  alert(`OTP - ${string}.  ${JSON.stringify(data)}`);
};

const OTP = () => {
  const { theme } = useCustomTheme();

  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  return (
    <AuthScreenWraper>
      <CustomText type="display2" numberOfLines={1} adjustsFontSizeToFit>
        OTP Authentication
      </CustomText>
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
          pattern: {
            value: /^\d{4}$/,
            message: "Invalid OTP",
          },
        }}
        // render={({ field: { onChange, onBlur, value } }) => (
        //   <OTPInput
        //     value={value}
        //     onChangeText={onChange}
        //     onBlur={onBlur}
        //     autoFocus
        //     errorMessage={errors.otp?.message}
        //   />
        // )}
        render={({ field: { onChange } }) => (
          <CustomOTP otpCodeChanged={onChange} numberOfInputs={4} />
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
