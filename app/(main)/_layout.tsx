import React, { useEffect } from "react";
import { Slot, router } from "expo-router";
import { useSession } from "@src/component/wrappers/Auth/ctx";

const Layout = () => {
  const { isLoggedIn, isLoading } = useSession() || {};

  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      router.replace("/(auth)/login");
    }
  }, [isLoggedIn, isLoading]);

  if (isLoading) return null;

  return <Slot />;
};

export default Layout;
