import { OnboardingSectionProps } from "@src/@types/section/onboarding";
import { CustomButton } from "@src/component/button";
import { CustomArrowRight, GoBack } from "@src/component/icons/iconsax";
import IndicatorWrapper from "@src/component/indicator/Wrapper";
import CustomInput from "@src/component/input";
import CustomText from "@src/component/text";
import { ONBOARDING } from "@src/constants/onboarding";
import { onboarding } from "@src/styles/onboarding";
import { Image } from "@rneui/base";
import { useTheme } from "@rneui/themed";
import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RESOLVED_URI_LIST = [
  require("@assets/onboarding/01.png"), // 0
  require("@assets/onboarding/02.png"), // 1
  require("@assets/onboarding/03.png"), // 2
  require("@assets/onboarding/04.png"), // 3
];

const OnboardingSection = (props: OnboardingSectionProps) => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={[onboarding.content]}>
      <Image
        style={onboarding.image}
        source={{
          uri: Image.resolveAssetSource(
            RESOLVED_URI_LIST[props.activeIndicator]
          )?.uri,
        }}
        resizeMode="contain"
      />
      <CustomText type="title1" bold center style={onboarding.text}>
        {props.title}
      </CustomText>
      <CustomText
        color="textSecondary"
        center
        style={[onboarding.text, { marginBottom: 24 }]}
        type="Body18"
      >
        {props.description}
      </CustomText>
      <CustomButton
        uppercase
        fullWidth
        icon={props.primaryButtonIcon}
        onPress={props.onPrimaryButtonPressed}
      >
        {props.primaryButtonText}
      </CustomButton>
      {props.secondaryButtonText && (
        <CustomButton
          type="clear"
          textColor="primaryText"
          uppercase
          fullWidth
          onPress={props.onSecondaryButtonPressed}
        >
          {props.secondaryButtonText}
        </CustomButton>
      )}
      {props.secondaryContent && <View>{props.secondaryContent}</View>}
      {props.goBack && <GoBack onPress={props.goBack} />}
    </SafeAreaView>
  );
};

export default OnboardingSection;
