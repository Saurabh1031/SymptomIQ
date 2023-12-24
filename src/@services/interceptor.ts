import axios from "axios";
//import { clearLocalStorage } from "@app/utils";
import { msalInstance } from "../index";
import { loginRequest, azureAuthentication } from "../modules/azure";
const AZUREAUTHENTICATION: boolean = azureAuthentication.run();

const baseURL = process.env.REACT_APP_API_URL;
const service = axios.create({ baseURL });
const loginService = axios.create({ baseURL });

const saveToken = (access_token: any, refresh_token: any) => {
  localStorage.setItem("healthbot_pwa_access_token", access_token);
  localStorage.setItem("healthbot_pwa_refresh_token", refresh_token);
};

// const destroyToken = () => {
//   clearLocalStorage();
// };

service.interceptors.request.use(async (config: any) => {
  config.headers["x-health-bot-app-name"] = "health-bot-app";
  const access_token = localStorage.getItem("health-bot_pwa_access_token");

  if (AZUREAUTHENTICATION) {
    const account = msalInstance.getActiveAccount();
    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: account,
      //forceRefresh: false,
    });
    if (response) {
      const bearer = `Bearer ${response.accessToken}`;
      config.headers.Authorization = bearer;
    } else {
      config.headers.Authorization = access_token
        ? `Bearer ${access_token}`
        : config.url.includes("auth")
        ? "test"
        : "";
    }
  } else {
    config.headers.Authorization = access_token
      ? `Bearer ${access_token}`
      : config.url.includes("auth")
      ? "test"
      : "";
  }
  return config;
});

export { service, loginService };
