import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import CustomBottomSheet from "@src/component/bottomsheet/CustomBottomSheet";
import { layout } from "@src/constants/layout";
import { Image } from "react-native";
import CustomTitleCard from "@src/component/card/CustomTitleCard";
import CustomTab, { CustomTabItem } from "@src/component/tab/CustomTab";
import { TabView } from "@rneui/themed";
import CustomText from "@src/component/text";
import DOCTOR_DATA from "@src/constants/mockData/Doctors";
import ImageListItem from "@src/component/list/ImageListItem";

const Details = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const SHEET_HEIGHT = 700;
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Image
        style={[
          StyleSheet.absoluteFill,
          {
            height: layout.screenHeight(0.3),
            resizeMode: "cover",
          },
        ]}
        source={{ uri: "https://picsum.photos/1000/1000" }}
      />
      <CustomBottomSheet height={SHEET_HEIGHT}>
        <Link href="/(main)/(home)/home" asChild>
          <CustomTitleCard
            rating={3}
            title="FourSquare NGO"
            services={["Prep", "Vaccines", "Cnsultation"]}
            align="left"
            closeTime="5:00pm"
            openStatus="Opened"
            openTime="9:00am"
            phoneNumber="+234"
          />
        </Link>
        <CustomTab
          style={{ marginHorizontal: 16 }}
          value={tabIndex}
          onChange={setTabIndex}
        >
          <CustomTabItem>Doctors</CustomTabItem>
          <CustomTabItem>Services</CustomTabItem>
          <CustomTabItem>Review</CustomTabItem>
        </CustomTab>
        <View
          style={{
            height: SHEET_HEIGHT - 330,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <TabView value={tabIndex} onChange={setTabIndex}>
            <TabView.Item>
              <FlatList
                data={DOCTOR_DATA}
                keyExtractor={(_, index) => `${index}`}
                renderItem={({ item }) => (
                  <ImageListItem
                    image={item.photo}
                    title={item.name}
                    subtitle={item.spec}
                    rating={item.rating}
                  />
                )}
              />
            </TabView.Item>
            <TabView.Item>
              <CustomText type="display1">Services</CustomText>
            </TabView.Item>
            <TabView.Item>
              <CustomText type="display1">Review</CustomText>
            </TabView.Item>
          </TabView>
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default Details;
