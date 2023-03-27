import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

const authorizationParams = {
  audience: "axum-playground",
  scope: "openid profile email",
};

export default handleAuth({
  login: handleLogin({
    authorizationParams,
  }),
  signup: handleLogin({
    authorizationParams: { ...authorizationParams, screen_hint: "signup" },
  }),
});
