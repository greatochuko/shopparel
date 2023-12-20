import React, { createContext, useCallback, useState } from "react";
import { fetchSyncCart } from "../services/cartServices";

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  imgUrl: string;
  _id: string;
};

export type UserProviderValue = {
  user: UserType | null;
  updateUser: (userData: UserType | null) => void;
};

export const UserContext = createContext<UserProviderValue | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType | null>(null);

  const updateUser = useCallback(async function updateUser(
    userData: UserType | null
  ) {
    const localStorageCart = localStorage.getItem("cart");
    if (localStorageCart) {
      const localCart = JSON.parse(localStorageCart);
      const data = await fetchSyncCart(localCart);
      if (data.error) return;

      localStorage.removeItem("cart");
    }
    setUser(userData);
  },
  []);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
