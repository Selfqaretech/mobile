import { View, StyleSheet, Modal } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import CustomText from "@src/component/text";
import useCustomTheme from "@src/hooks/useCustomTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import ThrobbingWrapper from "@src/component/pulse/Wrapper";
import { Location as LocationIcon } from "iconsax-react-native";
import { CustomButton } from "@src/component/button";
import Spacing from "@src/component/spacing";

import * as Location from "expo-location";

const LocationSelect = () => {
  const { theme, mode } = useCustomTheme();
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  useMemo(async () => {
    try {
      const locationEnabled = await Location.hasServicesEnabledAsync();
      setShowRequestModal(!locationEnabled);
      if (locationEnabled) {
        setLocation(await Location.getCurrentPositionAsync());
      }
    } catch (error) {
      setLocation(null);
    }
  }, []);

  const askLocationPermission = useCallback(async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setShowRequestModal(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <MapView
        userInterfaceStyle={mode}
        showsUserLocation={!!location}
        style={[StyleSheet.absoluteFill]}
        onPress={() => setShowRequestModal(true)}
        region={{
          latitude: location?.coords.latitude.valueOf() || 37.78825,
          longitude: location?.coords.longitude.valueOf() || -122.4324,
          latitudeDelta: 0.001,
          longitudeDelta: 0.045,
        }}
      />
      <Modal
        visible={showRequestModal}
        transparent
        onRequestClose={() => {
          setShowRequestModal(false);
        }}
        animationType="fade"
      >
        <View
          style={{
            backgroundColor: theme.colors.background,
            width: "80%",
            alignSelf: "center",
            top: "20%",
            borderRadius: 12,
            alignItems: "center",
            padding: 24,
            gap: 8,
          }}
        >
          <ThrobbingWrapper>
            <LocationIcon color={theme.colors.white} variant="Bold" size={30} />
          </ThrobbingWrapper>
          <CustomText type="title1" color="textPrimary" center>
            Enable your location
          </CustomText>
          <CustomText color="textSecondary" center>
            Choose your location to start finding the stores around you
          </CustomText>
          <Spacing />
          <CustomButton
            fullWidth
            raised={false}
            onPress={askLocationPermission}
          >
            Use my location
          </CustomButton>
          <CustomButton type="clear" textColor="primaryText" fullWidth>
            Skip for now
          </CustomButton>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default LocationSelect;
