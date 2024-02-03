import * as React from "react";
import NetInfo, { NetInfoSubscription } from "@react-native-community/netinfo";
import { onlineManager } from "@tanstack/react-query";
import { Platform } from "react-native";

export function useOnlineManager() {
  React.useMemo<NetInfoSubscription | undefined>(() => {
    // React Query already supports on reconnect auto refetch in web browser
    if (Platform.OS !== "web") {
      return NetInfo.addEventListener((state) => {
        onlineManager.setOnline(
          state.isConnected != null &&
            state.isConnected &&
            Boolean(state.isInternetReachable)
        );
      });
    }
    return;
  }, []);
}