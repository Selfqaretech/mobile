import { CustomButton } from "@src/component/button";
import CustomText from "@src/component/text";
import Br from "@src/component/text/Br";
import useCustomTheme from "@src/hooks/useCustomTheme";
import { Link, Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  const { theme, toggleTheme } = useCustomTheme();
  const pathname = usePathname();
  return (
    <>
      <Stack.Screen
        options={{
          title: "Oops!",
          statusBarColor: theme.colors.primary,
          headerStyle: { backgroundColor: theme.colors.primary },
          headerTitleStyle: { color: theme.colors.white },
          headerShown: true,
          headerTintColor: theme.colors.white,
        }}
      />
      <StatusBar style="light" />
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <CustomText type="display2" center>
          This is really <Br /> embarrasing!
        </CustomText>
        <CustomText center style={{ marginBottom: 16 }}>
          This screen isn't available at the moment, please <Br /> click the
          button below to go to the home page. {pathname}
        </CustomText>

        <Link
          href="/(main)/(home)/home"
          style={{ width: 300, display: "flex" }}
          asChild
        >
          <CustomButton width={300}>Home</CustomButton>
        </Link>
        <CustomButton type="clear" width={300} onPress={toggleTheme}>
          Theme
        </CustomButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 16,
  },
});
