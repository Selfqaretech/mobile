import { View } from "react-native";
import React, { useMemo, useState } from "react";
import AuthScreenWraper from "@src/component/wrappers/Auth/Screen";
import CustomText from "@src/component/text";
import Spacing from "@src/component/spacing";
import CustomInput from "@src/component/input";
import { Profile, Lock1, Sms } from "iconsax-react-native";
import useCustomTheme from "@src/hooks/useCustomTheme";
import PasswordToggle from "@src/component/icons/PasswordToggle";
import { CustomButton } from "@src/component/button";
import { CustomLoginCurve } from "@src/component/icons/iconsax";
import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import { CheckBox, Icon } from "@rneui/themed";
import useDebounce from "@src/hooks/useDebounce";

const onSubmit = (data: { email: string; password: string }) => {
  alert(`Hi ${data.email}`);
  router.push("/otp");
};

const Register = () => {
  const { theme } = useCustomTheme();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userNameStatus, setUserNameStatus] = useState<
    "empty" | "loading" | "valid" | "invalid"
  >("valid");

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      userName: "",
      password: "",
      agree: false,
    },
  });

  const userNameSubscription: string = watch("userName");
  const debouncedUserNameValue: string = useDebounce(userNameSubscription);

  const userNameStatusColor: string = useMemo(() => {
    const statusColors = {
      empty: theme.colors.background,
      loading: theme.colors.disabled,
      valid: theme.colors.primary,
      invalid: theme.colors.error,
    };
    return statusColors[userNameStatus];
  }, [userNameStatus]);

  useMemo(() => {
    if (!debouncedUserNameValue) return setUserNameStatus("empty");
    setUserNameStatus("loading");
    // TODO: Carry out a check for valid and available username
    return setTimeout(() => {
      if (debouncedUserNameValue.length < 4)
        return setUserNameStatus("invalid");
      return setUserNameStatus("valid");
    }, 1000);
  }, [debouncedUserNameValue]);

  return (
    <AuthScreenWraper>
      <CustomText type="display2" numberOfLines={1} adjustsFontSizeToFit>
        Getting Started
      </CustomText>
      <Spacing size={0.3} />
      <CustomText color="textSecondary">
        Create an account to continue!
      </CustomText>
      <Spacing size={3} />
      <Controller
        name="email"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Email is required",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomInput
            label="Email"
            leftIcon={<Sms color={theme.colors.textPrimary} />}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            errorMessage={errors.email?.message}
          />
        )}
      />
      <Controller
        name="userName"
        control={control}
        rules={{
          required: { value: true, message: "Username is required" },
          minLength: {
            value: 6,
            message: "Username requires a minimum of 3 characters",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomInput
            label="Username"
            leftIcon={<Profile color={theme.colors.textPrimary} />}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            rightIcon={<Icon name="check" color={userNameStatusColor} />}
            errorMessage={errors.userName?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: { value: true, message: "Password is required" },
          minLength: {
            value: 6,
            message: "Password requires a minimum of 6 characters",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomInput
            label="Password"
            leftIcon={<Lock1 color={theme.colors.textPrimary} />}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            secureTextEntry={!passwordVisible}
            errorMessage={errors.password?.message}
            rightIcon={
              <PasswordToggle
                color={theme.colors.textPrimary}
                visible={passwordVisible}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
          />
        )}
      />
      <Controller
        name="agree"
        control={control}
        rules={{
          required: {
            value: true,
            message:
              "You must agree to the terms and conditions of use before registering an account.",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <CheckBox
            checked={value}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon="checkbox-blank-outline"
            onIconPress={() => {
              onChange(!value);
            }}
            title={
              <CustomText color="textSecondary">
                By creating an account, you agree to our{" "}
                <CustomText bold>Term & Conditions</CustomText>
              </CustomText>
            }
          />
        )}
      />

      <Spacing flex minSize={2} />
      <CustomButton
        uppercase
        icon={<CustomLoginCurve color={theme.colors.white} />}
        onPress={handleSubmit(onSubmit)}
        disabled={!watch("agree")}
      >
        Sign Up
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
        <CustomText color="textSecondary">Already have an account?</CustomText>
        <CustomButton
          type="clear"
          noPadding
          textColor="primaryText"
          width={50}
          onPress={() => {
            router.replace("/(auth)/login");
          }}
        >
          Sign in
        </CustomButton>
      </View>
      <Spacing size={0.5} />
      <CustomButton
        buttonStyle={{ backgroundColor: theme.colors.white }}
        titleStyle={{
          color: theme.colors.black,
        }}
      >
        Sign in with Google
      </CustomButton>
    </AuthScreenWraper>
  );
};

export default Register;
