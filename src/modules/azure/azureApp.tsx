
import React from "react";
import { useHistory, useParams } from "react-router-dom";

// MSAL imports
import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import { CustomNavigationClient } from "./navigantion";
import AzureRoute from "./azureRouting";

type AppProps = {
  pca: IPublicClientApplication;
};
interface RouteParams {
  name: string;
  // Add other parameters if needed
}


function AzureApp({ pca }: AppProps) {
  // The next 3 lines are optional. This is how you configure MSAL to take advantage of the router's navigate functions when MSAL redirects between pages in your app
  const history = useHistory();
  const navigationClient = new CustomNavigationClient(history);
  pca.setNavigationClient(navigationClient);

  return (
    <MsalProvider instance={pca}>
      <AzureRoute />
    </MsalProvider>
  );
}

export default AzureApp;
