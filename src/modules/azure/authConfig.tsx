import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: any = {
  auth: {
    clientId: process.env.REACT_APP_AZURE_CLIENT_ID,
    authority: process.env.REACT_APP_AZURE_AUTHORITY,
    knownAuthorities: [process.env.REACT_APP_AZURE_KNOWN_AUTHORITIES],
    redirectUri: `${process.env.REACT_APP_HOST}app/healthbot/`,
    postLogoutRedirectUri: `${process.env.REACT_APP_HOST}`,
    navigateToLoginRequestUrl: false,
  },
};
// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: any = {
  scopes: [process.env.REACT_APP_AZURE_SCOPES_URL],
};
