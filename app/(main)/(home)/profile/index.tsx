import { View } from "react-native";
import React from "react";
import CustomText from "@src/component/text";
import { CustomButton } from "@src/component/button";
import { useLogoutMutation } from "@src/api/auth";

const Profile = () => {
  const { mutate: logout } = useLogoutMutation();
  return (
    <View>
      <CustomText type="display1">Profile</CustomText>
      <CustomButton onPress={() => logout?.()}>Logout</CustomButton>
    </View>
  );
};

export default Profile;
