import React, { useState, PropsWithChildren } from "react";

type SessionProps = {
  signIn: () => void;
  signOut: () => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  isLoggedIn: boolean;
};

const AuthContext = React.createContext<SessionProps | null>(null);

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext<SessionProps | null>(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }
  return value;
}

export const SessionProvider: React.FC<PropsWithChildren> = (props) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setIsLoggedIn(true);
          setLoading(false);
        },
        signOut: () => {
          setIsLoggedIn(false);
          setLoading(false);
        },
        isLoading,
        setLoading,
        isLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
