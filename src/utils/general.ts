/* eslint-disable */
import VALIDATEDDEEPLINK from "../deeplink.config";

export const clearLocalStorage = () => {
  localStorage.removeItem("symptoms_analyzer_pwa_access_token");
  localStorage.removeItem("symptoms_analyzer_pwa_refresh_token");
  localStorage.removeItem("symptoms_analyzer_pwa_tenant_name");
  localStorage.removeItem("symptoms_analyzer_pwa_user_type");
  localStorage.removeItem("myUserDetails");
  if (sessionStorage.getItem("AzureException") != "true") {
    sessionStorage.clear();
  }
};

export const validateSession = () => {
  let token = localStorage.getItem("symptoms_analyzer_pwa_access_token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const capitalize = (param: any) => {
  return param[0].toUpperCase() + param.slice(1);
};

export const getPatientId = () => {
  return sessionStorage.getItem("patientId");
};
// azure redirect
export const FetchDeepLink = (url: any) => {
  const VALIDATELINK: any = VALIDATEDDEEPLINK(url);
  const ISLINKEXPIRED: boolean = sessionStorage.getItem(
    "symptoms_analyzer_pwa_deeplink_done"
  )
    ? true
    : false;
  const ISNONREDIRECTURL: any = sessionStorage.getItem(
    "symptoms_analyzer_pwa_non_redirect_url"
  )
    ? true
    : false; // after payment done...
  if (VALIDATELINK && !ISLINKEXPIRED) {
    sessionStorage.setItem("symptoms_analyzer_pwa_deeplink_done", "done");
    sessionStorage.setItem("symptoms_analyzer_pwa_path_name", url.href);
  } else {
    sessionStorage.setItem("symptoms_analyzer_pwa_deeplink_done", "done");
  }
};
export const getShortName = (user: any) => {
  let name = "";
  if (user?.firstName) {
    name = name + user?.firstName.charAt(0).toUpperCase();
  }
  if (user?.lastName) {
    name = name + user?.lastName.charAt(0).toUpperCase();
  }
  return name;
};
export function detectDevice() {
  //For Ios
  const params: any = new URLSearchParams(window.location.search);
  const pathnNme: any = window.location.pathname;
  const targetPath: any = `${process.env.REACT_APP_HOMEPAGE}/homesreen`;
  if (pathnNme == targetPath && params.get("device") == "true") {
    console.info(
      "%cCreated bridge flag for devices",
      "color: white; background: green; font-size: 12px"
    );
    sessionStorage.setItem("isBridgeAccess", "true");
    return true;
  } else {
    return false;
  }
}

export const fnBrowserDetect = () => {
  let userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "Chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "Firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "Safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "Opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "Edge";
  } else {
    browserName = "No browser detection";
  }
  return browserName;
};

export function AzureException() {
  //For Android, login directly  with azure/normal tokens
  const params: any = new URLSearchParams(window.location.search);
  const pathnNme: any = window.location.pathname;
  const bridgePath: any = `${process.env.REACT_APP_HOMEPAGE}/bridge`;
  const autologinPath: any = `${process.env.REACT_APP_HOMEPAGE}/autologin`;
  if (pathnNme == bridgePath) {
    //console.info('%cBypassing Azure.', 'color: white; background: green; font-size: 12px');
    //sessionStorage.setItem("AzureException", "true");
    //return true;
    return false;
  } else if (pathnNme == autologinPath) {
    console.info(
      "%cBypassing Azure, Redirect to login...",
      "color: white; background: #1662c7; font-size: 12px"
    );
    sessionStorage.setItem("AzureException", "true");
    return true;
  } else {
    return false;
  }
}
export const getTenant = () => {
  const url = new URL(window.location.href);
  var appTenant: any = localStorage.getItem("svaas_cpwa_tenant_name");

  if (url.pathname.includes("/sbi") || appTenant?.toLowerCase() == "sbi") {
    return "SBI";
  } else if (
    url.pathname.includes("/abhi") ||
    appTenant?.toLowerCase() == "abhi"
  ) {
    return "Abhi";
  } else {
    return "Abhi";
  }
};

export const camelCase = (name: string) => {
  const words = name.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(" ");
};
