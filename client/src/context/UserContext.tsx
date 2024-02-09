import React, { createContext, useState } from "react";
import { WishlistItemType } from "./WishlistContext";
import { CartItemType } from "./CartContext";

export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  imgUrl: string;
  cart: CartItemType[];
  wishlist: WishlistItemType[];
  store: string;
};

export type UserProviderValue = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  udpateUser: (user: UserType | null) => void;
};

export const UserContext = createContext<UserProviderValue | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType | null>(null);

  async function udpateUser(userData: UserType | null) {
    if (userData) {
      setUser(userData);
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, udpateUser }}>
      {children}
    </UserContext.Provider>
  );
}
