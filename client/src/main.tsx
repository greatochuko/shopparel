// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CartProvider from "./context/CartContext.tsx";
import UserProvider from "./context/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <GoogleOAuthProvider clientId="706224660980-e7fmqf7f5g7kldmnik6e9tf11domb193.apps.googleusercontent.com">
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>
  </GoogleOAuthProvider>
  // </React.StrictMode>
);
