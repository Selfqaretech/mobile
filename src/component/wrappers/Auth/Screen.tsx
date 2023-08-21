import React, { PropsWithChildren } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useCustomTheme from "@src/hooks/useCustomTheme";
import { layout } from "@src/constants/layout";

const AuthScreenWraper = (props: PropsWithChildren) => {
  const { theme } = useCustomTheme();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
        paddingHorizontal: layout.marginHorizontal(),
        paddingVertical: layout.marginVertical(),
        paddingTop: layout.marginVertical(layout.margin * 5),
      }}
      style={{ backgroundColor: theme.colors.background, flex: 1 }}
    >
      {props.children}
    </KeyboardAwareScrollView>
  );
};

export default AuthScreenWraper;
