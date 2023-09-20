import { StyleSheet, View } from "react-native";
import React from "react";
import CustomBottomSheet from "@src/component/bottomsheet/CustomBottomSheet";
import MapView from "react-native-maps";
import useCustomTheme from "@src/hooks/useCustomTheme";
import { layout } from "@src/constants/layout";
import { Link } from "expo-router";
import CustomTitleCard from "@src/component/card/CustomTitleCard";

const Index = () => {
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
      <CustomBottomSheet height={320}>
        <Link href="/(main)/(home)/home/details" asChild>
          <CustomTitleCard
            rating={3}
            title="FourSquare NGO"
            subtitle="1 Harvey Road, Sabo-Yaba, Lagos"
            align="center"
            closeTime="5:00pm"
            openStatus="Opened"
            openTime="9:00am"
          />
        </Link>
      </CustomBottomSheet>
    </View>
  );
};

export default Index;
