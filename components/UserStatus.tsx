"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function UserStatus() {
  const { user, error, isLoading } = useUser();

  return (
    <p>
      <span className="font-bold">User:</span>{" "}
      {isLoading ? (
        "Loading..."
      ) : error ? (
        <span className="text-red-500">{error.message}</span>
      ) : user ? (
        user.name
      ) : (
        "I got nothing."
      )}
    </p>
  );
}
