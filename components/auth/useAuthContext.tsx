"use client";

import { useContext } from "react";
import { AuthContextStorage } from "./AuthContext";

interface AuthenticatedData {
  isLoggedIn: true;
  token: string;
}

interface AnonymousData {
  isLoggedIn: false;
}

type AuthContextData = (AuthenticatedData | AnonymousData) & {
  setToken: (token: string) => void;
};

const useAuthContext = (): AuthContextData => {
  const { token, setToken } = useContext(AuthContextStorage);

  const baseData = { setToken };

  if (!!token) {
    return {
      ...baseData,
      isLoggedIn: true,
      token,
    };
  }

  return { ...baseData, isLoggedIn: false };
};

export default useAuthContext;
