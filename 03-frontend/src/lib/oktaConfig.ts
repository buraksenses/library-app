export const oktaConfig = {
  clientId: "0oab3p7zgl5jcojSe5d7",
  issuer: "https://dev-34201742.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
