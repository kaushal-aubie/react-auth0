import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { auth0ProviderConfig } from "../config";

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Auth0Provider
      domain={auth0ProviderConfig.domain}
      clientId={auth0ProviderConfig.clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default AllProviders;
