import { View, Text } from "react-native";
import React, { useState } from "react";
import AuthScreenWraper from "@src/component/wrappers/Auth/Screen";
import CustomText from "@src/component/text";
import Spacing from "@src/component/spacing";
import CustomInput from "@src/component/input";
import { Profile, Lock1 } from "iconsax-react-native";
import useCustomTheme from "@src/hooks/useCustomTheme";
import PasswordToggle from "@src/component/icons/PasswordToggle";
import { CustomButton } from "@src/component/button";
import { CustomLoginCurve } from "@src/component/icons/iconsax";
import {
  useForm,
  Controller,
  SubmitErrorHandler,
  UseFormGetValues,
} from "react-hook-form";
import { router } from "expo-router";

// import { NavigationProp } from "react-navigation";

const onSubmit = (data: { email: string; password: string }) => {
  alert(`Hi ${data.email}`);
};

const Login = () => {
  const { theme } = useCustomTheme();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <AuthScreenWraper>
      <CustomText type="display2">Let’s Sign You In</CustomText>
      <CustomText color="textSecondary">
        Welcome back, you’ve been missed!
      </CustomText>
      <Spacing size={3} />
      <Controller
        name="email"
        control={control}
        rules={{
          required: { value: true, message: "Username or Email is required" },
          minLength: {
            value: 6,
            message: "Username or Email requires a minimum of 3 characters",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomInput
            label="Username or Email"
            leftIcon={<Profile color={theme.colors.textPrimary} />}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            errorMessage={errors.email?.message}
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

      <CustomButton type="clear" noPadding textColor="primaryText" width={120}>
        Forgot Password
      </CustomButton>
      <Spacing flex minSize={2} />
      <CustomButton
        uppercase
        icon={<CustomLoginCurve color={theme.colors.white} />}
        onPress={handleSubmit(onSubmit)}
      >
        Sign In
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
        <CustomText color="textSecondary">Don't have an account?</CustomText>
        <CustomButton
          type="clear"
          noPadding
          textColor="primaryText"
          width={50}
          onPress={() => {
            router.push("/(auth)/register");
          }}
        >
          Sign up
        </CustomButton>
      </View>
      <Spacing size={0.5} />
      <CustomButton
        buttonStyle={{ backgroundColor: theme.colors.white }}
        titleStyle={{
          color: theme.colors.black,
        }}
        // icon={<CustomLoginCurve color={theme.colors.white} />}
      >
        Sign in with Google
      </CustomButton>
    </AuthScreenWraper>
  );
};

export default Login;
