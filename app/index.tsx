import { useSession } from "@src/component/wrappers/Auth/ctx";
import { Redirect } from "expo-router";
import React from "react";

const Index = () => {
  const { isLoading } = useSession() || {};

  if (isLoading) return null;

  return <Redirect href="/(auth)/login" />;
};

export default Index;
