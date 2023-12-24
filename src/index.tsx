import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  PublicClientApplication,
  EventType,
  EventMessage,
  AuthenticationResult,
} from "@azure/msal-browser";
import { azureAuthentication, msalConfig } from "./modules/azure";
import AzureApp from "./modules/azure/azureApp";
import App from "./App";

export const msalInstance: any = new PublicClientApplication(msalConfig);
const AZUREAUTHENTICATION: boolean = azureAuthentication.run();
//bridge?name=sandeep&dob=14/01/1990&gender=male&userid=123
const queryParams = new URLSearchParams(window.location.search);
const name = queryParams.get('name') || "";
const dob = queryParams.get('dob') || ""
const gender = queryParams.get('gender') || "";
const userid = queryParams.get('userid') || "";
const svaasToken = queryParams.get('svaasToken') || "";
//console.log("userid: ", userid);
//console.log("window.location.search ", window.location.search);
if (name != "" && dob != "" && gender != "" && userid != "" && svaasToken != "") {
  localStorage.setItem('name', name);
  localStorage.setItem('dob', dob);
  localStorage.setItem('gender', gender);
  localStorage.setItem('userid', userid);
  localStorage.setItem('svaasToken', atob(svaasToken));
}
if (AZUREAUTHENTICATION) {
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  // console.log("msalConfig ", msalConfig);
  // console.log("msalInstance ", msalInstance);
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }

  msalInstance.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      const payload = event.payload as AuthenticationResult;
      const account = payload.account;
      msalInstance.setActiveAccount(account);
    }
  });
}

ReactDOM.render(
  <React.StrictMode>
    {AZUREAUTHENTICATION ? <AzureApp pca={msalInstance} /> : <App />}
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
