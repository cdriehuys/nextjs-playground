"use client";

import React, { createContext, useEffect, useState } from "react";

interface AuthContextStoredData {
  token: string | null;
  setToken: (token: string) => void;
}

export const AuthContextStorage = createContext<AuthContextStoredData>({
  token: null,
  setToken: () => {
    // Noop default
  },
});

interface Props {
  children?: React.ReactNode;
}

const AUTH_TOKEN_KEY = "authToken";

/**
 * Context provider for authentication data.
 *
 * To consume this value, use the `useAuthContext` hook.
 */
const AuthContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem(AUTH_TOKEN_KEY)
  );

  // Cache the token value in local storage to persist across reloads.
  useEffect(() => {
    if (!!token) {
      try {
        localStorage.setItem(AUTH_TOKEN_KEY, token);
      } catch (e) {
        // Don't do anything because caching the value is a convenience, not a
        // necessity.
      }
    } else {
      localStorage.removeItem(AUTH_TOKEN_KEY);
    }
  }, [token]);

  return (
    <AuthContextStorage.Provider value={{ token, setToken }}>
      {children}
    </AuthContextStorage.Provider>
  );
};

export default AuthContextProvider;
