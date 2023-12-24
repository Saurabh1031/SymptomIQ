import React, { useEffect, useState } from "react";
import { callMsGraph } from "./graphConfig";
import { loginRequest } from "./authConfig";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import {
  InteractionStatus,
  InteractionType,
  InteractionRequiredAuthError,
  AccountInfo,
} from "@azure/msal-browser";
import App from "../../App";
import SvassLoginLoader from "@app/assets/icons/svaasloginloader";


function AzureRoute() {
  const { instance, inProgress } = useMsal();
  const [graphData, setGraphData] = useState<any>(null);
  // const { name } = useParams<RouteParams>();

  useEffect(() => {
    if (!graphData && inProgress === InteractionStatus.None) {
      callMsGraph()
        .then((response) => {
          setGraphData(response);
        })

        .catch((e) => {
          if (e instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect({
              ...loginRequest,
              account: instance.getActiveAccount() as AccountInfo,
            });
          }
        });
    }
  }, [inProgress, graphData, instance]);


  const authRequest = {
    ...loginRequest,
  };
  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={authRequest}
      errorComponent={() => <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "0",
        top: "0",
        display: "flex",
        fontWeight: "600",
        alignItems: "center",
        pointerEvents: "none",
        justifyContent: "center",
      }}>You are offline. No connection.</div>}
      loadingComponent={() => (
        <SvassLoginLoader />
      )
      }>
      <>
        <App />
      </>
    </MsalAuthenticationTemplate >
  );
}
export default AzureRoute;
