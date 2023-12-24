import React from "react";
// import * as msal from "msal";
import { AzureException, detectDevice, fnBrowserDetect, FetchDeepLink } from '@app/utils';
const url: any = window.location; //// This will store before page redirection.
var azureAuthentication = {
  run: () => {
    if (process.env.REACT_APP_ENABLE_AZURE == 'true') {
      //detectDevice();
      //FetchDeepLink(url);
      if (AzureException() || sessionStorage.getItem("AzureException")) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  },
};
export default azureAuthentication;