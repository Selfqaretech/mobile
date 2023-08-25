import { View } from "react-native";
import React, { useState } from "react";
import { ONBOARDING } from "@src/constants/onboarding";
import OnboardingSection from "@src/section/Onboarding";
import { router } from "expo-router";
import IndicatorWrapper from "@src/component/indicator/Wrapper";

const Onboarding = () => {
  const [page, setPage] = useState(0);
  const [animateBack, setAnimateBack] = useState(false);
  const pageDetails = ONBOARDING[page];
  const PrimaryIcon = pageDetails.primaryIcon;
  return (
    <>
      <OnboardingSection
        title={pageDetails.title}
        description={pageDetails.body}
        primaryButtonText={pageDetails.primaryButton}
        primaryButtonIcon={<PrimaryIcon />}
        onPrimaryButtonPressed={
          page === ONBOARDING.length - 1
            ? () => {
                router.replace("/register");
              }
            : () => {
                setPage(page + 1);
                setAnimateBack(false);
              }
        }
        secondaryButtonText={pageDetails.secondaryButton}
        onSecondaryButtonPressed={() => {
          router.replace("/login");
        }}
        secondaryContent={pageDetails.secondaryAction?.(() =>
          router.replace("/login")
        )}
        totalScreens={ONBOARDING.length}
        activeIndicator={page}
        animateIndicatorBack={animateBack}
        goBack={
          page === 0
            ? undefined
            : () => {
                setPage(page - 1);
                setAnimateBack(true);
              }
        }
      />
      <View style={{ position: "absolute", alignSelf: "center", top: "50%" }}>
        <IndicatorWrapper index={page} total={ONBOARDING.length} />
      </View>
    </>
  );
};

export default Onboarding;
