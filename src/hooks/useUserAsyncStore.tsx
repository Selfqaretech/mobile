import { useCallback } from "react";
import * as SecureStore from "expo-secure-store";
import { UserProps } from "@src/@types/auth/user";

const userStoreKey = "selfqare-user";

const useUserAsyncStore = () => {
  const storeUser = async (user: Partial<UserProps>): Promise<void> => {
    try {
      await SecureStore.setItemAsync(userStoreKey, JSON.stringify(user));
    } catch (e) {
      console.error("Store User Error - ", e);
    }
  };

  const getStoredUser = async (): Promise<Partial<UserProps>> => {
    try {
      const storedUser = (await SecureStore.getItemAsync(userStoreKey)) as
        | string
        | null;
      if (!storedUser) throw "No stored user available";
      return JSON.parse(storedUser);
    } catch (e) {
      // console.error("Get Stored User Error - ", e);
      return {};
    }
  };

  const hasStoredUser = useCallback(async (): Promise<boolean> => {
    try {
      const storedUser = (await SecureStore.getItemAsync(userStoreKey)) as
        | string
        | null;
      return !!storedUser;
    } catch (e) {
      // console.error("Check Stored User Error - ", e);
      return false;
    }
  }, []);

  const clearStoredUser = useCallback(async (): Promise<void> => {
    try {
      await SecureStore.deleteItemAsync(userStoreKey);
    } catch (e) {
      console.error("Delete Stored User Error - ", e);
    }
  }, []);

  return {
    storeUser,
    hasStoredUser,
    getStoredUser,
    clearStoredUser,
  };
};

export default useUserAsyncStore;
