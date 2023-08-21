import { OnboardingItemsProps } from "@src/@types/section/onboarding";
import { CustomButton } from "@src/component/button";
import {
  CustomArrowRight,
  CustomLoginCurve,
} from "@src/component/icons/iconsax";
import CustomText from "@src/component/text";
import { router } from "expo-router";
import { View } from "react-native";

export const ONBOARDING: OnboardingItemsProps[] = [
  {
    image: "onboarding/01.png",
    title: "Welcome to SelfQare",
    body: "Find the closest Health Facilities in your vicinity at the comfort of your home.",
    primaryButton: "Continue",
    primaryIcon: CustomArrowRight,
  },
  {
    image: "onboarding/02.png",
    title: "Schedule Appointments With Doctors",
    body: "Find experienced doctors with expert ratings and reviews and  book your appointment",
    primaryButton: "Continue",
    primaryIcon: CustomArrowRight,
    secondaryButton: "Skip",
  },
  {
    image: "onboarding/03.png",
    title: "Healthier living at your finger tips.",
    body: "With the help of our intelligent algorithms now locate NGOs around your vicinity at total ease ",
    primaryButton: "Continue",
    primaryIcon: CustomArrowRight,
    secondaryButton: "Skip",
  },
  {
    image: "onboarding/04.png",
    title: "Book face-to-face Appointment",
    body: "Can’t go to the hospital? Book Video Call appointments with your doctor within the App",
    primaryButton: "Get Started",
    primaryIcon: CustomLoginCurve,
    secondaryAction: (action) => (
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          paddingVertical: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomText color="textSecondary">Already have an account</CustomText>
        <CustomButton
          onPress={action}
          type="clear"
          textColor="primaryText"
          title="Sign in"
          noPadding
          uppercase
          titleStyle={{ fontSize: 18 }}
        />
      </View>
    ),
  },
];
