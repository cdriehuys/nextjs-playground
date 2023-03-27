"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { HTMLProps } from "react";

const ExternalLink = ({ children, ...rest }: HTMLProps<HTMLAnchorElement>) => (
  <a {...rest}>{children}</a>
);

export default function NavbarAuthLinks() {
  const { error, isLoading, user } = useUser();

  if (isLoading || error) {
    return null;
  }

  if (!user) {
    return (
      <>
        <ExternalLink href="/api/auth/login">Log In</ExternalLink>
        <ExternalLink href="/api/auth/signup">Sign Up</ExternalLink>
      </>
    );
  }

  return <>{user.name}</>;
}
