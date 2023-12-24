import { loginRequest } from "./authConfig";
import { msalInstance } from "../../index";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { getPatientId } from "@app/utils";

export async function callMsGraph(accessRequest = "") {
  //const history: any = useHistory();
  const account = msalInstance.getActiveAccount();
  if (!account) {
    throw Error(
      "No active account! Verify a user has been signed in and setActiveAccount has been called."
    );
  }
  var request = {
    scopes: [process.env.REACT_APP_AZURE_SCOPES_URL],
    loginHint: account.name,
  };

  const response = await msalInstance
    .acquireTokenSilent({
      ...loginRequest,
      account: account,
      //forceRefresh: false,
    })
    .catch((error) => {
      if (error instanceof InteractionRequiredAuthError) {
        // fallback to interaction when silent call fails
        //console.log("regenerating....")
        return msalInstance.acquireTokenRedirect(request);
      }
    });
  const headers = new Headers();
  const bearer = `Bearer ${response.accessToken}`;
  headers.append("Authorization", bearer);
  if (response) {
    localStorage.setItem("symptoms_analyzer_pwa_access_token", response.accessToken);
    if (accessRequest == "New") {
      console.info(
        "%cA new token has been generated, Proceeding with member re sign in.",
        "color: #494E9D; background: #494e9d21; font-size: 10px"
      );
      let patientId = getPatientId();
      if (patientId) {
        // memberSignIn({ svassUserId: patientId }).then((response: any) => {
        //   if (response.status == 200) {
        //     window.location.reload()
        //   }
        // });
      } else {
        //window.location.href = `${process.env.REACT_APP_HOMEPAGE}/homescreen`
      }
    }
  }
  return response;
}
