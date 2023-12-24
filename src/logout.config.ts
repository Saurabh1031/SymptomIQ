import { msalInstance } from "./";
export var logoutConfig = {
  logout: (expire: boolean) => {
    if (process.env.REACT_APP_ENABLE_AZURE == "true") {
      logoutConfig.initialize(expire);
    } else {
      // window.location.href = `${process.env.REACT_APP_HOMEPAGE}/login`;
    }
  },
  initialize: async (expire: boolean) => {
    const accounts = msalInstance.getAllAccounts();
    let homeAccountId = accounts[0].homeAccountId;
    let logoutRedirect = `${process.env.REACT_APP_HOST}`;
    let isDevice = sessionStorage.getItem("isBridgeAccess");
    localStorage.clear();
    sessionStorage.clear();

    if (isDevice) {
      logoutRedirect = `${process.env.REACT_APP_HOST}`;
      if (expire) {
        localStorage.setItem("isBridgeAccessExpired", "true");
      } else {
        localStorage.removeItem("isBridgeAccessExpired");
      }
    }

    const logoutRequest = {
      account: msalInstance.getAccountByHomeId(homeAccountId),
      postLogoutRedirectUri: logoutRedirect,
    };

    await msalInstance.logoutRedirect(logoutRequest);
  },
};
