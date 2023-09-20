import { View } from "react-native";
import React, { useMemo, useState } from "react";
import AuthScreenWraper from "@src/component/wrappers/Auth/Screen";
import CustomText from "@src/component/text";
import Spacing from "@src/component/spacing";
import CustomInput from "@src/component/input";
import { Profile, Lock1 } from "iconsax-react-native";
import useCustomTheme from "@src/hooks/useCustomTheme";
import PasswordToggle from "@src/component/icons/PasswordToggle";
import { CustomButton } from "@src/component/button";
import { CustomLoginCurve } from "@src/component/icons/iconsax";
import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import { useLoginMutation } from "@src/api/auth";
import { LoginProps } from "@src/@types/auth/user";

const Login = () => {
  const { theme } = useCustomTheme();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    mutate,
    isLoading: loginIsLoading,
    error: loginError,
  } = useLoginMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useMemo(() => {
    if (loginError) {
      const errorCode = loginError?.response?.status || 0;
      let error;
      if (errorCode === 404) {
        error = "Account does not exist";
      } else if (errorCode >= 400 && errorCode < 500) {
        error = "Invalid credentials";
      } else {
        error = "Network error";
      }
      setError("email", error ? { message: error } : loginError);
    }
  }, [loginError]);

  const onSubmit = (data: LoginProps) => mutate(data);

  return (
    <AuthScreenWraper>
      <CustomText type="display2" numberOfLines={1} adjustsFontSizeToFit>
        Let’s Sign You In
      </CustomText>
      <Spacing size={0.3} />
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
            value: 3,
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
      <CustomButton
        type="clear"
        noPadding
        textColor="primaryText"
        width={120}
        // onPress={() => router.push("/halleluyah/today")}
      >
        Forgot Password
      </CustomButton>
      <Spacing flex minSize={2} />
      <CustomButton
        uppercase
        icon={<CustomLoginCurve color={theme.colors.white} />}
        onPress={handleSubmit(onSubmit)}
        loading={loginIsLoading}
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
          width={60}
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
