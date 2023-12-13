import React, { createContext, useState } from "react";

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  imgUrl: string;
  _id: string;
};

export type UserProviderValue = {
  user: UserType | null;
  setUser: React.Dispatch<UserType | null>;
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
