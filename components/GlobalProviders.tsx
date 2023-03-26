"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "./auth/AuthContext";

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}

export default function GlobalProviders({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </QueryClientProvider>
  );
}
