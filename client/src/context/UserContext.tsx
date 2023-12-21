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
};

export type UserProviderValue = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

export const UserContext = createContext<UserProviderValue | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
