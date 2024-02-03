import { View, StyleSheet } from "react-native";
import React from "react";
import CustomText from "@src/component/text";
import CustomBottomSheet from "@src/component/bottomsheet/CustomBottomSheet";
import MapView from "react-native-maps";
import useCustomTheme from "@src/hooks/useCustomTheme";
import { layout } from "@src/constants/layout";
import { Link } from "expo-router";
import CustomTitleCard from "@src/component/card/CustomTitleCard";

const Home = () => {
  const { mode } = useCustomTheme();
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <MapView
        userInterfaceStyle={mode}
        style={[
          StyleSheet.absoluteFill,
          { height: layout.screenHeight() - 300 + 24 },
        ]}
      />
      <CustomText type="display1">Home</CustomText>
    </View>
  );
};

export default Home;