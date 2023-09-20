import React from "react";
import { Tabs } from "expo-router";
import useCustomTheme from "@src/hooks/useCustomTheme";
import {
  Calendar,
  Home,
  Location,
  Message,
  Profile,
} from "iconsax-react-native";
import { Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const Layout = () => {
  const { theme, mode } = useCustomTheme();
  const { bottom } = useSafeAreaInsets();
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,

          tabBarActiveTintColor:
            mode === "dark" ? theme.colors.textPrimary : theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.divider,
          tabBarActiveBackgroundColor: theme.colors.background,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: "Home",
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Home color={color} size={focused ? 26 : 24} />
            ),
          }}
        />
        <Tabs.Screen
          name="message/index"
          options={{
            tabBarLabel: "Message",
            title: "Message",
            tabBarIcon: ({ color, focused }) => (
              <Message color={color} size={focused ? 26 : 24} />
            ),
            tabBarHideOnKeyboard: true,
          }}
        />
        <Tabs.Screen
          name="appointment/index"
          options={{
            tabBarLabel: "Appointment",
            title: "Appointment",
            tabBarIcon: ({ color, focused }) => (
              <Calendar color={color} size={focused ? 26 : 24} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            tabBarLabel: "Profile",
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <Profile color={color} size={focused ? 26 : 24} />
            ),
          }}
        />
      </Tabs>
      <Pressable
        style={{
          height: 70,
          width: 70,
          left: "50%",
          transform: [{ translateX: -35 }],
          position: "absolute",
          bottom: bottom + 30,
          backgroundColor: theme.colors.primary,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          elevation: 2,
          shadowColor: theme.colors.textPrimary,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 4,
          shadowOpacity: 0.25,
        }}
        onPress={() => {
          console.log("hi");
        }}
      >
        <Location variant="Bold" size={30} color={theme.colors.white} />
      </Pressable>
    </>
  );
};

export default Layout;
