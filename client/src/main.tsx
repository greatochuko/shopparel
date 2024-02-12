// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CartProvider from "./context/CartContext.tsx";
import UserProvider from "./context/UserContext.tsx";
import WishlistProvider from "./context/WishlistContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <GoogleOAuthProvider clientId={import.meta.env.VITE_API_CLIENT_ID}>
    <WishlistProvider>
      <UserProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>
    </WishlistProvider>
  </GoogleOAuthProvider>
  // </React.StrictMode>
);
