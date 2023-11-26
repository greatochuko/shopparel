import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UserProvider from "./context/userContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="706224660980-e7fmqf7f5g7kldmnik6e9tf11domb193.apps.googleusercontent.com">
      <UserProvider>
        <App />
      </UserProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
