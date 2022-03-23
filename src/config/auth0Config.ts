const auth0ProviderConfig = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN ?? "",
  clientId: process.env.REACT_APP_AUTH0_CLIENTID ?? "",
};

export { auth0ProviderConfig };
